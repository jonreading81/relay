/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow strict-local
 * @format
 * @oncall relay
 */

'use strict';

import type {GraphQLResponse} from 'relay-runtime/network/RelayNetworkTypes';
import type {Sink} from 'relay-runtime/network/RelayObservable';
import type {RequestParameters} from 'relay-runtime/util/RelayConcreteNode';
import type {
  CacheConfig,
  Variables,
} from 'relay-runtime/util/RelayRuntimeTypes';

const {
  MultiActorEnvironment,
  getActorIdentifier,
} = require('relay-runtime/multi-actor-environment');
const RelayNetwork = require('relay-runtime/network/RelayNetwork');
const RelayObservable = require('relay-runtime/network/RelayObservable');
const {graphql} = require('relay-runtime/query/GraphQLTag');
const RelayModernEnvironment = require('relay-runtime/store/RelayModernEnvironment');
const {
  createOperationDescriptor,
} = require('relay-runtime/store/RelayModernOperationDescriptor');
const {
  createReaderSelector,
} = require('relay-runtime/store/RelayModernSelector');
const RelayModernStore = require('relay-runtime/store/RelayModernStore');
const RelayRecordSource = require('relay-runtime/store/RelayRecordSource');
const {ROOT_ID} = require('relay-runtime/store/RelayStoreUtils');
const {disallowWarnings} = require('relay-test-utils-internal');

disallowWarnings();

