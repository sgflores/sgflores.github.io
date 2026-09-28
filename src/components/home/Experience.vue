<script setup>
import Section from '../layout/Section.vue'
import { experience } from '../../content/experience.js'
</script>

<template>
  <Section
    id="experience"
    label="Engineering Experience"
    title="12+ years across production software and business systems."
    description="Logistics, eCommerce, healthcare, and retail. From design through production support."
  >
    <ol class="timeline">
      <li v-for="job in experience" :key="job.company" class="item">
        <p class="dates">{{ job.dates }}</p>
        <div class="body">
          <h3>{{ job.company }}</h3>
          <p class="role">{{ job.role }}</p>
          <p v-if="job.meta" class="meta">{{ job.meta }}</p>
          <p v-for="(point, i) in job.points" :key="i" class="points">
            {{ point }}
          </p>
        </div>
      </li>
    </ol>
  </Section>
</template>

<style scoped>
.timeline {
  list-style: none;
  border-left: 1px solid var(--border);
  margin-left: 0.35rem;
}

.item {
  display: grid;
  gap: 0.5rem;
  padding: 0 0 2rem 1.5rem;
  position: relative;
}

.item:last-child {
  padding-bottom: 0;
}

.item::before {
  content: '';
  position: absolute;
  left: -5px;
  top: 0.45rem;
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background: var(--bg-elevated);
  border: 2px solid var(--accent);
}

.dates {
  font-size: var(--text-xs);
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--text-muted);
  white-space: nowrap;
}

h3 {
  font-size: var(--text-lg);
  letter-spacing: -0.02em;
}

.role {
  margin-top: 4px;
  font-weight: 600;
  font-size: var(--text-sm);
}

.meta,
.points {
  margin-top: 6px;
  color: var(--text-secondary);
  font-size: var(--text-sm);
  line-height: 1.55;
}

@media (min-width: 720px) {
  .item {
    grid-template-columns: 200px 1fr;
    gap: 1.5rem;
  }
}
</style>
