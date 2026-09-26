<script setup>
import Section from '../layout/Section.vue'
import ProjectCard from '../projects/ProjectCard.vue'
import { projects } from '../../content/projects.js'
</script>

<template>
  <Section
    id="work"
    label="Selected Work"
    title="Production systems I've built and contributed to."
    description="Product work I own, plus long-term engineering on logistics and SaaS platforms."
  >
    <div class="grid">
      <ProjectCard
        v-for="(project, i) in projects"
        :key="project.id"
        :project="project"
        :featured="i === 0"
        :class="{ 'featured-span': i === 0 }"
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

  .featured-span {
    grid-column: 1 / -1;
  }
}
</style>
