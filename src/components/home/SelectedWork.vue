<script setup>
import Section from '../layout/Section.vue'
import ProjectCard from '../projects/ProjectCard.vue'
import { projects } from '../../content/projects.js'

const work = projects.filter((project) => project.kind === 'professional')
</script>

<template>
  <Section
    id="work"
    label="Selected Work"
    title="Production systems I've built and contributed to."
    description="Long-term engineering on logistics and SaaS platforms."
  >
    <div class="grid">
      <ProjectCard v-for="project in work" :key="project.id" :project="project" />
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
}
</style>
