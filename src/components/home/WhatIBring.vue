<script setup>
import Section from '../layout/Section.vue'
import { whatIBring } from '../../content/site.js'
</script>

<template>
  <Section
    id="what-i-bring"
    label="What I Bring"
    title="What you get when we work together."
    description="How I approach ownership, production systems, and business problems."
  >
    <div class="grid">
      <article v-for="item in whatIBring" :key="item.number" class="block">
        <p class="number">{{ item.number }}</p>
        <h3>{{ item.title }}</h3>
        <p>{{ item.body }}</p>
      </article>
    </div>
  </Section>
</template>

<style scoped>
.grid {
  display: grid;
  gap: 2rem 2.5rem;
}

.number {
  color: var(--accent);
  font-size: var(--text-xs);
  font-weight: 700;
  letter-spacing: 0.1em;
}

h3 {
  margin-top: 10px;
  font-size: var(--text-base);
  letter-spacing: -0.01em;
  text-transform: uppercase;
  font-weight: 700;
}

p:last-child {
  margin-top: 10px;
  color: var(--text-secondary);
  line-height: 1.65;
  max-width: 28rem;
}

@media (min-width: 720px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1000px) {
  .grid {
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
  }
}
</style>
