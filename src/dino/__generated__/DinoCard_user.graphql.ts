/**
 * @generated SignedSource<<5e44a71eb184cc978db6ba303e7df9d9>>
 * @lightSyntaxTransform
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type DinoCard_user$data = {
  readonly login: string;
  readonly name: string | null | undefined;
  readonly " $fragmentType": "DinoCard_user";
};
export type DinoCard_user$key = {
  readonly " $data"?: DinoCard_user$data;
  readonly " $fragmentSpreads": FragmentRefs<"DinoCard_user">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "DinoCard_user",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "login",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "name",
      "storageKey": null
    }
  ],
  "type": "User",
  "abstractKey": null
};

(node as any).hash = "e971edb6d5690b7b6f0ea9b3029d28c1";

export default node;
