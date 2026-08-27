/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @oncall relay
 *
 * @generated SignedSource<<afd1d8f8b8b647357fa1e2f45f82845a>>
 * @flow
 * @lightSyntaxTransform
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest, Query } from 'relay-runtime';
import type { RelayModernEnvironmentExecuteWithDeferAtQueryRootTestEmptyFragment$fragmentType } from "./RelayModernEnvironmentExecuteWithDeferAtQueryRootTestEmptyFragment.graphql";
export type RelayModernEnvironmentExecuteWithDeferAtQueryRootTestEmptyQuery$variables = {};
export type RelayModernEnvironmentExecuteWithDeferAtQueryRootTestEmptyQuery$data = {
  readonly $fragmentSpreads: RelayModernEnvironmentExecuteWithDeferAtQueryRootTestEmptyFragment$fragmentType,
};
export type RelayModernEnvironmentExecuteWithDeferAtQueryRootTestEmptyQuery = {
  response: RelayModernEnvironmentExecuteWithDeferAtQueryRootTestEmptyQuery$data,
  variables: RelayModernEnvironmentExecuteWithDeferAtQueryRootTestEmptyQuery$variables,
};
*/

var node/*: ConcreteRequest*/ = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "RelayModernEnvironmentExecuteWithDeferAtQueryRootTestEmptyQuery",
    "selections": [
      {
        "kind": "Defer",
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "RelayModernEnvironmentExecuteWithDeferAtQueryRootTestEmptyFragment"
          }
        ]
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "RelayModernEnvironmentExecuteWithDeferAtQueryRootTestEmptyQuery",
    "selections": [
      {
        "if": null,
        "kind": "Defer",
        "label": "RelayModernEnvironmentExecuteWithDeferAtQueryRootTestEmptyQuery$defer$EmptyFragment",
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
                "kind": "ScalarField",
                "name": "isFbEmployee",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ]
      }
    ]
  },
  "params": {
    "cacheID": "9b2a8e896cee718774419c6bb288d52c",
    "id": null,
    "metadata": {},
    "name": "RelayModernEnvironmentExecuteWithDeferAtQueryRootTestEmptyQuery",
    "operationKind": "query",
    "text": "query RelayModernEnvironmentExecuteWithDeferAtQueryRootTestEmptyQuery {\n  ...RelayModernEnvironmentExecuteWithDeferAtQueryRootTestEmptyFragment @defer(label: \"RelayModernEnvironmentExecuteWithDeferAtQueryRootTestEmptyQuery$defer$EmptyFragment\")\n}\n\nfragment RelayModernEnvironmentExecuteWithDeferAtQueryRootTestEmptyFragment on Query {\n  viewer {\n    isFbEmployee\n  }\n}\n"
  }
};

if (__DEV__) {
  (node/*:: as any*/).hash = "df36e0c0ba6f2c81dc2b6c0b3c536518";
}

module.exports = ((node/*:: as any*/)/*:: as Query<
  RelayModernEnvironmentExecuteWithDeferAtQueryRootTestEmptyQuery$variables,
  RelayModernEnvironmentExecuteWithDeferAtQueryRootTestEmptyQuery$data,
>*/);
