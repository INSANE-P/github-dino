/**
 * @generated SignedSource<<d1c291ef7cea3280b415c9ae16ec315b>>
 * @lightSyntaxTransform
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type AppQuery$variables = {
  login: string;
};
export type AppQuery$data = {
  readonly user: {
    readonly avatarUrl: any;
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
    readonly name: string | null | undefined;
    readonly repositories: {
      readonly nodes: ReadonlyArray<{
        readonly name: string;
        readonly primaryLanguage: {
          readonly name: string;
        } | null | undefined;
        readonly stargazerCount: number;
      } | null | undefined> | null | undefined;
      readonly totalCount: number;
    };
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
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "avatarUrl",
  "storageKey": null
},
v5 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 20
  },
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
      "field": "STARGAZERS"
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
  "name": "stargazerCount",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "totalCommitContributions",
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "totalIssueContributions",
  "storageKey": null
},
v10 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "totalPullRequestContributions",
  "storageKey": null
},
v11 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "totalPullRequestReviewContributions",
  "storageKey": null
},
v12 = {
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
v13 = [
  {
    "kind": "Literal",
    "name": "maxRepositories",
    "value": 10
  }
],
v14 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "nameWithOwner",
  "storageKey": null
},
v15 = {
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
v16 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
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
          (v3/*:: as any*/),
          (v4/*:: as any*/),
          {
            "alias": null,
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
                  (v3/*:: as any*/),
                  (v7/*:: as any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Language",
                    "kind": "LinkedField",
                    "name": "primaryLanguage",
                    "plural": false,
                    "selections": [
                      (v3/*:: as any*/)
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
              (v8/*:: as any*/),
              (v9/*:: as any*/),
              (v10/*:: as any*/),
              (v11/*:: as any*/),
              (v12/*:: as any*/),
              {
                "alias": null,
                "args": (v13/*:: as any*/),
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
                      (v14/*:: as any*/)
                    ],
                    "storageKey": null
                  },
                  (v15/*:: as any*/)
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
          (v3/*:: as any*/),
          (v4/*:: as any*/),
          {
            "alias": null,
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
                  (v3/*:: as any*/),
                  (v7/*:: as any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Language",
                    "kind": "LinkedField",
                    "name": "primaryLanguage",
                    "plural": false,
                    "selections": [
                      (v3/*:: as any*/),
                      (v16/*:: as any*/)
                    ],
                    "storageKey": null
                  },
                  (v16/*:: as any*/)
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
              (v8/*:: as any*/),
              (v9/*:: as any*/),
              (v10/*:: as any*/),
              (v11/*:: as any*/),
              (v12/*:: as any*/),
              {
                "alias": null,
                "args": (v13/*:: as any*/),
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
                      (v14/*:: as any*/),
                      (v16/*:: as any*/)
                    ],
                    "storageKey": null
                  },
                  (v15/*:: as any*/)
                ],
                "storageKey": "commitContributionsByRepository(maxRepositories:10)"
              }
            ],
            "storageKey": null
          },
          (v16/*:: as any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "f6c1f407ef860a4fe3bc5c944e8b5564",
    "id": null,
    "metadata": {},
    "name": "AppQuery",
    "operationKind": "query",
    "text": "query AppQuery(\n  $login: String!\n) {\n  user(login: $login) {\n    login\n    name\n    avatarUrl\n    repositories(first: 20, orderBy: {field: STARGAZERS, direction: DESC}, ownerAffiliations: [OWNER], isFork: false) {\n      totalCount\n      nodes {\n        name\n        stargazerCount\n        primaryLanguage {\n          name\n          id\n        }\n        id\n      }\n    }\n    contributionsCollection {\n      totalCommitContributions\n      totalIssueContributions\n      totalPullRequestContributions\n      totalPullRequestReviewContributions\n      contributionCalendar {\n        totalContributions\n        weeks {\n          contributionDays {\n            contributionCount\n          }\n        }\n      }\n      commitContributionsByRepository(maxRepositories: 10) {\n        repository {\n          nameWithOwner\n          id\n        }\n        contributions {\n          totalCount\n        }\n      }\n    }\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "a6582ec38d7f2738b50d7e6b8e6cd01e";

export default node;
