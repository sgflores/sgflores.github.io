<script setup>
defineProps({
  label: { type: String, default: 'Case Study' },
  title: { type: String, required: true },
  role: { type: String, required: true },
  dates: { type: String, required: true },
  intro: { type: String, required: true },
  scale: { type: Array, default: () => [] },
  externalUrl: { type: String, default: '' },
  externalLabel: { type: String, default: '' },
})
</script>

<template>
  <main class="case">
    <div class="container">
      <p class="crumb">
        <RouterLink :to="{ path: '/', hash: '#work' }">Selected Work</RouterLink>
        <span aria-hidden="true"> / </span>
        <span>{{ title }}</span>
      </p>

      <header class="header">
        <p class="section-label">{{ label }}</p>
        <h1>{{ title }}</h1>
        <p class="role">{{ role }}</p>
        <p class="dates">{{ dates }}</p>
        <p class="intro">{{ intro }}</p>
        <div v-if="externalUrl" class="actions">
          <a
            class="btn btn-primary external-icon"
            :href="externalUrl"
            target="_blank"
            rel="noopener noreferrer"
          >
            {{ externalLabel }}
          </a>
          <RouterLink class="btn btn-secondary" :to="{ path: '/', hash: '#work' }">
            Back to Selected Work
          </RouterLink>
        </div>
      </header>

      <div v-if="scale.length" class="scale" aria-label="Scale of experience">
        <div v-for="(item, i) in scale" :key="i" class="scale-item">
          <p class="value">{{ item.value }}</p>
          <p class="label">{{ item.label }}</p>
        </div>
      </div>

      <slot />
    </div>
  </main>
</template>

<style scoped>
.case {
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
}

h1 {
  margin-top: 12px;
  font-size: clamp(2rem, 4vw, 3rem);
  letter-spacing: -0.035em;
  line-height: 1.1;
}

.role {
  margin-top: 14px;
  font-weight: 600;
}

.dates {
  margin-top: 4px;
  color: var(--text-muted);
  font-size: var(--text-sm);
}

.intro {
  margin-top: 20px;
  color: var(--text-secondary);
  line-height: 1.7;
  font-size: var(--text-lg);
}

.actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 28px;
}

.scale {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.25rem;
  padding: 36px 0;
  border-bottom: 1px solid var(--border);
  margin-bottom: 48px;
}

.scale-item .value {
  font-size: var(--text-base);
  font-weight: 700;
  letter-spacing: -0.02em;
}

.scale-item .label {
  margin-top: 4px;
  color: var(--text-secondary);
  font-size: var(--text-sm);
}

@media (min-width: 720px) {
  .scale {
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>
