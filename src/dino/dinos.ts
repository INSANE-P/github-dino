/*
  공룡 도감. 캐릭터는 전부 직접 그린 오리지널 SVG(DinoArt.tsx)라 저작권 표기가 필요 없다.
*/

export type DinoId =
  | "pachycephalosaurus"
  | "tyrannosaurus"
  | "velociraptor"
  | "triceratops"
  | "brachiosaurus"
  | "stegosaurus"
  | "pteranodon"
  | "ankylosaurus";

export type Dino = {
  id: DinoId;
  nameKo: string;
  nameEn: string;
  /** 실제 공룡의 특징 */
  trait: string;
  /** 그 특징에서 따온 개발 성향 */
  meaning: string;
  /** 카드에 박히는 판정 문구 */
  verdict: string;
  /** UI 포인트 색 (캐릭터 몸 색과 동일 계열) */
  color: string;
};

export const DINOS: Record<DinoId, Dino> = {
  pachycephalosaurus: {
    id: "pachycephalosaurus",
    nameKo: "파키케팔로사우루스",
    nameEn: "Pachycephalosaurus",
    trait: "25cm 두께의 돔형 두개골로 박치기를 했다고 알려졌어요",
    meaning: "한번 시작하면 연속으로 밀어붙이는 스트릭 돌파형",
    verdict: "정한 곳은 뚫릴 때까지 들이받아요",
    color: "#8ecfeb",
  },
  tyrannosaurus: {
    id: "tyrannosaurus",
    nameKo: "티라노사우루스",
    nameEn: "Tyrannosaurus",
    trait: "백악기 먹이사슬의 정점에 있던 최상위 포식자예요",
    meaning: "스타를 많이 받은 저장소의 주인",
    verdict: "스타 먹이사슬 위쪽에 있어요",
    color: "#f1968b",
  },
  velociraptor: {
    id: "velociraptor",
    nameKo: "벨로시랩터",
    nameEn: "Velociraptor",
    trait: "작은 몸으로 빠르게 움직이며 무리 사냥을 했어요",
    meaning: "PR을 잘게 쪼개 빠르게 치고 나가는 타입",
    verdict: "작고 빠른 PR로 사냥해요",
    color: "#c3a6f2",
  },
  triceratops: {
    id: "triceratops",
    nameKo: "트리케라톱스",
    nameEn: "Triceratops",
    trait: "무리를 지어 하루 종일 풀을 뜯던 초식 공룡이에요",
    meaning: "잔디를 매일 채우는 꾸준함형",
    verdict: "매일 풀 뜯듯 커밋해요",
    color: "#f2b370",
  },
  brachiosaurus: {
    id: "brachiosaurus",
    nameKo: "브라키오사우루스",
    nameEn: "Brachiosaurus",
    trait: "긴 목으로 여러 나무를 옮겨 다니며 먹었어요",
    meaning: "여러 저장소를 넓게 오가는 다작형",
    verdict: "넓은 초원을 돌아다녀요",
    color: "#7fa8e8",
  },
  stegosaurus: {
    id: "stegosaurus",
    nameKo: "스테고사우루스",
    nameEn: "Stegosaurus",
    trait: "등의 골판과 꼬리 가시로 무리를 지켰어요",
    meaning: "리뷰와 이슈로 코드베이스를 지키는 수호자형",
    verdict: "리뷰 골판으로 팀을 지켜요",
    color: "#6fc7c0",
  },
  pteranodon: {
    id: "pteranodon",
    nameKo: "프테라노돈",
    nameEn: "Pteranodon",
    trait: "7m 날개로 바다와 육지를 오가며 활공했어요",
    meaning: "여러 언어와 스택을 오가는 탐험형",
    verdict: "언어의 경계를 활공해요",
    color: "#f2dc9e",
  },
  ankylosaurus: {
    id: "ankylosaurus",
    nameKo: "안킬로사우루스",
    nameEn: "Ankylosaurus",
    trait: "평소엔 느긋하지만 꼬리 곤봉 한 방이 강력했어요",
    meaning: "몰아칠 때 하루에 쏟아붓는 폭발형",
    verdict: "쌓아뒀다가 한 방에 터뜨려요",
    color: "#c9a06b",
  },
};

export const DINO_LIST = Object.values(DINOS);
