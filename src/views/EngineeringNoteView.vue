<script setup>
import { computed } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import { engineering } from '../content/engineering.js'

const route = useRoute()
const note = computed(() =>
  engineering.find((n) => n.id === route.params.slug),
)
</script>

<template>
  <main class="note-page">
    <div v-if="note" class="container">
      <p class="crumb">
        <RouterLink :to="{ path: '/', hash: '#engineering' }">Engineering</RouterLink>
        <span aria-hidden="true"> / </span>
        <span>{{ note.title }}</span>
      </p>

      <header class="header">
        <p class="section-label">Engineering</p>
        <h1>{{ note.title }}</h1>
        <p class="subtitle">{{ note.subtitle }}</p>
        <p class="summary">{{ note.summary }}</p>
      </header>

      <section
        v-for="(section, i) in note.sections"
        :key="i"
        class="section-block"
      >
        <h2>{{ section.heading }}</h2>
        <p v-for="(para, j) in section.body" :key="j">{{ para }}</p>
      </section>

      <p class="back">
        <RouterLink :to="{ path: '/', hash: '#engineering' }">Back to Engineering</RouterLink>
      </p>
    </div>

    <div v-else class="container">
      <h1>Not found</h1>
      <RouterLink to="/">Back to portfolio</RouterLink>
    </div>
  </main>
</template>

<style scoped>
.note-page {
  padding: 48px 0 96px;
}

.crumb {
  font-size: var(--text-sm);
  color: var(--text-muted);
}

.crumb a {
  color: var(--text-secondary);
}

.header {
  margin-top: 28px;
  max-width: 44rem;
  padding-bottom: 40px;
  border-bottom: 1px solid var(--border);
  margin-bottom: 40px;
}

h1 {
  margin-top: 12px;
  font-size: clamp(2rem, 4vw, 2.75rem);
  letter-spacing: -0.03em;
  line-height: 1.15;
}

.subtitle {
  margin-top: 12px;
  font-weight: 600;
  color: var(--accent);
}

.summary {
  margin-top: 16px;
  color: var(--text-secondary);
  line-height: 1.7;
  font-size: var(--text-lg);
}

.section-block {
  max-width: 44rem;
  margin-bottom: 40px;
}

.section-block h2 {
  font-size: var(--text-xl);
  letter-spacing: -0.02em;
  margin-bottom: 14px;
}

.section-block p {
  color: var(--text-secondary);
  line-height: 1.7;
  margin-bottom: 12px;
}

.back {
  margin-top: 24px;
  font-weight: 600;
}
</style>
