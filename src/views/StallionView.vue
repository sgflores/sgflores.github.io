<script setup>
import CaseStudyLayout from '../components/projects/CaseStudyLayout.vue'
import { stallionCase } from '../content/projects.js'
</script>

<template>
  <CaseStudyLayout
    label="Professional Experience"
    :title="stallionCase.title"
    :role="stallionCase.role"
    :dates="stallionCase.dates"
    :intro="stallionCase.intro"
    :scale="stallionCase.scale"
    :external-url="stallionCase.externalUrl"
    :external-label="stallionCase.externalLabel"
  >
    <section class="block">
      <h2>What I worked on</h2>
      <ul>
        <li v-for="(item, i) in stallionCase.contributions" :key="i">
          {{ item }}
        </li>
      </ul>
    </section>

    <section class="block">
      <h2>How the pieces connect</h2>
      <pre class="diagram" aria-label="Shipping and eCommerce integration overview">{{ `     eCommerce platforms
     (Shopify, marketplaces, and more)
                 │
                 ▼
        ┌───────────────────┐
        │  Order / Shipping │
        │     workflows     │
        └─────────┬─────────┘
                  │
                  ▼
        ┌───────────────────┐
        │  Shipping engine  │
        └─────────┬─────────┘
                  │
         ┌────────┴────────┐
         ▼                 ▼
     Carrier A         Carrier B` }}</pre>
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
</style>
