<script setup>
import Section from '../layout/Section.vue'
import TechTag from '../projects/TechTag.vue'
import { packages } from '../../content/packages.js'
</script>

<template>
  <Section
    id="open-source"
    alt
    label="Open Source"
    title="Laravel packages I've published."
    description="Reusable tools I built and maintain as open-source Composer packages."
  >
    <div class="grid">
      <article v-for="pkg in packages" :key="pkg.name" class="card">
        <h3>{{ pkg.name }}</h3>
        <p class="tagline">{{ pkg.tagline }}</p>
        <p class="solves">{{ pkg.solves }}</p>
        <div class="tags">
          <TechTag v-for="t in pkg.tech" :key="t" :label="t" />
        </div>
        <a
          class="btn btn-link external-icon"
          :href="pkg.url"
          target="_blank"
          rel="noopener noreferrer"
        >
          View on GitHub
        </a>
      </article>
    </div>
  </Section>
</template>

<style scoped>
.grid {
  display: grid;
  gap: 1.25rem;
}

.card {
  border: 1px solid var(--border);
  background: var(--bg-elevated);
  padding: 28px;
  border-radius: var(--radius);
  display: flex;
  flex-direction: column;
  transition:
    border-color 160ms ease,
    background-color 160ms ease;
}

.card:hover {
  border-color: #c5cad1;
  background: var(--surface);
}

h3 {
  font-size: var(--text-lg);
  letter-spacing: -0.02em;
}

.tagline {
  margin-top: 6px;
  font-size: var(--text-sm);
  font-weight: 600;
  color: var(--accent);
}

.solves {
  margin-top: 12px;
  color: var(--text-secondary);
  font-size: var(--text-sm);
  line-height: 1.65;
  flex: 1;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-top: 16px;
}

.btn {
  margin-top: 20px;
  align-self: flex-start;
  padding-inline: 0;
}

@media (min-width: 900px) {
  .grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
