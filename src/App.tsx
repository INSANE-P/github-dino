import { Component, Suspense, useState, type ReactNode } from "react";
import { graphql, useLazyLoadQuery } from "react-relay";
import type { AppQuery } from "./__generated__/AppQuery.graphql";
import { judge, type ActivityStats } from "./dino/analyze";
import { DINO_LIST } from "./dino/dinos";
import { DinoIcon } from "./dino/DinoArt";
import { DinoCardSVG, downloadCardPng } from "./dino/DinoCard";

/*
  TODO(학습 미션): 03장을 따라 DinoCard_user fragment로 분리해 보기
  TODO(학습 미션): 05장을 따라 레포 목록을 usePaginationFragment로 바꿔 보기
*/
const appQuery = graphql`
  query AppQuery($login: String!) {
    user(login: $login) {
      login
      name
      avatarUrl
      repositories(
        first: 20
        orderBy: { field: STARGAZERS, direction: DESC }
        ownerAffiliations: [OWNER]
        isFork: false
      ) {
        totalCount
        nodes {
          name
          stargazerCount
          primaryLanguage {
            name
          }
        }
      }
      contributionsCollection {
        totalCommitContributions
        totalIssueContributions
        totalPullRequestContributions
        totalPullRequestReviewContributions
        contributionCalendar {
          totalContributions
          weeks {
            contributionDays {
              contributionCount
            }
          }
        }
        commitContributionsByRepository(maxRepositories: 10) {
          repository {
            nameWithOwner
          }
          contributions {
            totalCount
          }
        }
      }
    }
  }
`;

function DinoResult({ login }: { login: string }) {
  const data = useLazyLoadQuery<AppQuery>(appQuery, { login });
  const [copied, setCopied] = useState(false);
  const user = data.user;
  if (!user) return <p className="hint">사용자를 찾지 못했어요: {login}</p>;

  const c = user.contributionsCollection;
  const days = c.contributionCalendar.weeks.flatMap((w) =>
    w.contributionDays.map((d) => d.contributionCount),
  );
  const byRepo = c.commitContributionsByRepository.map((r) => r.contributions.totalCount);
  const commitSum = byRepo.reduce((a, b) => a + b, 0);
  const totalActions =
    c.totalCommitContributions +
    c.totalIssueContributions +
    c.totalPullRequestContributions +
    c.totalPullRequestReviewContributions;
  const repos = user.repositories.nodes?.filter((n) => n != null) ?? [];

  let longestStreak = 0;
  let streak = 0;
  for (const d of days) {
    streak = d > 0 ? streak + 1 : 0;
    longestStreak = Math.max(longestStreak, streak);
  }

  const stats: ActivityStats = {
    topRepoShare: commitSum > 0 ? Math.max(...byRepo) / commitSum : 0,
    activeDayRatio: days.length > 0 ? days.filter((d) => d > 0).length / days.length : 0,
    longestStreak,
    totalStars: repos.reduce((sum, r) => sum + r.stargazerCount, 0),
    repoCount: user.repositories.totalCount,
    languageCount: new Set(repos.map((r) => r.primaryLanguage?.name).filter(Boolean)).size,
    prShare: totalActions > 0 ? c.totalPullRequestContributions / totalActions : 0,
    reviewIssueShare:
      totalActions > 0
        ? (c.totalPullRequestReviewContributions + c.totalIssueContributions) / totalActions
        : 0,
    maxDayShare:
      c.contributionCalendar.totalContributions > 0
        ? Math.max(...days) / c.contributionCalendar.totalContributions
        : 0,
  };

  const { dino, scores } = judge(stats);
  const ranked = [...DINO_LIST].sort((a, b) => scores[b.id] - scores[a.id]);

  const copyShareLink = async () => {
    const url = `${location.origin}${location.pathname}?u=${encodeURIComponent(login)}`;
    await navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 1600);
  };

  return (
    <section className="result">
      <div className="card-side">
        <DinoCardSVG dino={dino} username={user.login} displayName={user.name ?? user.login} />
        <div className="actions">
          <button type="button" className="primary" onClick={() => downloadCardPng(user.login)}>
            카드 저장
          </button>
          <button type="button" onClick={copyShareLink}>
            {copied ? "복사됐어요!" : "링크 복사"}
          </button>
        </div>
      </div>

      <div className="detail">
        <h3>왜 {dino.nameKo}인가요</h3>
        <p className="detail-lead">{dino.meaning}. 최근 1년 활동으로 계산했어요.</p>
        <ul className="scores">
          {ranked.slice(0, 3).map((d, i) => (
            <li key={d.id} className={i === 0 ? "top" : ""}>
              <DinoIcon id={d.id} size={30} />
              <span className="score-name">{d.nameKo}</span>
              <span className="score-bar">
                <span style={{ width: `${Math.round(scores[d.id] * 100)}%`, background: d.color }} />
              </span>
              <span className="score-pct">{Math.round(scores[d.id] * 100)}</span>
            </li>
          ))}
        </ul>

        <h3>활동 요약</h3>
        <ul className="stats">
          <li>
            <em>{stats.longestStreak}일</em> 최장 연속 기여
          </li>
          <li>
            <em>{Math.round(stats.activeDayRatio * 365)}일</em> 최근 1년 중 활동한 날
          </li>
          <li>
            <em>{stats.repoCount}개</em> 소유 저장소
          </li>
          <li>
            <em>{stats.languageCount}개</em> 주요 언어
          </li>
        </ul>
      </div>
    </section>
  );
}

class Boundary extends Component<{ children: ReactNode }, { error: Error | null }> {
  state = { error: null as Error | null };
  static getDerivedStateFromError(error: Error) {
    return { error };
  }
  render() {
    if (this.state.error) {
      return <p className="hint">불러오지 못했어요: {this.state.error.message}</p>;
    }
    return this.props.children;
  }
}

function initialLogin() {
  return new URLSearchParams(location.search).get("u") ?? "";
}

export default function App() {
  const [input, setInput] = useState(initialLogin);
  const [login, setLogin] = useState(initialLogin);

  const submit = (next: string) => {
    const value = next.trim();
    if (!value) return;
    setLogin(value);
    history.replaceState(null, "", `?u=${encodeURIComponent(value)}`);
  };

  return (
    <main>
      <header className="hero">
        <p className="logo">
          GitHub <em>Dino</em>
        </p>
        <h1>
          당신의 커밋에는
          <br />
          어떤 공룡이 살고 있나요?
        </h1>
        <p className="hint">
          GitHub 활동 패턴을 분석해 8종의 공룡 중 당신을 닮은 하나를 찾아드려요.
        </p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            submit(input);
          }}
        >
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="GitHub username"
            spellCheck={false}
            autoFocus
          />
          <button type="submit" className="primary">
            발굴하기
          </button>
        </form>
      </header>

      {login && (
        <Boundary key={login}>
          <Suspense
            fallback={
              <div className="digging">
                <DinoIcon id="pachycephalosaurus" size={72} />
                <p className="hint">발굴 중…</p>
              </div>
            }
          >
            <DinoResult login={login} />
          </Suspense>
        </Boundary>
      )}

      <section className="dex">
        <h3>도감 · 8종의 공룡</h3>
        <ul>
          {DINO_LIST.map((d) => (
            <li key={d.id} title={d.meaning}>
              <DinoIcon id={d.id} size={64} />
              <span>{d.nameKo}</span>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
