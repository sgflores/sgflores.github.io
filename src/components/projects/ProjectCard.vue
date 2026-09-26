<script setup>
import TechTag from './TechTag.vue'

defineProps({
  project: { type: Object, required: true },
  featured: { type: Boolean, default: false },
})
</script>

<template>
  <article class="card" :class="{ featured }">
    <p class="number">{{ project.number }}</p>
    <h3 class="name">{{ project.name }}</h3>
    <p class="role">{{ project.role }}</p>
    <p class="dates">{{ project.dates }}</p>
    <p v-if="project.highlight" class="highlight">{{ project.highlight }}</p>
    <p class="summary">{{ project.summary }}</p>
    <p class="emphasis">{{ project.emphasis.join(' · ') }}</p>
    <div v-if="project.tech?.length" class="tags">
      <TechTag v-for="t in project.tech" :key="t" :label="t" />
    </div>
    <div class="actions">
      <RouterLink class="btn btn-link" :to="project.caseStudyPath">
        {{ project.caseStudyLabel }} →
      </RouterLink>
      <a
        class="btn btn-link external-icon"
        :href="project.externalUrl"
        target="_blank"
        rel="noopener noreferrer"
      >
        {{ project.externalLabel }}
      </a>
    </div>
  </article>
</template>

<style scoped>
.card {
  border: 1px solid var(--border);
  background: var(--bg-elevated);
  padding: 28px;
  border-radius: var(--radius);
  transition:
    border-color 160ms ease,
    background-color 160ms ease;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.card:hover {
  border-color: #c5cad1;
  background: var(--surface);
}

.featured {
  padding: 32px;
}

.number {
  color: var(--accent);
  font-size: var(--text-xs);
  font-weight: 700;
  letter-spacing: 0.1em;
}

.name {
  margin-top: 12px;
  font-size: var(--text-xl);
  letter-spacing: -0.02em;
  line-height: 1.2;
}

.role {
  margin-top: 8px;
  font-weight: 600;
  font-size: var(--text-sm);
}

.dates,
.highlight {
  margin-top: 4px;
  color: var(--text-muted);
  font-size: var(--text-sm);
}

.summary {
  margin-top: 16px;
  color: var(--text-secondary);
  line-height: 1.65;
  flex: 1;
}

.emphasis {
  margin-top: 14px;
  font-size: var(--text-sm);
  font-weight: 500;
  color: var(--text);
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-top: 16px;
}

.actions {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem 1.5rem;
  margin-top: 24px;
  padding-top: 20px;
  border-top: 1px solid var(--border);
}
</style>
