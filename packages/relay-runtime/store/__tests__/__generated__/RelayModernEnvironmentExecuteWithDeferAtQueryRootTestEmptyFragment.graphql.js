/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @oncall relay
 *
 * @generated SignedSource<<7975ac3894559d0025d8c0ecb089b1bc>>
 * @flow
 * @lightSyntaxTransform
 */

/* eslint-disable */

'use strict';

/*::
import type { Fragment, ReaderFragment } from 'relay-runtime';
import type { FragmentType } from "relay-runtime";
declare export opaque type RelayModernEnvironmentExecuteWithDeferAtQueryRootTestEmptyFragment$fragmentType: FragmentType;
export type RelayModernEnvironmentExecuteWithDeferAtQueryRootTestEmptyFragment$data = {
  readonly viewer: ?{
    readonly isFbEmployee: ?boolean,
  },
  readonly $fragmentType: RelayModernEnvironmentExecuteWithDeferAtQueryRootTestEmptyFragment$fragmentType,
};
export type RelayModernEnvironmentExecuteWithDeferAtQueryRootTestEmptyFragment$key = {
  readonly $data?: RelayModernEnvironmentExecuteWithDeferAtQueryRootTestEmptyFragment$data,
  readonly $fragmentSpreads: RelayModernEnvironmentExecuteWithDeferAtQueryRootTestEmptyFragment$fragmentType,
  ...
};
*/

var node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "RelayModernEnvironmentExecuteWithDeferAtQueryRootTestEmptyFragment",
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
  ],
  "type": "Query",
  "abstractKey": null
};

if (__DEV__) {
  (node/*:: as any*/).hash = "ddf90686aeed79acc5fd793b159dafe2";
}

module.exports = ((node/*:: as any*/)/*:: as Fragment<
  RelayModernEnvironmentExecuteWithDeferAtQueryRootTestEmptyFragment$fragmentType,
  RelayModernEnvironmentExecuteWithDeferAtQueryRootTestEmptyFragment$data,
>*/);
