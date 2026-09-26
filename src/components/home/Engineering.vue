<script setup>
import Section from '../layout/Section.vue'
import { engineering } from '../../content/engineering.js'
</script>

<template>
  <Section
    id="engineering"
    label="Engineering"
    title="Selected problems I've worked through."
    description="Practical notes on keeping systems usable and fixing issues in production."
  >
    <div class="grid">
      <RouterLink
        v-for="note in engineering"
        :key="note.id"
        class="card"
        :to="note.path"
      >
        <h3>{{ note.title }}</h3>
        <p class="subtitle">{{ note.subtitle }}</p>
        <p class="summary">{{ note.summary }}</p>
        <span class="more">Read →</span>
      </RouterLink>
    </div>
  </Section>
</template>

<style scoped>
.grid {
  display: grid;
  gap: 1.25rem;
}

.card {
  display: block;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 28px;
  background: var(--bg-elevated);
  color: inherit;
  transition:
    border-color 160ms ease,
    background-color 160ms ease;
}

.card:hover {
  border-color: #c5cad1;
  background: var(--surface);
  color: inherit;
}

h3 {
  font-size: var(--text-lg);
  letter-spacing: -0.02em;
}

.subtitle {
  margin-top: 6px;
  font-size: var(--text-sm);
  font-weight: 600;
  color: var(--accent);
}

.summary {
  margin-top: 12px;
  color: var(--text-secondary);
  font-size: var(--text-sm);
  line-height: 1.65;
}

.more {
  display: inline-block;
  margin-top: 18px;
  font-size: var(--text-sm);
  font-weight: 600;
  color: var(--accent);
}

@media (min-width: 720px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
