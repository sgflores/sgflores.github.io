<script setup>
import Section from '../layout/Section.vue'
import { howIWork } from '../../content/site.js'
import { expertise } from '../../content/expertise.js'
</script>

<template>
  <Section
    id="expertise"
    alt
    label="How I Work"
    title="From requirements to production support."
    description="A full delivery loop from understanding the problem through ongoing support."
  >
    <ol class="steps">
      <li v-for="step in howIWork" :key="step.step">
        <span class="num">{{ step.step }}</span>
        <span class="title">{{ step.title }}</span>
        <span class="body">{{ step.body }}</span>
      </li>
    </ol>

    <div class="expertise">
      <h3 class="expertise-title">Technical Expertise</h3>
      <dl class="groups">
        <div v-for="group in expertise" :key="group.group" class="group">
          <dt>{{ group.group }}</dt>
          <dd>{{ group.items }}</dd>
        </div>
      </dl>
    </div>
  </Section>
</template>

<style scoped>
.steps {
  list-style: none;
  display: grid;
  gap: 1.25rem;
}

.steps li {
  display: grid;
  gap: 0.2rem;
  padding-bottom: 1.25rem;
  border-bottom: 1px solid var(--border);
}

.steps li:last-child {
  border-bottom: none;
  padding-bottom: 0;
}

.num {
  color: var(--accent);
  font-size: var(--text-xs);
  font-weight: 700;
  letter-spacing: 0.08em;
}

.title {
  font-weight: 700;
  font-size: var(--text-sm);
  text-transform: uppercase;
  letter-spacing: 0.04em;
}

.body {
  color: var(--text-secondary);
  font-size: var(--text-sm);
}

.expertise {
  margin-top: 56px;
  padding-top: 40px;
  border-top: 1px solid var(--border);
}

.expertise-title {
  font-size: var(--text-xl);
  letter-spacing: -0.02em;
  margin-bottom: 28px;
}

.groups {
  display: grid;
  gap: 1.25rem 2rem;
}

.group dt {
  font-size: var(--text-xs);
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--text-muted);
}

.group dd {
  margin: 6px 0 0;
  color: var(--text-secondary);
  font-size: var(--text-sm);
  line-height: 1.55;
}

@media (min-width: 800px) {
  .steps {
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
  }

  .steps li {
    border-bottom: none;
    padding-bottom: 0;
  }

  .groups {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1000px) {
  .steps {
    grid-template-columns: repeat(6, 1fr);
  }
}
</style>
