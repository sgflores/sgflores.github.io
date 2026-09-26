<script setup>
defineProps({
  id: { type: String, default: undefined },
  label: { type: String, default: '' },
  title: { type: String, default: '' },
  description: { type: String, default: '' },
  alt: { type: Boolean, default: false },
})
</script>

<template>
  <section :id="id" class="section" :class="{ 'section-alt': alt }">
    <div class="container">
      <header v-if="label || title || description" class="section-header">
        <p v-if="label" class="section-label">{{ label }}</p>
        <h2 v-if="title" class="section-title">{{ title }}</h2>
        <p v-if="description" class="section-description">{{ description }}</p>
      </header>
      <slot />
    </div>
  </section>
</template>
