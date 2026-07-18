/**
 * @generated SignedSource<<352865da2a99afffb1bb5546d575376d>>
 * @lightSyntaxTransform
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type RepoList_user$data = {
  readonly id: string;
  readonly repositories: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly description: string | null | undefined;
        readonly id: string;
        readonly name: string;
        readonly primaryLanguage: {
          readonly name: string;
        } | null | undefined;
        readonly stargazerCount: number;
        readonly url: any;
      } | null | undefined;
    } | null | undefined> | null | undefined;
  };
  readonly " $fragmentType": "RepoList_user";
};
export type RepoList_user$key = {
  readonly " $data"?: RepoList_user$data;
  readonly " $fragmentSpreads": FragmentRefs<"RepoList_user">;
};

import RepoListPaginationQuery_graphql from './RepoListPaginationQuery.graphql';

const node: ReaderFragment = (function(){
var v0 = [
  "repositories"
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
};
return {
  "argumentDefinitions": [
    {
      "defaultValue": 6,
      "kind": "LocalArgument",
      "name": "count"
    },
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "cursor"
    }
  ],
  "kind": "Fragment",
  "metadata": {
    "connection": [
      {
        "count": "count",
        "cursor": "cursor",
        "direction": "forward",
        "path": (v0/*:: as any*/)
      }
    ],
    "refetch": {
      "connection": {
        "forward": {
          "count": "count",
          "cursor": "cursor"
        },
        "backward": null,
        "path": (v0/*:: as any*/)
      },
      "fragmentPathInResult": [
        "node"
      ],
      "operation": RepoListPaginationQuery_graphql,
      "identifierInfo": {
        "identifierField": "id",
        "identifierQueryVariableName": "id"
      }
    }
  },
  "name": "RepoList_user",
  "selections": [
    {
      "alias": "repositories",
      "args": [
        {
          "kind": "Literal",
          "name": "isFork",
          "value": false
        },
        {
          "kind": "Literal",
          "name": "orderBy",
          "value": {
            "direction": "DESC",
            "field": "UPDATED_AT"
          }
        },
        {
          "kind": "Literal",
          "name": "ownerAffiliations",
          "value": [
            "OWNER"
          ]
        }
      ],
      "concreteType": "RepositoryConnection",
      "kind": "LinkedField",
      "name": "__RepoList_repositories_connection",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "RepositoryEdge",
          "kind": "LinkedField",
          "name": "edges",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "Repository",
              "kind": "LinkedField",
              "name": "node",
              "plural": false,
              "selections": [
                (v1/*:: as any*/),
                (v2/*:: as any*/),
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "description",
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "url",
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "stargazerCount",
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "concreteType": "Language",
                  "kind": "LinkedField",
                  "name": "primaryLanguage",
                  "plural": false,
                  "selections": [
                    (v2/*:: as any*/)
                  ],
                  "storageKey": null
                },
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
      "storageKey": "__RepoList_repositories_connection(isFork:false,orderBy:{\"direction\":\"DESC\",\"field\":\"UPDATED_AT\"},ownerAffiliations:[\"OWNER\"])"
    },
    (v1/*:: as any*/)
  ],
  "type": "User",
  "abstractKey": null
};
})();

(node as any).hash = "3d34497e83ac564940526e1214dc5d61";

export default node;