describe.each(['RelayModernEnvironment', 'MultiActorEnvironment'])(
  'execute() a query with @defer at the query root',
  environmentType => {
    let callbacks;
    let complete;
    let dataSource;
    let environment;
    let error;
    let next;

    const createEnvironment = (
      getDataID?: $FlowFixMe,
      deferDeduplicatedFields?: boolean,
    ) => {
      const fetch = (
        _query: RequestParameters,
        _variables: Variables,
        _cacheConfig: CacheConfig,
      ): RelayObservable<GraphQLResponse> => {
        return RelayObservable.create<GraphQLResponse>(
          (sink: Sink<GraphQLResponse>) => {
            dataSource = sink;
          },
        );
      };
      const store = new RelayModernStore(RelayRecordSource.create());
      const multiActorEnvironment = new MultiActorEnvironment({
        createNetworkForActor: _actorID => RelayNetwork.create(fetch),
        createStoreForActor: _actorID => store,
        getDataID,
        deferDeduplicatedFields,
      });
      return environmentType === 'MultiActorEnvironment'
        ? multiActorEnvironment.forActor(getActorIdentifier('actor:1234'))
        : new RelayModernEnvironment({
            network: RelayNetwork.create(fetch),
            store,
            getDataID,
            deferDeduplicatedFields,
          });
    };

    describe(environmentType, () => {
      beforeEach(() => {
        complete = jest.fn<[], unknown>();
        error = jest.fn<[Error], unknown>();
        next = jest.fn<[GraphQLResponse], unknown>();
        callbacks = {complete, error, next};
        environment = createEnvironment();
      });

      it('processes a chunk for a fragment deferred at the query root', () => {
        const query = graphql`
          query RelayModernEnvironmentExecuteWithDeferAtQueryRootTestRootQuery {
            viewer {
              isFbEmployee
            }
            ...RelayModernEnvironmentExecuteWithDeferAtQueryRootTestRootFragment
              @dangerously_unaliased_fixme
              @defer(label: "RootFragment")
          }
        `;
        const fragment = graphql`
          fragment RelayModernEnvironmentExecuteWithDeferAtQueryRootTestRootFragment on Query {
            viewer {
              primaryEmail
            }
          }
        `;
        const operation = createOperationDescriptor(query, {});
        const selector = createReaderSelector(
          fragment,
          ROOT_ID,
          {},
          operation.request,
        );

        environment.execute({operation}).subscribe(callbacks);
        // The placeholder for the root fragment registers at path [] — the
        // empty prefix — while its chunks arrive at ['viewer', ...].
        dataSource.next({
          data: {viewer: {isFbEmployee: false}},
        });
        jest.runAllTimers();
        next.mockClear();

        dataSource.next({
          data: {primaryEmail: 'alice@example.com'},
          label:
            'RelayModernEnvironmentExecuteWithDeferAtQueryRootTestRootQuery$defer$RootFragment',
          path: ['viewer'],
        });

        expect(complete).toBeCalledTimes(0);
        expect(error).toBeCalledTimes(0);
        const snapshot = environment.lookup(selector);
        expect(snapshot.isMissingData).toBe(false);
        expect(snapshot.data).toEqual({
          viewer: {primaryEmail: 'alice@example.com'},
        });
      });

      it('keeps the record identity stable when a deduplicated chunk omits the fields getDataID derives it from', () => {
        // Mirrors defaultGetDataID's Viewer special case for schemas whose
        // Viewer carries a real identity: identity comes from the payload
        // when present, and falls back to a constant when it is not.
        const getDataID = (fieldValue: $FlowFixMe, typeName: string) => {
          if (typeName === 'Viewer') {
            return (
              fieldValue.id ??
              (fieldValue.primaryEmail != null
                ? `viewer-${String(fieldValue.primaryEmail)}`
                : 'viewer-fallback')
            );
          }
          return fieldValue.id;
        };
        environment = createEnvironment(getDataID);

        const query = graphql`
          query RelayModernEnvironmentExecuteWithDeferAtQueryRootTestViewerQuery {
            viewer {
              primaryEmail
            }
            ...RelayModernEnvironmentExecuteWithDeferAtQueryRootTestViewerFragment
              @dangerously_unaliased_fixme
              @defer(label: "ViewerFragment")
          }
        `;
        const fragment = graphql`
          fragment RelayModernEnvironmentExecuteWithDeferAtQueryRootTestViewerFragment on Query {
            viewer {
              isFbEmployee
            }
          }
        `;
        const operation = createOperationDescriptor(query, {});
        const selector = createReaderSelector(
          fragment,
          ROOT_ID,
          {},
          operation.request,
        );

        environment.execute({operation}).subscribe(callbacks);
        dataSource.next({
          data: {viewer: {primaryEmail: 'alice@example.com'}},
        });
        jest.runAllTimers();
        next.mockClear();

        // The server dedupes already-delivered fields, so the chunk carries
        // neither `id` nor `primaryEmail`. Re-deriving identity from the
        // partial payload would answer the fallback constant, repointing the
        // root's viewer link away from the record the initial payload
        // created — stranding the chunk's fields and leaving the operation
        // permanently incomplete, which store-or-network readers answer by
        // refetching. Injecting the store's id keeps identity stable.
        dataSource.next({
          data: {isFbEmployee: true},
          label:
            'RelayModernEnvironmentExecuteWithDeferAtQueryRootTestViewerQuery$defer$ViewerFragment',
          path: ['viewer'],
        });

        expect(complete).toBeCalledTimes(0);
        expect(error).toBeCalledTimes(0);
        const snapshot = environment.lookup(selector);
        expect(snapshot.isMissingData).toBe(false);
        expect(snapshot.data).toEqual({viewer: {isFbEmployee: true}});
        const querySnapshot = environment.lookup(operation.fragment);
        expect(querySnapshot.isMissingData).toBe(false);
        expect((querySnapshot.data as $FlowFixMe).viewer.primaryEmail).toBe(
          'alice@example.com',
        );
        expect(environment.check(operation).status).toBe('available');
      });

      it('lands a root-deferred chunk addressed two links down on the linked records', () => {
        const query = graphql`
          query RelayModernEnvironmentExecuteWithDeferAtQueryRootTestAccountQuery {
            viewer {
              account_user {
                id
              }
            }
            ...RelayModernEnvironmentExecuteWithDeferAtQueryRootTestAccountFragment
              @dangerously_unaliased_fixme
              @defer(label: "AccountFragment")
          }
        `;
        const fragment = graphql`
          fragment RelayModernEnvironmentExecuteWithDeferAtQueryRootTestAccountFragment on Query {
            viewer {
              account_user {
                name
              }
            }
          }
        `;
        const operation = createOperationDescriptor(query, {});
        const selector = createReaderSelector(
          fragment,
          ROOT_ID,
          {},
          operation.request,
        );

        environment.execute({operation}).subscribe(callbacks);
        dataSource.next({
          data: {
            viewer: {
              account_user: {id: '100'},
            },
          },
        });
        jest.runAllTimers();
        next.mockClear();

        dataSource.next({
          data: {name: 'Alice'},
          label:
            'RelayModernEnvironmentExecuteWithDeferAtQueryRootTestAccountQuery$defer$AccountFragment',
          path: ['viewer', 'account_user'],
        });

        expect(complete).toBeCalledTimes(0);
        expect(error).toBeCalledTimes(0);
        const snapshot = environment.lookup(selector);
        expect(snapshot.isMissingData).toBe(false);
        expect(snapshot.data).toEqual({
          viewer: {account_user: {name: 'Alice'}},
        });
        expect(environment.check(operation).status).toBe('available');
      });

      it('resolves a sub-path chunk against a sibling published in the same batch', () => {
        environment = createEnvironment(undefined, true);

        const query = graphql`
          query RelayModernEnvironmentExecuteWithDeferAtQueryRootTestBatchQuery {
            me {
              id
            }
            ...RelayModernEnvironmentExecuteWithDeferAtQueryRootTestBatchFragment
              @dangerously_unaliased_fixme
              @defer(label: "BatchFragment")
          }
        `;
        const fragment = graphql`
          fragment RelayModernEnvironmentExecuteWithDeferAtQueryRootTestBatchFragment on Query {
            viewer {
              account_user {
                id
                name
              }
            }
          }
        `;
        const operation = createOperationDescriptor(query, {});
        const selector = createReaderSelector(
          fragment,
          ROOT_ID,
          {},
          operation.request,
        );
        const label =
          'RelayModernEnvironmentExecuteWithDeferAtQueryRootTestBatchQuery$defer$BatchFragment';

        environment.execute({operation}).subscribe(callbacks);
        dataSource.next({
          data: {me: {id: 'me-1'}},
        });
        jest.runAllTimers();
        next.mockClear();

        // Both chunks are published together: the first links account_user and
        // gives it an id, the second is addressed at that link and — because
        // the server omits an already-delivered field — carries no id of its
        // own. Resolving it against the store alone fails, since the batch is
        // published once, after every chunk in it has been normalized.
        dataSource.next([
          {
            data: {viewer: {account_user: {id: '100'}}},
            label,
            path: [],
          },
          {
            data: {name: 'Alice'},
            label,
            path: ['viewer', 'account_user'],
          },
        ]);

        expect(error.mock.calls.map(call => call[0].message)).toEqual([]);
        const snapshot = environment.lookup(selector);
        expect(snapshot.isMissingData).toBe(false);
        expect(snapshot.data).toEqual({
          viewer: {account_user: {id: '100', name: 'Alice'}},
        });
      });

      it('reports an operation whose initial payload writes nothing as pending', () => {
        const query = graphql`
          query RelayModernEnvironmentExecuteWithDeferAtQueryRootTestEmptyQuery {
            ...RelayModernEnvironmentExecuteWithDeferAtQueryRootTestEmptyFragment
              @dangerously_unaliased_fixme
              @defer(label: "EmptyFragment")
          }
        `;
        const fragment = graphql`
          fragment RelayModernEnvironmentExecuteWithDeferAtQueryRootTestEmptyFragment on Query {
            viewer {
              isFbEmployee
            }
          }
        `;
        const operation = createOperationDescriptor(query, {});
        const selector = createReaderSelector(
          fragment,
          ROOT_ID,
          {},
          operation.request,
        );

        environment.execute({operation}).subscribe(callbacks);
        // Every root selection is deferred, so the initial payload is empty
        // and writes no records. Readers of the deferred fragments still need
        // the operation to count as in flight, or a missing-data read renders
        // as final instead of suspending.
        dataSource.next({data: {}});
        jest.runAllTimers();

        expect(
          environment
            .getOperationTracker()
            .getPendingOperationsAffectingOwner(operation.request),
        ).not.toBe(null);

        dataSource.next({
          data: {viewer: {isFbEmployee: true}},
          label:
            'RelayModernEnvironmentExecuteWithDeferAtQueryRootTestEmptyQuery$defer$EmptyFragment',
          path: [],
        });
        dataSource.complete();

        expect(error).toBeCalledTimes(0);
        expect(complete).toBeCalledTimes(1);
        const snapshot = environment.lookup(selector);
        expect(snapshot.isMissingData).toBe(false);
        expect(snapshot.data).toEqual({viewer: {isFbEmployee: true}});
        expect(
          environment
            .getOperationTracker()
            .getPendingOperationsAffectingOwner(operation.request),
        ).toBe(null);
      });

      it('drains a queued chunk whose @defer sits inside a linked field of its parent', () => {
        environment = createEnvironment(undefined, true);

        const query = graphql`
          query RelayModernEnvironmentExecuteWithDeferAtQueryRootTestQueuedQuery {
            me {
              id
            }
            ...RelayModernEnvironmentExecuteWithDeferAtQueryRootTestQueuedOuter
              @dangerously_unaliased_fixme
              @defer(label: "QueuedOuter")
          }
        `;
        graphql`
          fragment RelayModernEnvironmentExecuteWithDeferAtQueryRootTestQueuedOuter on Query {
            viewer {
              account_user {
                id
                ...RelayModernEnvironmentExecuteWithDeferAtQueryRootTestQueuedInner
                  @dangerously_unaliased_fixme
                  @defer(label: "QueuedInner")
              }
            }
          }
        `;
        const innerFragment = graphql`
          fragment RelayModernEnvironmentExecuteWithDeferAtQueryRootTestQueuedInner on User {
            name
            allPhones {
              isVerified
            }
          }
        `;
        const operation = createOperationDescriptor(query, {});
        const innerSelector = createReaderSelector(
          innerFragment,
          '100',
          {},
          operation.request,
        );

        environment.execute({operation}).subscribe(callbacks);
        dataSource.next({
          data: {me: {id: 'me-1'}},
        });
        jest.runAllTimers();
        next.mockClear();

        // The inner @defer sits inside the outer fragment's `viewer` field, so
        // it is not one of the outer selector's own selections: its placeholder
        // appears only once the outer chunk is normalized. The batch publishes
        // both at once and the inner chunk is processed first, so it is queued
        // — at ['viewer', 'account_user'], deeper than the ['·'] path the
        // placeholder will register at.
        const innerLabel =
          'RelayModernEnvironmentExecuteWithDeferAtQueryRootTestQueuedOuter$defer$QueuedInner';
        dataSource.next([
          {
            data: {name: 'Alice', allPhones: [{}]},
            label: innerLabel,
            path: ['viewer', 'account_user'],
          },
          // Addressed a link below where the inner placeholder registers, so
          // it lands in its own queue bucket rather than the placeholder's.
          {
            data: {isVerified: true},
            label: innerLabel,
            path: ['viewer', 'account_user', 'allPhones', 0],
          },
          {
            data: {viewer: {account_user: {id: '100'}}},
            label:
              'RelayModernEnvironmentExecuteWithDeferAtQueryRootTestQueuedQuery$defer$QueuedOuter',
            path: [],
          },
        ]);

        expect(error.mock.calls.map(call => call[0].message)).toEqual([]);
        const snapshot = environment.lookup(innerSelector);
        expect(snapshot.data).toEqual({
          name: 'Alice',
          allPhones: [{isVerified: true}],
        });
      });
    });
  },
);
