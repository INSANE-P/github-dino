import { graphql, useFragment } from "react-relay";
import type { DinoCard_user$key } from "./__generated__/DinoCard_user.graphql";
import { DinoArt } from "./DinoArt";
import type { Dino } from "./dinos";

/*
  결과 카드. 화면 표시와 PNG 저장이 같은 SVG를 쓴다.
  (DOM을 이미지로 바꾸는 라이브러리 없이, SVG 직렬화 → canvas로 내보낸다)

  03장 실습: 카드가 표시할 사용자 필드는 이 fragment가 선언한다.
  부모는 fragment 참조만 넘기고, 무엇을 읽는지는 카드만 안다.
*/
const cardFragment = graphql`
  fragment DinoCard_user on User {
    login
    name
  }
`;

const W = 360;
const H = 460;

/** 한글 문장을 카드 폭에 맞게 두 줄로 나눈다 */
function splitTwoLines(text: string, max = 22): string[] {
  if (text.length <= max) return [text];
  const cut = text.lastIndexOf(" ", max);
  const at = cut > 8 ? cut : max;
  return [text.slice(0, at).trim(), text.slice(at).trim()];
}

export function DinoCardSVG({ dino, user }: { dino: Dino; user: DinoCard_user$key }) {
  const { login, name } = useFragment(cardFragment, user);
  const username = login;
  const displayName = name ?? login;
  const traitLines = splitTwoLines(dino.trait);
  return (
    <svg
      id="dino-card-svg"
      viewBox={`0 0 ${W} ${H}`}
      width={W}
      height={H}
      xmlns="http://www.w3.org/2000/svg"
      style={{ maxWidth: "100%", height: "auto" }}
    >
      <rect x="2" y="2" width={W - 4} height={H - 4} rx="22" fill="#161b22" stroke={dino.color} strokeWidth="2.5" />
      <rect x="14" y="14" width={W - 28} height={H - 28} rx="14" fill="none" stroke="#30363d" strokeWidth="1" />

      <g transform="translate(84, 34) scale(1.6)">
        <DinoArt id={dino.id} />
      </g>

      <text x={W / 2} y="262" textAnchor="middle" fill="#8b949e" fontSize="13" fontFamily="system-ui, sans-serif">
        @{username} · {displayName}
      </text>
      <text x={W / 2} y="298" textAnchor="middle" fill={dino.color} fontSize="27" fontWeight="800" fontFamily="system-ui, sans-serif">
        {dino.nameKo}
      </text>
      <text x={W / 2} y="330" textAnchor="middle" fill="#e6edf3" fontSize="16" fontWeight="600" fontFamily="system-ui, sans-serif">
        {dino.verdict}
      </text>
      {traitLines.map((line, i) => (
        <text
          key={line}
          x={W / 2}
          y={362 + i * 20}
          textAnchor="middle"
          fill="#8b949e"
          fontSize="12.5"
          fontFamily="system-ui, sans-serif"
        >
          {line}
        </text>
      ))}

      <text x={W / 2} y={H - 24} textAnchor="middle" fill="#484f58" fontSize="11" fontFamily="system-ui, sans-serif">
        github-dino · 활동으로 알아보는 나의 공룡
      </text>
    </svg>
  );
}

/** 표시 중인 카드 SVG를 2배 해상도 PNG로 저장한다 */
export function downloadCardPng(username: string) {
  const svg = document.getElementById("dino-card-svg");
  if (!svg) return;

  const xml = new XMLSerializer().serializeToString(svg);
  const blob = new Blob([xml], { type: "image/svg+xml;charset=utf-8" });
  const url = URL.createObjectURL(blob);

  const img = new Image();
  img.onload = () => {
    const scale = 2;
    const canvas = document.createElement("canvas");
    canvas.width = W * scale;
    canvas.height = H * scale;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.scale(scale, scale);
    ctx.drawImage(img, 0, 0, W, H);
    URL.revokeObjectURL(url);

    canvas.toBlob((png) => {
      if (!png) return;
      const a = document.createElement("a");
      a.href = URL.createObjectURL(png);
      a.download = `github-dino-${username}.png`;
      a.click();
      URL.revokeObjectURL(a.href);
    }, "image/png");
  };
  img.src = url;
}
