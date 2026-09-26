<script setup>
import CaseStudyLayout from '../components/projects/CaseStudyLayout.vue'
import { qgpCase } from '../content/projects.js'
</script>

<template>
  <CaseStudyLayout
    label="Professional Experience"
    :title="qgpCase.title"
    :role="qgpCase.role"
    :dates="qgpCase.dates"
    :intro="qgpCase.intro"
    :scale="qgpCase.scale"
    :external-url="qgpCase.externalUrl"
    :external-label="qgpCase.externalLabel"
  >
    <section class="block">
      <h2>What I worked on</h2>
      <ul>
        <li v-for="(item, i) in qgpCase.contributions" :key="i">
          {{ item }}
        </li>
      </ul>
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
</style>
