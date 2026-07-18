import { graphql, usePaginationFragment } from "react-relay";
import type { RepoList_user$key } from "./__generated__/RepoList_user.graphql";

/*
  05장 실습: usePaginationFragment.
  이 컴포넌트가 필요한 데이터는 이 파일의 fragment가 전부 선언한다(콜로케이션).
  @connection 덕분에 loadNext가 가져온 페이지는 기존 목록 뒤에 자동으로 이어붙는다.
*/
const repoListFragment = graphql`
  fragment RepoList_user on User
  @argumentDefinitions(
    count: { type: "Int", defaultValue: 6 }
    cursor: { type: "String" }
  )
  @refetchable(queryName: "RepoListPaginationQuery") {
    repositories(
      first: $count
      after: $cursor
      orderBy: { field: UPDATED_AT, direction: DESC }
      ownerAffiliations: [OWNER]
      isFork: false
    ) @connection(key: "RepoList_repositories") {
      edges {
        node {
          id
          name
          description
          url
          stargazerCount
          primaryLanguage {
            name
          }
        }
      }
    }
  }
`;

export function RepoList({ user }: { user: RepoList_user$key }) {
  const { data, loadNext, hasNext, isLoadingNext } = usePaginationFragment(
    repoListFragment,
    user,
  );
  const repos = data.repositories.edges
    ?.map((e) => e?.node)
    .filter((n) => n != null) ?? [];

  return (
    <>
      <h3>최근 작업한 저장소</h3>
      <ul className="repos">
        {repos.map((r) => (
          <li key={r.id}>
            <a href={r.url} target="_blank" rel="noreferrer">
              {r.name}
            </a>
            {r.primaryLanguage && <span className="repo-lang">{r.primaryLanguage.name}</span>}
            {r.stargazerCount > 0 && <span className="repo-star">★ {r.stargazerCount}</span>}
            {r.description && <p>{r.description}</p>}
          </li>
        ))}
      </ul>
      {hasNext && (
        <button type="button" className="more" onClick={() => loadNext(6)} disabled={isLoadingNext}>
          {isLoadingNext ? "가져오는 중…" : "더 보기"}
        </button>
      )}
    </>
  );
}
