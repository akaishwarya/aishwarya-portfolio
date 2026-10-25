import React from "react";

function GirlIllustration() {
  return (
    <svg
      viewBox="0 0 360 360"
      role="img"
      aria-label="Illustration of a girl working on a laptop"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Illustration of a girl working on a laptop</title>
      <circle cx="180" cy="180" r="168" fill="#DCE7F8" />

      {/* chair / shadow */}
      <ellipse cx="180" cy="322" rx="96" ry="12" fill="#C7D8F1" />

      {/* legs */}
      <rect x="150" y="240" width="20" height="66" rx="10" fill="#2447A8" />
      <rect x="192" y="240" width="20" height="66" rx="10" fill="#2447A8" />
      <rect x="140" y="296" width="34" height="16" rx="8" fill="#0C1E42" />
      <rect x="188" y="296" width="34" height="16" rx="8" fill="#0C1E42" />

      {/* torso / dress */}
      <path
        d="M120 172c0-36 27-64 60-64s60 28 60 64v70c0 12-9 20-20 20h-80c-11 0-20-8-20-20z"
        fill="#3B6FCB"
      />
      <path
        d="M120 172c0-36 27-64 60-64s60 28 60 64v22H120z"
        fill="#2447A8"
      />

      {/* arms */}
      <rect
        x="96"
        y="182"
        width="34"
        height="16"
        rx="8"
        fill="#F3C7A8"
        transform="rotate(-10 96 182)"
      />
      <rect
        x="228"
        y="182"
        width="34"
        height="16"
        rx="8"
        fill="#F3C7A8"
        transform="rotate(10 264 182)"
      />

      {/* laptop */}
      <g transform="translate(140 216)">
        <rect x="0" y="0" width="80" height="50" rx="4" fill="#0C1E42" />
        <rect x="6" y="6" width="68" height="38" rx="2" fill="#EEF4FC" />
        <rect x="-6" y="50" width="92" height="8" rx="3" fill="#17316F" />
      </g>

      {/* neck */}
      <rect x="164" y="108" width="32" height="24" rx="8" fill="#F3C7A8" />

      {/* head */}
      <circle cx="180" cy="90" r="46" fill="#F6D2AF" />

      {/* hair back */}
      <path
        d="M132 92c0-32 22-56 48-56s48 24 48 56c0 6-1 12-3 18-4-22-22-30-45-30s-41 8-45 30c-2-6-3-12-3-18z"
        fill="#3A2417"
      />
      {/* hair sides */}
      <path
        d="M136 96c-6 18-6 40 0 58 6-4 10-12 10-22v-30z"
        fill="#3A2417"
      />
      <path
        d="M224 96c6 18 6 40 0 58-6-4-10-12-10-22v-30z"
        fill="#3A2417"
      />

      {/* face */}
      <circle cx="164" cy="92" r="4" fill="#0C1E42" />
      <circle cx="196" cy="92" r="4" fill="#0C1E42" />
      <path
        d="M168 108c6 6 18 6 24 0"
        stroke="#A85C3B"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M152 76c4-8 14-12 22-10"
        stroke="#3A2417"
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M208 76c-4-8-14-12-22-10"
        stroke="#3A2417"
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
      />
      <circle cx="150" cy="102" r="6" fill="#F3A98A" opacity="0.6" />
      <circle cx="210" cy="102" r="6" fill="#F3A98A" opacity="0.6" />

      {/* floating code accents */}
      <text x="60" y="130" fontSize="18" fill="#2447A8" fontFamily="monospace">
        {"</>"}
      </text>
      <text x="266" y="100" fontSize="16" fill="#3B6FCB" fontFamily="monospace">
        {"{ }"}
      </text>
      <circle cx="298" cy="200" r="6" fill="#3B6FCB" />
      <circle cx="62" cy="220" r="5" fill="#2447A8" />
    </svg>
  );
}

export default GirlIllustration;
