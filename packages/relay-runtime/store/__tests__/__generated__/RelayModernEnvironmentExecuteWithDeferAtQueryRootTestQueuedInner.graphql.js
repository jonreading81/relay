/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @oncall relay
 *
 * @generated SignedSource<<784641e00e7425f54e402a914d79a41b>>
 * @flow
 * @lightSyntaxTransform
 */

/* eslint-disable */

'use strict';

/*::
import type { Fragment, ReaderFragment } from 'relay-runtime';
import type { FragmentType } from "relay-runtime";
declare export opaque type RelayModernEnvironmentExecuteWithDeferAtQueryRootTestQueuedInner$fragmentType: FragmentType;
export type RelayModernEnvironmentExecuteWithDeferAtQueryRootTestQueuedInner$data = {
  readonly allPhones: ?ReadonlyArray<?{
    readonly isVerified: ?boolean,
  }>,
  readonly name: ?string,
  readonly $fragmentType: RelayModernEnvironmentExecuteWithDeferAtQueryRootTestQueuedInner$fragmentType,
};
export type RelayModernEnvironmentExecuteWithDeferAtQueryRootTestQueuedInner$key = {
  readonly $data?: RelayModernEnvironmentExecuteWithDeferAtQueryRootTestQueuedInner$data,
  readonly $fragmentSpreads: RelayModernEnvironmentExecuteWithDeferAtQueryRootTestQueuedInner$fragmentType,
  ...
};
*/

var node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "RelayModernEnvironmentExecuteWithDeferAtQueryRootTestQueuedInner",
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
  ],
  "type": "User",
  "abstractKey": null
};

if (__DEV__) {
  (node/*:: as any*/).hash = "6ea28ec5d552b43747441ea66e4f693e";
}

module.exports = ((node/*:: as any*/)/*:: as Fragment<
  RelayModernEnvironmentExecuteWithDeferAtQueryRootTestQueuedInner$fragmentType,
  RelayModernEnvironmentExecuteWithDeferAtQueryRootTestQueuedInner$data,
>*/);
