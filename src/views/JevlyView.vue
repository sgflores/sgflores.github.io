<script setup>
import CaseStudyLayout from '../components/projects/CaseStudyLayout.vue'
import TechTag from '../components/projects/TechTag.vue'
import { jevlyCase } from '../content/projects.js'
</script>

<template>
  <CaseStudyLayout
    label="Selected Experience"
    :title="jevlyCase.title"
    :role="jevlyCase.role"
    :dates="jevlyCase.dates"
    :intro="jevlyCase.intro"
    :scale="jevlyCase.scale"
    :external-url="jevlyCase.externalUrl"
    :external-label="jevlyCase.externalLabel"
    back-hash="#products"
    back-label="Products"
  >
    <section class="block">
      <h2>The problem</h2>
      <p v-for="(p, i) in jevlyCase.problem" :key="'p' + i">{{ p }}</p>
    </section>

    <section class="block">
      <h2>How the system fits together</h2>
      <pre class="diagram" aria-label="Jevly POS system overview">{{ `             JEVLY POS

          Vue / TypeScript
                 │
                 ▼
        Offline-capable PWA
                 │
                 ▼
           Laravel API
              /     \\
             ▼       ▼
          MySQL      AWS` }}</pre>
    </section>

    <section class="block">
      <h2>What I built</h2>
      <ul>
        <li v-for="(item, i) in jevlyCase.approach" :key="'a' + i">
          {{ item }}
        </li>
      </ul>
    </section>

    <section class="block">
      <h2>Technologies</h2>
      <div class="tags">
        <TechTag v-for="t in jevlyCase.stack" :key="t" :label="t" />
      </div>
    </section>
  </CaseStudyLayout>
</template>

<style scoped>
.block {
  max-width: 44rem;
  margin-bottom: 48px;
}

.block h2 {
  font-size: var(--text-xl);
  letter-spacing: -0.02em;
  margin-bottom: 16px;
}

.block p,
.block li {
  color: var(--text-secondary);
  line-height: 1.7;
  margin-bottom: 12px;
}

.block ul {
  padding-left: 1.2rem;
}

.diagram {
  margin: 0;
  padding: 20px;
  background: var(--code-bg);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  font-size: 0.8rem;
  line-height: 1.45;
  overflow-x: auto;
  color: var(--text);
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
}
</style>
