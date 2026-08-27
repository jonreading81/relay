/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @oncall relay
 *
 * @generated SignedSource<<65a8eea1b868875a069de13b2b99e79d>>
 * @flow
 * @lightSyntaxTransform
 */

/* eslint-disable */

'use strict';

/*::
import type { Fragment, ReaderFragment } from 'relay-runtime';
import type { RelayModernEnvironmentExecuteWithDeferInFragmentAndConnectionTestSplitConnection$fragmentType } from "./RelayModernEnvironmentExecuteWithDeferInFragmentAndConnectionTestSplitConnection.graphql";
import type { FragmentType } from "relay-runtime";
declare export opaque type RelayModernEnvironmentExecuteWithDeferInFragmentAndConnectionTestSplitWrapper$fragmentType: FragmentType;
export type RelayModernEnvironmentExecuteWithDeferInFragmentAndConnectionTestSplitWrapper$data = {
  readonly id: string,
  readonly $fragmentSpreads: RelayModernEnvironmentExecuteWithDeferInFragmentAndConnectionTestSplitConnection$fragmentType,
  readonly $fragmentType: RelayModernEnvironmentExecuteWithDeferInFragmentAndConnectionTestSplitWrapper$fragmentType,
};
export type RelayModernEnvironmentExecuteWithDeferInFragmentAndConnectionTestSplitWrapper$key = {
  readonly $data?: RelayModernEnvironmentExecuteWithDeferInFragmentAndConnectionTestSplitWrapper$data,
  readonly $fragmentSpreads: RelayModernEnvironmentExecuteWithDeferInFragmentAndConnectionTestSplitWrapper$fragmentType,
  ...
};
*/

var node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "RelayModernEnvironmentExecuteWithDeferInFragmentAndConnectionTestSplitWrapper",
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
          "name": "RelayModernEnvironmentExecuteWithDeferInFragmentAndConnectionTestSplitConnection"
        }
      ]
    }
  ],
  "type": "User",
  "abstractKey": null
};

if (__DEV__) {
  (node/*:: as any*/).hash = "849f7147e1306ff89693f49d954bc400";
}

module.exports = ((node/*:: as any*/)/*:: as Fragment<
  RelayModernEnvironmentExecuteWithDeferInFragmentAndConnectionTestSplitWrapper$fragmentType,
  RelayModernEnvironmentExecuteWithDeferInFragmentAndConnectionTestSplitWrapper$data,
>*/);
