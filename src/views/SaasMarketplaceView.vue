<script setup>
import CaseStudyLayout from '../components/projects/CaseStudyLayout.vue'
import { saasMarketplaceCase } from '../content/projects.js'
</script>

<template>
  <CaseStudyLayout
    label="Selected Experience"
    :title="saasMarketplaceCase.title"
    :role="saasMarketplaceCase.role"
    :dates="saasMarketplaceCase.dates"
    :intro="saasMarketplaceCase.intro"
    :scale="saasMarketplaceCase.scale"
    :external-url="saasMarketplaceCase.externalUrl"
    :external-label="saasMarketplaceCase.externalLabel"
  >
    <section class="block">
      <h2>What I worked on</h2>
      <ul>
        <li v-for="(item, i) in saasMarketplaceCase.contributions" :key="i">
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
