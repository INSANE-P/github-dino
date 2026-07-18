import type { ReactNode } from "react";
import type { DinoId } from "./dinos";

/*
  직접 그린 공룡 캐릭터 8종.
  공통 문법: 얼굴 클로즈업 + 아래로 빼꼼 나온 앞발, 초록 눈(시리즈 아이덴티티),
  볼터치, 작은 미소. 종별 특징은 머리 위 장식으로 구분한다.
  모든 좌표는 viewBox 0 0 120 120 기준.
*/

type Palette = {
  body: string;   // 몸 색
  light: string;  // 배·발·밝은 패치
  line: string;   // 외곽선
  point: string;  // 종 특징(돌기·뿔·골판) 색
};

const PALETTES: Record<DinoId, Palette> = {
  pachycephalosaurus: { body: "#8ecfeb", light: "#c9e9f7", line: "#37536b", point: "#f2a06b" },
  tyrannosaurus: { body: "#f1968b", light: "#fbd0c9", line: "#6b3037", point: "#d97d72" },
  velociraptor: { body: "#c3a6f2", light: "#e5d8fb", line: "#4d3a6b", point: "#8f6fd1" },
  triceratops: { body: "#f2b370", light: "#fbdcbb", line: "#6b4a2a", point: "#f7efdd" },
  brachiosaurus: { body: "#7fa8e8", light: "#c4d7f7", line: "#334770", point: "#c4d7f7" },
  stegosaurus: { body: "#6fc7c0", light: "#c2ebe7", line: "#2e5a56", point: "#f2c063" },
  pteranodon: { body: "#f2dc9e", light: "#faf0d3", line: "#6b5a2a", point: "#cf9d5f" },
  ankylosaurus: { body: "#c9a06b", light: "#e8d4b4", line: "#5c4426", point: "#a87f4f" },
};

/* ── 공통 부품 ─────────────────────────────── */

function Peek({ p }: { p: Palette }) {
  return (
    <>
      <path
        d="M34 112 C 32 94, 44 85, 60 85 C 76 85, 88 94, 86 112 Z"
        fill={p.body} stroke={p.line} strokeWidth="3.5" strokeLinejoin="round"
      />
      <ellipse cx="45" cy="107" rx="9" ry="6.5" fill={p.light} stroke={p.line} strokeWidth="3" />
      <ellipse cx="75" cy="107" rx="9" ry="6.5" fill={p.light} stroke={p.line} strokeWidth="3" />
    </>
  );
}

function RoundHead({ p }: { p: Palette }) {
  return (
    <path
      d="M60 10 C 34 10, 17 29, 17 50 C 17 72, 35 87, 60 87 C 85 87, 103 72, 103 50 C 103 29, 86 10, 60 10 Z"
      fill={p.body} stroke={p.line} strokeWidth="3.5" strokeLinejoin="round"
    />
  );
}

function Eyes({ p }: { p: Palette }) {
  const eye = (cx: number) => (
    <>
      <circle cx={cx} cy="52" r="11" fill="#8fd45e" stroke={p.line} strokeWidth="2.5" />
      <circle cx={cx + (cx < 60 ? 1 : -1)} cy="54" r="6" fill="#20262e" />
      <circle cx={cx - 2.5} cy="48.5" r="3.6" fill="#fff" />
      <circle cx={cx + 4} cy="57" r="1.5" fill="#fff" opacity="0.95" />
    </>
  );
  return (
    <>
      {eye(40)}
      {eye(80)}
    </>
  );
}

function Face({ p, mouthY = 74 }: { p: Palette; mouthY?: number }) {
  return (
    <>
      <circle cx="56" cy={mouthY - 7} r="1.4" fill={p.line} />
      <circle cx="64" cy={mouthY - 7} r="1.4" fill={p.line} />
      <path
        d={`M52 ${mouthY} C 56 ${mouthY + 3.5}, 64 ${mouthY + 3.5}, 68 ${mouthY}`}
        fill="none" stroke={p.line} strokeWidth="3" strokeLinecap="round"
      />
      <ellipse cx="27" cy="63" rx="5.5" ry="3.5" fill="#f7a8bd" opacity="0.75" />
      <ellipse cx="93" cy="63" rx="5.5" ry="3.5" fill="#f7a8bd" opacity="0.75" />
    </>
  );
}

/* ── 종별 캐릭터 ───────────────────────────── */

