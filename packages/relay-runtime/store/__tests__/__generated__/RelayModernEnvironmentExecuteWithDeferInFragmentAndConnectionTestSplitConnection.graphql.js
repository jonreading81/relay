/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @oncall relay
 *
 * @generated SignedSource<<bd12886438964e2901373d5268716bdb>>
 * @flow
 * @lightSyntaxTransform
 */

/* eslint-disable */

'use strict';

/*::
import type { Fragment, ReaderFragment } from 'relay-runtime';
import type { FragmentType } from "relay-runtime";
declare export opaque type RelayModernEnvironmentExecuteWithDeferInFragmentAndConnectionTestSplitConnection$fragmentType: FragmentType;
export type RelayModernEnvironmentExecuteWithDeferInFragmentAndConnectionTestSplitConnection$data = {
  readonly friends: ?{
    readonly edges: ?ReadonlyArray<?{
      readonly node: ?{
        readonly id: string,
        readonly name: ?string,
      },
    }>,
  },
  readonly name: ?string,
  readonly $fragmentType: RelayModernEnvironmentExecuteWithDeferInFragmentAndConnectionTestSplitConnection$fragmentType,
};
export type RelayModernEnvironmentExecuteWithDeferInFragmentAndConnectionTestSplitConnection$key = {
  readonly $data?: RelayModernEnvironmentExecuteWithDeferInFragmentAndConnectionTestSplitConnection$data,
  readonly $fragmentSpreads: RelayModernEnvironmentExecuteWithDeferInFragmentAndConnectionTestSplitConnection$fragmentType,
  ...
};
*/

var node/*: ReaderFragment*/ = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": {
    "connection": [
      {
        "count": null,
        "cursor": null,
        "direction": "forward",
        "path": [
          "friends"
        ]
      }
    ]
  },
  "name": "RelayModernEnvironmentExecuteWithDeferInFragmentAndConnectionTestSplitConnection",
  "selections": [
    (v0/*:: as any*/),
    {
      "alias": "friends",
      "args": null,
      "concreteType": "FriendsConnection",
      "kind": "LinkedField",
      "name": "__RelayModernEnvironmentExecuteWithDeferInFragmentAndConnectionTestSplit__friends_connection",
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
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "id",
                  "storageKey": null
                },
                (v0/*:: as any*/),
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "__typename",
                  "storageKey": null
                }
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
      "storageKey": null
    }
  ],
  "type": "User",
  "abstractKey": null
};
})();

if (__DEV__) {
  (node/*:: as any*/).hash = "f7979697e723ba29e4dcc20fad5db534";
}

module.exports = ((node/*:: as any*/)/*:: as Fragment<
  RelayModernEnvironmentExecuteWithDeferInFragmentAndConnectionTestSplitConnection$fragmentType,
  RelayModernEnvironmentExecuteWithDeferInFragmentAndConnectionTestSplitConnection$data,
>*/);
