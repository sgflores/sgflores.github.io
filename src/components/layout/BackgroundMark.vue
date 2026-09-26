<template>
  <div class="mark" aria-hidden="true">
    <svg
      class="mark-svg"
      viewBox="0 0 280 280"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <!-- outer frame -->
      <rect x="24" y="24" width="200" height="200" stroke="currentColor" stroke-width="1" />
      <rect x="48" y="48" width="152" height="152" stroke="currentColor" stroke-width="1" />

      <!-- stacked blocks -->
      <rect x="72" y="168" width="48" height="32" stroke="currentColor" stroke-width="1.25" />
      <rect x="128" y="144" width="48" height="56" stroke="currentColor" stroke-width="1.25" />
      <rect x="88" y="96" width="40" height="40" stroke="currentColor" stroke-width="1.25" />

      <!-- guide lines -->
      <path d="M24 120 H224" stroke="currentColor" stroke-width="1" stroke-dasharray="4 6" />
      <path d="M120 24 V224" stroke="currentColor" stroke-width="1" stroke-dasharray="4 6" />

      <!-- accent square -->
      <rect x="176" y="72" width="24" height="24" stroke="currentColor" stroke-width="1.5" />
      <path d="M188 72 V48 H212" stroke="currentColor" stroke-width="1" />
      <path d="M200 96 H224 V120" stroke="currentColor" stroke-width="1" />
    </svg>
  </div>
</template>

<style scoped>
.mark {
  position: fixed;
  right: -24px;
  bottom: -16px;
  width: min(320px, 42vw);
  height: min(320px, 42vw);
  z-index: 0;
  color: #2563eb;
  opacity: 0.07;
  pointer-events: none;
  user-select: none;
}

.mark-svg {
  width: 100%;
  height: 100%;
  display: block;
}

@media (max-width: 768px) {
  .mark {
    width: 220px;
    height: 220px;
    right: -40px;
    bottom: -28px;
    opacity: 0.05;
  }
}

@media (prefers-reduced-motion: reduce) {
  .mark {
    opacity: 0.045;
  }
}
</style>
