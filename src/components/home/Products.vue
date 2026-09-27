<script setup>
import Section from '../layout/Section.vue'
import ProjectCard from '../projects/ProjectCard.vue'
import { projects } from '../../content/projects.js'

const products = projects.filter((project) => project.kind === 'product')
</script>

<template>
  <Section
    id="products"
    label="Products"
    title="Products I design, build, and operate."
    description="Independent software I own, from the first version through production."
  >
    <div class="grid">
      <ProjectCard
        v-for="project in products"
        :key="project.id"
        :project="project"
        :featured="products.length === 1"
        :class="{ 'span-full': products.length === 1 }"
      />
    </div>
  </Section>
</template>

<style scoped>
.grid {
  display: grid;
  gap: 1.25rem;
}

@media (min-width: 900px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .span-full {
    grid-column: 1 / -1;
  }
}
</style>
