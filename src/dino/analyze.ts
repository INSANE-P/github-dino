import { DINOS, type Dino, type DinoId } from "./dinos";

/* GraphQL 응답에서 뽑아낸 활동 지표 */
export type ActivityStats = {
  /** 커밋이 가장 많은 저장소가 전체 커밋에서 차지하는 비중 (0~1) */
  topRepoShare: number;
  /** 최근 1년 중 기여가 있었던 날의 비율 (0~1) */
  activeDayRatio: number;
  /** 하루도 쉬지 않고 기여한 최장 연속 일수 */
  longestStreak: number;
  /** 소유 저장소가 받은 스타 합계 */
  totalStars: number;
  /** 소유 저장소 수 */
  repoCount: number;
  /** 주요 언어 종류 수 */
  languageCount: number;
  /** 전체 기여 중 PR 비중 (0~1) */
  prShare: number;
  /** 전체 기여 중 리뷰+이슈 비중 (0~1) */
  reviewIssueShare: number;
  /** 최대 하루 기여가 전체 기여에서 차지하는 비중 (0~1) */
  maxDayShare: number;
};

export type Judgement = {
  dino: Dino;
  /** 공룡별 점수 (0~1, 디버그와 카드 표시용) */
  scores: Record<DinoId, number>;
};

const clamp01 = (v: number) => Math.min(1, Math.max(0, v));

/*
  각 공룡의 점수는 담당 지표를 0~1로 정규화한 값이다.
  절대값 지표(스타, 저장소 수 등)는 기준값으로 나눠 정규화한다.
  기준값은 실데이터로 판정을 돌려 보며 튜닝한다.
*/
export function judge(stats: ActivityStats): Judgement {
  const scores: Record<DinoId, number> = {
    // 들이받기: 3주 연속 기여면 만점
    pachycephalosaurus: clamp01(stats.longestStreak / 21),
    // 스타: 100개면 만점
    tyrannosaurus: clamp01(stats.totalStars / 100),
    // PR 비중
    velociraptor: clamp01(stats.prShare * 2),
    // 꾸준함: 1년의 75% 활동이면 만점
    triceratops: clamp01(stats.activeDayRatio / 0.75),
    // 다작: 저장소 20개면 만점
    brachiosaurus: clamp01(stats.repoCount / 20),
    // 수호자: 리뷰+이슈 비중
    stegosaurus: clamp01(stats.reviewIssueShare * 2.5),
    // 다언어: 6개 언어면 만점
    pteranodon: clamp01(stats.languageCount / 6),
    // 폭발형: 하루 최대 기여 비중 (10% 이상이면 만점)
    ankylosaurus: clamp01(stats.maxDayShare / 0.1),
  };

  const top = (Object.entries(scores) as [DinoId, number][]).sort(
    (a, b) => b[1] - a[1],
  )[0][0];

  return { dino: DINOS[top], scores };
}
