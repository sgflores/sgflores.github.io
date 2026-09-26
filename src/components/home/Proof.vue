<script setup>
import { proof } from '../../content/site.js'
</script>

<template>
  <section class="proof" aria-label="Experience highlights">
    <div class="container proof-grid">
      <div v-for="item in proof" :key="item.detail" class="item">
        <p class="value">
          <span class="num">{{ item.value }}</span>
          <span class="label">{{ item.label }}</span>
        </p>
        <p class="detail">{{ item.detail }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.proof {
  padding: 36px 0;
  border-bottom: 1px solid var(--border);
  background: var(--bg-elevated);
  scroll-margin-top: calc(var(--nav-height) + 12px);
}

.proof-grid {
  display: grid;
  gap: 1.5rem 2rem;
  grid-template-columns: 1fr;
}

.item {
  display: grid;
  gap: 0.2rem;
}

.value {
  display: flex;
  align-items: baseline;
  gap: 0.4rem;
}

.num {
  font-size: var(--text-xl);
  font-weight: 700;
  letter-spacing: -0.02em;
  color: var(--text);
}

.label {
  font-size: var(--text-sm);
  color: var(--text-muted);
}

.detail {
  font-size: var(--text-sm);
  color: var(--text-secondary);
}

@media (min-width: 640px) {
  .proof-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 960px) {
  .proof-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>
