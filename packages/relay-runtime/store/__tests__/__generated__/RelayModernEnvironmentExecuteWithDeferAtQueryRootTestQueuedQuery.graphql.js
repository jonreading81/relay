/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @oncall relay
 *
 * @generated SignedSource<<cf6c50f1d899b01dbd069d6cd4904e15>>
 * @flow
 * @lightSyntaxTransform
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest, Query } from 'relay-runtime';
import type { RelayModernEnvironmentExecuteWithDeferAtQueryRootTestQueuedOuter$fragmentType } from "./RelayModernEnvironmentExecuteWithDeferAtQueryRootTestQueuedOuter.graphql";
export type RelayModernEnvironmentExecuteWithDeferAtQueryRootTestQueuedQuery$variables = {};
export type RelayModernEnvironmentExecuteWithDeferAtQueryRootTestQueuedQuery$data = {
  readonly me: ?{
    readonly id: string,
  },
  readonly $fragmentSpreads: RelayModernEnvironmentExecuteWithDeferAtQueryRootTestQueuedOuter$fragmentType,
};
export type RelayModernEnvironmentExecuteWithDeferAtQueryRootTestQueuedQuery = {
  response: RelayModernEnvironmentExecuteWithDeferAtQueryRootTestQueuedQuery$data,
  variables: RelayModernEnvironmentExecuteWithDeferAtQueryRootTestQueuedQuery$variables,
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
    "name": "RelayModernEnvironmentExecuteWithDeferAtQueryRootTestQueuedQuery",
    "selections": [
      (v1/*:: as any*/),
      {
        "kind": "Defer",
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "RelayModernEnvironmentExecuteWithDeferAtQueryRootTestQueuedOuter"
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
    "name": "RelayModernEnvironmentExecuteWithDeferAtQueryRootTestQueuedQuery",
    "selections": [
      (v1/*:: as any*/),
      {
        "if": null,
        "kind": "Defer",
        "label": "RelayModernEnvironmentExecuteWithDeferAtQueryRootTestQueuedQuery$defer$QueuedOuter",
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
                    "if": null,
                    "kind": "Defer",
                    "label": "RelayModernEnvironmentExecuteWithDeferAtQueryRootTestQueuedOuter$defer$QueuedInner",
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "name",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "Phone",
                        "kind": "LinkedField",
                        "name": "allPhones",
                        "plural": true,
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "isVerified",
                            "storageKey": null
                          }
                        ],
                        "storageKey": null
                      }
                    ]
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
    "cacheID": "c4bce65824ac01f84ac99912ebb7b1b9",
    "id": null,
    "metadata": {},
    "name": "RelayModernEnvironmentExecuteWithDeferAtQueryRootTestQueuedQuery",
    "operationKind": "query",
    "text": "query RelayModernEnvironmentExecuteWithDeferAtQueryRootTestQueuedQuery {\n  me {\n    id\n  }\n  ...RelayModernEnvironmentExecuteWithDeferAtQueryRootTestQueuedOuter @defer(label: \"RelayModernEnvironmentExecuteWithDeferAtQueryRootTestQueuedQuery$defer$QueuedOuter\")\n}\n\nfragment RelayModernEnvironmentExecuteWithDeferAtQueryRootTestQueuedInner on User {\n  name\n  allPhones {\n    isVerified\n  }\n}\n\nfragment RelayModernEnvironmentExecuteWithDeferAtQueryRootTestQueuedOuter on Query {\n  viewer {\n    account_user {\n      id\n      ...RelayModernEnvironmentExecuteWithDeferAtQueryRootTestQueuedInner @defer(label: \"RelayModernEnvironmentExecuteWithDeferAtQueryRootTestQueuedOuter$defer$QueuedInner\")\n    }\n  }\n}\n"
  }
};
})();

if (__DEV__) {
  (node/*:: as any*/).hash = "75dffff9428d8874e3e06409babf4e8b";
}

module.exports = ((node/*:: as any*/)/*:: as Query<
  RelayModernEnvironmentExecuteWithDeferAtQueryRootTestQueuedQuery$variables,
  RelayModernEnvironmentExecuteWithDeferAtQueryRootTestQueuedQuery$data,
>*/);