const ART: Record<DinoId, (p: Palette) => ReactNode> = {
  /* 돔 이마 + 돌기 왕관 */
  pachycephalosaurus: (p) => (
    <>
      <Peek p={p} />
      <path
        d="M60 8 C 34 8, 17 28, 17 50 C 17 72, 35 87, 60 87 C 85 87, 103 72, 103 50 C 103 28, 86 8, 60 8 Z"
        fill={p.body} stroke={p.line} strokeWidth="3.5" strokeLinejoin="round"
      />
      <path
        d="M32 30 C 38 16, 82 16, 88 30 C 90 34, 87 37, 83 35 C 70 27, 50 27, 37 35 C 33 37, 30 34, 32 30 Z"
        fill={p.light} opacity="0.9"
      />
      <path d="M28 26 C 24 19, 30 13, 35 18 C 36 21, 35 24, 32 26 Z" fill={p.point} stroke={p.line} strokeWidth="3" strokeLinejoin="round" />
      <path d="M47 14 C 46 6, 54 3, 57 10 C 57 13, 55 16, 52 17 Z" fill={p.point} stroke={p.line} strokeWidth="3" strokeLinejoin="round" />
      <path d="M67 11 C 70 4, 78 7, 76 14 C 74 17, 71 18, 68 16 Z" fill={p.point} stroke={p.line} strokeWidth="3" strokeLinejoin="round" />
      <path d="M86 19 C 92 15, 97 21, 92 26 C 90 28, 87 27, 85 25 Z" fill={p.point} stroke={p.line} strokeWidth="3" strokeLinejoin="round" />
      <Eyes p={p} />
      <Face p={p} />
    </>
  ),

  /* 눈두덩 능선 + 삐죽 이빨 */
  tyrannosaurus: (p) => (
    <>
      <Peek p={p} />
      <RoundHead p={p} />
      <path d="M30 35 C 31 28, 41 27, 44 32 C 45 35, 43 37, 40 37 C 36 36, 32 37, 30 35 Z" fill={p.point} stroke={p.line} strokeWidth="3" strokeLinejoin="round" />
      <path d="M90 35 C 89 28, 79 27, 76 32 C 75 35, 77 37, 80 37 C 84 36, 88 37, 90 35 Z" fill={p.point} stroke={p.line} strokeWidth="3" strokeLinejoin="round" />
      <Eyes p={p} />
      <circle cx="56" cy="66" r="1.4" fill={p.line} />
      <circle cx="64" cy="66" r="1.4" fill={p.line} />
      <path d="M48 73 C 54 78, 66 78, 72 73" fill="none" stroke={p.line} strokeWidth="3" strokeLinecap="round" />
      <path d="M53 75.5 L 56.5 82 L 60 76.5 Z" fill="#fff" stroke={p.line} strokeWidth="2.2" strokeLinejoin="round" />
      <ellipse cx="27" cy="63" rx="5.5" ry="3.5" fill="#f7a8bd" opacity="0.75" />
      <ellipse cx="93" cy="63" rx="5.5" ry="3.5" fill="#f7a8bd" opacity="0.75" />
    </>
  ),

  /* 뒤로 눕힌 깃털 볏 */
  velociraptor: (p) => (
    <>
      <Peek p={p} />
      <path d="M50 13 C 46 3, 56 -1, 59 7 C 59 11, 56 14, 52 15 Z" fill={p.point} stroke={p.line} strokeWidth="3" strokeLinejoin="round" />
      <path d="M62 10 C 62 0, 72 0, 72 8 C 71 12, 67 14, 64 13 Z" fill={p.point} stroke={p.line} strokeWidth="3" strokeLinejoin="round" />
      <path d="M74 13 C 78 4, 87 8, 83 16 C 80 19, 76 18, 74 16 Z" fill={p.point} stroke={p.line} strokeWidth="3" strokeLinejoin="round" />
      <RoundHead p={p} />
      <Eyes p={p} />
      <Face p={p} />
    </>
  ),

  /* 프릴 + 뿔 셋 */
  triceratops: (p) => (
    <>
      <ellipse cx="60" cy="46" rx="55" ry="44" fill={p.point} stroke={p.line} strokeWidth="3.5" />
      <circle cx="14" cy="30" r="2.6" fill={p.line} opacity="0.5" />
      <circle cx="26" cy="12" r="2.6" fill={p.line} opacity="0.5" />
      <circle cx="46" cy="3.5" r="2.6" fill={p.line} opacity="0.5" />
      <circle cx="74" cy="3.5" r="2.6" fill={p.line} opacity="0.5" />
      <circle cx="94" cy="12" r="2.6" fill={p.line} opacity="0.5" />
      <circle cx="106" cy="30" r="2.6" fill={p.line} opacity="0.5" />
      <Peek p={p} />
      <RoundHead p={p} />
      <path d="M32 26 C 28 14, 38 10, 42 20 C 43 24, 41 27, 37 28 Z" fill="#fdfaf2" stroke={p.line} strokeWidth="3" strokeLinejoin="round" />
      <path d="M88 26 C 92 14, 82 10, 78 20 C 77 24, 79 27, 83 28 Z" fill="#fdfaf2" stroke={p.line} strokeWidth="3" strokeLinejoin="round" />
      <Eyes p={p} />
      <path d="M56 62 C 57 53, 63 53, 64 62 C 62 64, 58 64, 56 62 Z" fill="#fdfaf2" stroke={p.line} strokeWidth="2.6" strokeLinejoin="round" />
      <circle cx="55" cy="68" r="1.4" fill={p.line} />
      <circle cx="65" cy="68" r="1.4" fill={p.line} />
      <path d="M52 75 C 56 78.5, 64 78.5, 68 75" fill="none" stroke={p.line} strokeWidth="3" strokeLinecap="round" />
      <ellipse cx="27" cy="64" rx="5.5" ry="3.5" fill="#f7a8bd" opacity="0.75" />
      <ellipse cx="93" cy="64" rx="5.5" ry="3.5" fill="#f7a8bd" opacity="0.75" />
    </>
  ),

  /* 정수리 혹 + 긴 목 느낌의 갸름한 얼굴 */
  brachiosaurus: (p) => (
    <>
      <Peek p={p} />
      <path
        d="M52 14 C 52 3, 68 3, 68 14 L 66 20 L 54 20 Z"
        fill={p.body} stroke={p.line} strokeWidth="3.5" strokeLinejoin="round"
      />
      <path
        d="M60 6 C 37 6, 21 26, 21 50 C 21 73, 37 88, 60 88 C 83 88, 99 73, 99 50 C 99 26, 83 6, 60 6 Z"
        fill={p.body} stroke={p.line} strokeWidth="3.5" strokeLinejoin="round"
      />
      <path
        d="M53 11 C 54 6.5, 66 6.5, 67 11"
        fill="none" stroke={p.light} strokeWidth="3" strokeLinecap="round"
      />
      <Eyes p={p} />
      <Face p={p} />
    </>
  ),

  /* 골판 왕관 */
  stegosaurus: (p) => (
    <>
      <Peek p={p} />
      <RoundHead p={p} />
      <path d="M40 2 L 50 11 L 40 19 L 30 11 Z" fill={p.point} stroke={p.line} strokeWidth="3" strokeLinejoin="round" />
      <path d="M60 -3 L 71 8 L 60 17 L 49 8 Z" fill={p.point} stroke={p.line} strokeWidth="3" strokeLinejoin="round" />
      <path d="M80 2 L 90 11 L 80 19 L 70 11 Z" fill={p.point} stroke={p.line} strokeWidth="3" strokeLinejoin="round" />
      <Eyes p={p} />
      <Face p={p} />
    </>
  ),

  /* 뒤로 뻗은 볏 + 부리 */
  pteranodon: (p) => (
    <>
      <Peek p={p} />
      <path
        d="M72 16 C 80 2, 98 -2, 108 4 C 100 10, 90 17, 82 22 C 78 24, 74 21, 72 16 Z"
        fill={p.point} stroke={p.line} strokeWidth="3" strokeLinejoin="round"
      />
      <RoundHead p={p} />
      <Eyes p={p} />
      <path
        d="M50 63 C 54 59.5, 66 59.5, 70 63 L 60 77 Z"
        fill={p.point} stroke={p.line} strokeWidth="3" strokeLinejoin="round"
      />
      <path d="M52.5 65.5 L 67.5 65.5" fill="none" stroke={p.line} strokeWidth="2" strokeLinecap="round" />
      <ellipse cx="26" cy="62" rx="5.5" ry="3.5" fill="#f7a8bd" opacity="0.75" />
      <ellipse cx="94" cy="62" rx="5.5" ry="3.5" fill="#f7a8bd" opacity="0.75" />
    </>
  ),

  /* 갑옷 돌기 + 곤봉 꼬리 */
  ankylosaurus: (p) => (
    <>
      <Peek p={p} />
      <path d="M88 100 C 96 96, 103 98, 106 104" fill="none" stroke={p.line} strokeWidth="7" strokeLinecap="round" />
      <path d="M88 100 C 96 96.5, 102 98.5, 105 103" fill="none" stroke={p.body} strokeWidth="3.5" strokeLinecap="round" />
      <circle cx="108" cy="105" r="6.5" fill={p.body} stroke={p.line} strokeWidth="3" />
      <RoundHead p={p} />
      <path d="M30 27 L 35 15 L 42 24 Z" fill={p.point} stroke={p.line} strokeWidth="3" strokeLinejoin="round" />
      <path d="M46 18 L 52 7 L 58 17 Z" fill={p.point} stroke={p.line} strokeWidth="3" strokeLinejoin="round" />
      <path d="M62 17 L 68 7 L 74 18 Z" fill={p.point} stroke={p.line} strokeWidth="3" strokeLinejoin="round" />
      <path d="M78 24 L 85 15 L 90 27 Z" fill={p.point} stroke={p.line} strokeWidth="3" strokeLinejoin="round" />
      <Eyes p={p} />
      <Face p={p} />
    </>
  ),
};

/** 카드 SVG 등 다른 SVG 안에 끼워 넣을 수 있는 <g> 형태의 원본 */
export function DinoArt({ id }: { id: DinoId }) {
  return <>{ART[id](PALETTES[id])}</>;
}

/** 단독으로 쓰는 아이콘 */
export function DinoIcon({ id, size = 120 }: { id: DinoId; size?: number }) {
  return (
    <svg viewBox="0 0 120 120" width={size} height={size} role="img" aria-label={id}>
      <DinoArt id={id} />
    </svg>
  );
}
