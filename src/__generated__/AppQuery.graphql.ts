/**
 * @generated SignedSource<<57b6ca3431a9c3185c307466f2c403c6>>
 * @lightSyntaxTransform
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type AppQuery$variables = {
  login: string;
};
export type AppQuery$data = {
  readonly user: {
    readonly contributionsCollection: {
      readonly commitContributionsByRepository: ReadonlyArray<{
        readonly contributions: {
          readonly totalCount: number;
        };
        readonly repository: {
          readonly nameWithOwner: string;
        };
      }>;
      readonly contributionCalendar: {
        readonly totalContributions: number;
        readonly weeks: ReadonlyArray<{
          readonly contributionDays: ReadonlyArray<{
            readonly contributionCount: number;
          }>;
        }>;
      };
      readonly totalCommitContributions: number;
      readonly totalIssueContributions: number;
      readonly totalPullRequestContributions: number;
      readonly totalPullRequestReviewContributions: number;
    };
    readonly login: string;
    readonly topRepos: {
      readonly nodes: ReadonlyArray<{
        readonly name: string;
        readonly primaryLanguage: {
          readonly name: string;
        } | null | undefined;
        readonly stargazerCount: number;
      } | null | undefined> | null | undefined;
      readonly totalCount: number;
    };
    readonly " $fragmentSpreads": FragmentRefs<"DinoCard_user" | "RepoList_user">;
  } | null | undefined;
};
export type AppQuery = {
  response: AppQuery$data;
  variables: AppQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "login"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "login",
    "variableName": "login"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "login",
  "storageKey": null
},
v3 = {
  "kind": "Literal",
  "name": "isFork",
  "value": false
},
v4 = {
  "kind": "Literal",
  "name": "ownerAffiliations",
  "value": [
    "OWNER"
  ]
},
v5 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 20
  },
  (v3/*:: as any*/),
  {
    "kind": "Literal",
    "name": "orderBy",
    "value": {
      "direction": "DESC",
      "field": "STARGAZERS"
    }
  },
  (v4/*:: as any*/)
],
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "totalCount",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "stargazerCount",
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "totalCommitContributions",
  "storageKey": null
},
v10 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "totalIssueContributions",
  "storageKey": null
},
v11 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "totalPullRequestContributions",
  "storageKey": null
},
v12 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "totalPullRequestReviewContributions",
  "storageKey": null
},
v13 = {
  "alias": null,
  "args": null,
  "concreteType": "ContributionCalendar",
  "kind": "LinkedField",
  "name": "contributionCalendar",
  "plural": false,
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "totalContributions",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "ContributionCalendarWeek",
      "kind": "LinkedField",
      "name": "weeks",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "ContributionCalendarDay",
          "kind": "LinkedField",
          "name": "contributionDays",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "contributionCount",
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "storageKey": null
},
v14 = [
  {
    "kind": "Literal",
    "name": "maxRepositories",
    "value": 10
  }
],
v15 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "nameWithOwner",
  "storageKey": null
},
v16 = {
  "alias": null,
  "args": null,
  "concreteType": "CreatedCommitContributionConnection",
  "kind": "LinkedField",
  "name": "contributions",
  "plural": false,
  "selections": [
    (v6/*:: as any*/)
  ],
  "storageKey": null
},
v17 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 6
  },
  (v3/*:: as any*/),
  {
    "kind": "Literal",
    "name": "orderBy",
    "value": {
      "direction": "DESC",
      "field": "UPDATED_AT"
    }
  },
  (v4/*:: as any*/)
],
v18 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v19 = {
  "alias": null,
  "args": null,
  "concreteType": "Language",
  "kind": "LinkedField",
  "name": "primaryLanguage",
  "plural": false,
  "selections": [
    (v7/*:: as any*/),
    (v18/*:: as any*/)
  ],
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*:: as any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "AppQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*:: as any*/),
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "user",
        "plural": false,
        "selections": [
          (v2/*:: as any*/),
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "DinoCard_user"
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "RepoList_user"
          },
          {
            "alias": "topRepos",
            "args": (v5/*:: as any*/),
            "concreteType": "RepositoryConnection",
            "kind": "LinkedField",
            "name": "repositories",
            "plural": false,
            "selections": [
              (v6/*:: as any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "Repository",
                "kind": "LinkedField",
                "name": "nodes",
                "plural": true,
                "selections": [
                  (v7/*:: as any*/),
                  (v8/*:: as any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Language",
                    "kind": "LinkedField",
                    "name": "primaryLanguage",
                    "plural": false,
                    "selections": [
                      (v7/*:: as any*/)
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": "repositories(first:20,isFork:false,orderBy:{\"direction\":\"DESC\",\"field\":\"STARGAZERS\"},ownerAffiliations:[\"OWNER\"])"
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "ContributionsCollection",
            "kind": "LinkedField",
            "name": "contributionsCollection",
            "plural": false,
            "selections": [
              (v9/*:: as any*/),
              (v10/*:: as any*/),
              (v11/*:: as any*/),
              (v12/*:: as any*/),
              (v13/*:: as any*/),
              {
                "alias": null,
                "args": (v14/*:: as any*/),
                "concreteType": "CommitContributionsByRepository",
                "kind": "LinkedField",
                "name": "commitContributionsByRepository",
                "plural": true,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Repository",
                    "kind": "LinkedField",
                    "name": "repository",
                    "plural": false,
                    "selections": [
                      (v15/*:: as any*/)
                    ],
                    "storageKey": null
                  },
                  (v16/*:: as any*/)
                ],
                "storageKey": "commitContributionsByRepository(maxRepositories:10)"
              }
            ],
            "storageKey": null
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
    "name": "AppQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*:: as any*/),
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "user",
        "plural": false,
        "selections": [
          (v2/*:: as any*/),
          (v7/*:: as any*/),
          {
            "alias": null,
            "args": (v17/*:: as any*/),
            "concreteType": "RepositoryConnection",
            "kind": "LinkedField",
            "name": "repositories",
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
                      (v18/*:: as any*/),
                      (v7/*:: as any*/),
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
                      (v8/*:: as any*/),
                      (v19/*:: as any*/),
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
            "storageKey": "repositories(first:6,isFork:false,orderBy:{\"direction\":\"DESC\",\"field\":\"UPDATED_AT\"},ownerAffiliations:[\"OWNER\"])"
          },
          {
            "alias": null,
            "args": (v17/*:: as any*/),
            "filters": [
              "orderBy",
              "ownerAffiliations",
              "isFork"
            ],
            "handle": "connection",
            "key": "RepoList_repositories",
            "kind": "LinkedHandle",
            "name": "repositories"
          },
          (v18/*:: as any*/),
          {
            "alias": "topRepos",
            "args": (v5/*:: as any*/),
            "concreteType": "RepositoryConnection",
            "kind": "LinkedField",
            "name": "repositories",
            "plural": false,
            "selections": [
              (v6/*:: as any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "Repository",
                "kind": "LinkedField",
                "name": "nodes",
                "plural": true,
                "selections": [
                  (v7/*:: as any*/),
                  (v8/*:: as any*/),
                  (v19/*:: as any*/),
                  (v18/*:: as any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": "repositories(first:20,isFork:false,orderBy:{\"direction\":\"DESC\",\"field\":\"STARGAZERS\"},ownerAffiliations:[\"OWNER\"])"
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "ContributionsCollection",
            "kind": "LinkedField",
            "name": "contributionsCollection",
            "plural": false,
            "selections": [
              (v9/*:: as any*/),
              (v10/*:: as any*/),
              (v11/*:: as any*/),
              (v12/*:: as any*/),
              (v13/*:: as any*/),
              {
                "alias": null,
                "args": (v14/*:: as any*/),
                "concreteType": "CommitContributionsByRepository",
                "kind": "LinkedField",
                "name": "commitContributionsByRepository",
                "plural": true,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Repository",
                    "kind": "LinkedField",
                    "name": "repository",
                    "plural": false,
                    "selections": [
                      (v15/*:: as any*/),
                      (v18/*:: as any*/)
                    ],
                    "storageKey": null
                  },
                  (v16/*:: as any*/)
                ],
                "storageKey": "commitContributionsByRepository(maxRepositories:10)"
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "05795a2fe6769e08272a9a64c9a0d792",
    "id": null,
    "metadata": {},
    "name": "AppQuery",
    "operationKind": "query",
    "text": "query AppQuery(\n  $login: String!\n) {\n  user(login: $login) {\n    login\n    ...DinoCard_user\n    ...RepoList_user\n    topRepos: repositories(first: 20, orderBy: {field: STARGAZERS, direction: DESC}, ownerAffiliations: [OWNER], isFork: false) {\n      totalCount\n      nodes {\n        name\n        stargazerCount\n        primaryLanguage {\n          name\n          id\n        }\n        id\n      }\n    }\n    contributionsCollection {\n      totalCommitContributions\n      totalIssueContributions\n      totalPullRequestContributions\n      totalPullRequestReviewContributions\n      contributionCalendar {\n        totalContributions\n        weeks {\n          contributionDays {\n            contributionCount\n          }\n        }\n      }\n      commitContributionsByRepository(maxRepositories: 10) {\n        repository {\n          nameWithOwner\n          id\n        }\n        contributions {\n          totalCount\n        }\n      }\n    }\n    id\n  }\n}\n\nfragment DinoCard_user on User {\n  login\n  name\n}\n\nfragment RepoList_user on User {\n  repositories(first: 6, orderBy: {field: UPDATED_AT, direction: DESC}, ownerAffiliations: [OWNER], isFork: false) {\n    edges {\n      node {\n        id\n        name\n        description\n        url\n        stargazerCount\n        primaryLanguage {\n          name\n          id\n        }\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n  id\n}\n"
  }
};
})();

(node as any).hash = "6440581dc014d448f8e4044d240bd9aa";

export default node;
