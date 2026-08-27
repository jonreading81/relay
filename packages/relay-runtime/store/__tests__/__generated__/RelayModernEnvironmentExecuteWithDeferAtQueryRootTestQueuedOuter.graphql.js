/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @oncall relay
 *
 * @generated SignedSource<<4300fc0e287a97485fa56d3921b991c7>>
 * @flow
 * @lightSyntaxTransform
 */

/* eslint-disable */

'use strict';

/*::
import type { Fragment, ReaderFragment } from 'relay-runtime';
import type { RelayModernEnvironmentExecuteWithDeferAtQueryRootTestQueuedInner$fragmentType } from "./RelayModernEnvironmentExecuteWithDeferAtQueryRootTestQueuedInner.graphql";
import type { FragmentType } from "relay-runtime";
declare export opaque type RelayModernEnvironmentExecuteWithDeferAtQueryRootTestQueuedOuter$fragmentType: FragmentType;
export type RelayModernEnvironmentExecuteWithDeferAtQueryRootTestQueuedOuter$data = {
  readonly viewer: ?{
    readonly account_user: ?{
      readonly id: string,
      readonly $fragmentSpreads: RelayModernEnvironmentExecuteWithDeferAtQueryRootTestQueuedInner$fragmentType,
    },
  },
  readonly $fragmentType: RelayModernEnvironmentExecuteWithDeferAtQueryRootTestQueuedOuter$fragmentType,
};
export type RelayModernEnvironmentExecuteWithDeferAtQueryRootTestQueuedOuter$key = {
  readonly $data?: RelayModernEnvironmentExecuteWithDeferAtQueryRootTestQueuedOuter$data,
  readonly $fragmentSpreads: RelayModernEnvironmentExecuteWithDeferAtQueryRootTestQueuedOuter$fragmentType,
  ...
};
*/

var node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "RelayModernEnvironmentExecuteWithDeferAtQueryRootTestQueuedOuter",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "Viewer",
      "kind": "LinkedField",
      "name": "viewer",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "User",
          "kind": "LinkedField",
          "name": "account_user",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "id",
              "storageKey": null
            },
            {
              "kind": "Defer",
              "selections": [
                {
                  "args": null,
                  "kind": "FragmentSpread",
                  "name": "RelayModernEnvironmentExecuteWithDeferAtQueryRootTestQueuedInner"
                }
              ]
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Query",
  "abstractKey": null
};

if (__DEV__) {
  (node/*:: as any*/).hash = "ff9e62a08e225421213676542ae14979";
}

module.exports = ((node/*:: as any*/)/*:: as Fragment<
  RelayModernEnvironmentExecuteWithDeferAtQueryRootTestQueuedOuter$fragmentType,
  RelayModernEnvironmentExecuteWithDeferAtQueryRootTestQueuedOuter$data,
>*/);
