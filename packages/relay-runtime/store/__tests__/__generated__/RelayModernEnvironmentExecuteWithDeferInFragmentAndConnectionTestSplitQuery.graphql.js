/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @oncall relay
 *
 * @generated SignedSource<<bf5c7c80919a2677add8c5661e471e02>>
 * @flow
 * @lightSyntaxTransform
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest, Query } from 'relay-runtime';
import type { RelayModernEnvironmentExecuteWithDeferInFragmentAndConnectionTestSplitWrapper$fragmentType } from "./RelayModernEnvironmentExecuteWithDeferInFragmentAndConnectionTestSplitWrapper.graphql";
export type RelayModernEnvironmentExecuteWithDeferInFragmentAndConnectionTestSplitQuery$variables = {
  id: string,
};
export type RelayModernEnvironmentExecuteWithDeferInFragmentAndConnectionTestSplitQuery$data = {
  readonly node: ?({
    readonly __typename: "User",
    readonly $fragmentSpreads: RelayModernEnvironmentExecuteWithDeferInFragmentAndConnectionTestSplitWrapper$fragmentType,
  } | {
    // This will never be '%other', but we need some
    // value in case none of the concrete values match.
    readonly __typename: "%other",
  }),
};
export type RelayModernEnvironmentExecuteWithDeferInFragmentAndConnectionTestSplitQuery = {
  response: RelayModernEnvironmentExecuteWithDeferInFragmentAndConnectionTestSplitQuery$data,
  variables: RelayModernEnvironmentExecuteWithDeferInFragmentAndConnectionTestSplitQuery$variables,
};
*/

var node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v5 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 1
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*:: as any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "RelayModernEnvironmentExecuteWithDeferInFragmentAndConnectionTestSplitQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*:: as any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          {
            "kind": "InlineFragment",
            "selections": [
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "RelayModernEnvironmentExecuteWithDeferInFragmentAndConnectionTestSplitWrapper"
              }
            ],
            "type": "User",
            "abstractKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*:: as any*/),
    "kind": "Operation",
    "name": "RelayModernEnvironmentExecuteWithDeferInFragmentAndConnectionTestSplitQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*:: as any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          (v2/*:: as any*/),
          (v3/*:: as any*/),
          {
            "kind": "InlineFragment",
            "selections": [
              {
                "if": null,
                "kind": "Defer",
                "label": "RelayModernEnvironmentExecuteWithDeferInFragmentAndConnectionTestSplitWrapper$defer$SplitConnectionFragment",
                "selections": [
                  (v4/*:: as any*/),
                  {
                    "alias": null,
                    "args": (v5/*:: as any*/),
                    "concreteType": "FriendsConnection",
                    "kind": "LinkedField",
                    "name": "friends",
                    "plural": false,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "FriendsEdge",
                        "kind": "LinkedField",
                        "name": "edges",
                        "plural": true,
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "User",
                            "kind": "LinkedField",
                            "name": "node",
                            "plural": false,
                            "selections": [
                              (v3/*:: as any*/),
                              (v4/*:: as any*/),
                              (v2/*:: as any*/)
                            ],
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "cursor",
                            "storageKey": null
                          }
                        ],
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "PageInfo",
                        "kind": "LinkedField",
                        "name": "pageInfo",
                        "plural": false,
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "endCursor",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "hasNextPage",
                            "storageKey": null
                          }
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": "friends(first:1)"
                  },
                  {
                    "alias": null,
                    "args": (v5/*:: as any*/),
                    "filters": null,
                    "handle": "connection",
                    "key": "RelayModernEnvironmentExecuteWithDeferInFragmentAndConnectionTestSplit__friends",
                    "kind": "LinkedHandle",
                    "name": "friends"
                  }
                ]
              }
            ],
            "type": "User",
            "abstractKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "543c85fa85f4c31d2cd78a12cca51e6e",
    "id": null,
    "metadata": {},
    "name": "RelayModernEnvironmentExecuteWithDeferInFragmentAndConnectionTestSplitQuery",
    "operationKind": "query",
    "text": "query RelayModernEnvironmentExecuteWithDeferInFragmentAndConnectionTestSplitQuery(\n  $id: ID!\n) {\n  node(id: $id) {\n    __typename\n    ... on User {\n      ...RelayModernEnvironmentExecuteWithDeferInFragmentAndConnectionTestSplitWrapper\n    }\n    id\n  }\n}\n\nfragment RelayModernEnvironmentExecuteWithDeferInFragmentAndConnectionTestSplitConnection on User {\n  name\n  friends(first: 1) {\n    edges {\n      node {\n        id\n        name\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment RelayModernEnvironmentExecuteWithDeferInFragmentAndConnectionTestSplitWrapper on User {\n  id\n  ...RelayModernEnvironmentExecuteWithDeferInFragmentAndConnectionTestSplitConnection @defer(label: \"RelayModernEnvironmentExecuteWithDeferInFragmentAndConnectionTestSplitWrapper$defer$SplitConnectionFragment\")\n}\n"
  }
};
})();

if (__DEV__) {
  (node/*:: as any*/).hash = "3576be21be49257e072aef1ce0e53e0d";
}

module.exports = ((node/*:: as any*/)/*:: as Query<
  RelayModernEnvironmentExecuteWithDeferInFragmentAndConnectionTestSplitQuery$variables,
  RelayModernEnvironmentExecuteWithDeferInFragmentAndConnectionTestSplitQuery$data,
>*/);
