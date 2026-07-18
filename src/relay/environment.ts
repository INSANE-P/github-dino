import { Environment, Network, RecordSource, Store } from "relay-runtime";

/*
  Relay의 QueryClient 격. Network에 fetch 함수 하나만 등록하면
  모든 쿼리가 이 함수를 통해 GitHub GraphQL API로 나간다.

  토큰은 .env.local의 VITE_GITHUB_TOKEN에서 읽는다.
  (VITE_ 접두사 환경변수는 번들에 노출되므로 토이 단계에서만 이렇게 쓰고,
   배포 전에는 서버 프록시로 옮긴다)
*/
const fetchFn = async (
  request: { text: string | null },
  variables: Record<string, unknown>,
) => {
  const response = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      Authorization: `bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query: request.text, variables }),
  });

  const json = await response.json();
  if (json.errors) {
    throw new Error(json.errors.map((e: { message: string }) => e.message).join("\n"));
  }
  return json;
};

export const environment = new Environment({
  network: Network.create(fetchFn),
  store: new Store(new RecordSource()),
});
