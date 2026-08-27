/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @oncall relay
 *
 * @generated SignedSource<<670d9e595a78978c1d8ab329f962fd55>>
 * @flow
 * @lightSyntaxTransform
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest, Query } from 'relay-runtime';
import type { RelayModernEnvironmentExecuteWithDeferAtQueryRootTestBatchFragment$fragmentType } from "./RelayModernEnvironmentExecuteWithDeferAtQueryRootTestBatchFragment.graphql";
export type RelayModernEnvironmentExecuteWithDeferAtQueryRootTestBatchQuery$variables = {};
export type RelayModernEnvironmentExecuteWithDeferAtQueryRootTestBatchQuery$data = {
  readonly me: ?{
    readonly id: string,
  },
  readonly $fragmentSpreads: RelayModernEnvironmentExecuteWithDeferAtQueryRootTestBatchFragment$fragmentType,
};
export type RelayModernEnvironmentExecuteWithDeferAtQueryRootTestBatchQuery = {
  response: RelayModernEnvironmentExecuteWithDeferAtQueryRootTestBatchQuery$data,
  variables: RelayModernEnvironmentExecuteWithDeferAtQueryRootTestBatchQuery$variables,
};
*/

var node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "concreteType": "User",
  "kind": "LinkedField",
  "name": "me",
  "plural": false,
  "selections": [
    (v0/*:: as any*/)
  ],
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "RelayModernEnvironmentExecuteWithDeferAtQueryRootTestBatchQuery",
    "selections": [
      (v1/*:: as any*/),
      {
        "kind": "Defer",
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "RelayModernEnvironmentExecuteWithDeferAtQueryRootTestBatchFragment"
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
    "name": "RelayModernEnvironmentExecuteWithDeferAtQueryRootTestBatchQuery",
    "selections": [
      (v1/*:: as any*/),
      {
        "if": null,
        "kind": "Defer",
        "label": "RelayModernEnvironmentExecuteWithDeferAtQueryRootTestBatchQuery$defer$BatchFragment",
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
                  (v0/*:: as any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "name",
                    "storageKey": null
                  }
                ],
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
    "cacheID": "abe35f668f8f9e3776fe72ee82c25568",
    "id": null,
    "metadata": {},
    "name": "RelayModernEnvironmentExecuteWithDeferAtQueryRootTestBatchQuery",
    "operationKind": "query",
    "text": "query RelayModernEnvironmentExecuteWithDeferAtQueryRootTestBatchQuery {\n  me {\n    id\n  }\n  ...RelayModernEnvironmentExecuteWithDeferAtQueryRootTestBatchFragment @defer(label: \"RelayModernEnvironmentExecuteWithDeferAtQueryRootTestBatchQuery$defer$BatchFragment\")\n}\n\nfragment RelayModernEnvironmentExecuteWithDeferAtQueryRootTestBatchFragment on Query {\n  viewer {\n    account_user {\n      id\n      name\n    }\n  }\n}\n"
  }
};
})();

if (__DEV__) {
  (node/*:: as any*/).hash = "896867edc3e624c733d89993e42b14b4";
}

module.exports = ((node/*:: as any*/)/*:: as Query<
  RelayModernEnvironmentExecuteWithDeferAtQueryRootTestBatchQuery$variables,
  RelayModernEnvironmentExecuteWithDeferAtQueryRootTestBatchQuery$data,
>*/);
