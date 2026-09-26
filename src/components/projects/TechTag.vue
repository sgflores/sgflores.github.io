<script setup>
defineProps({
  label: { type: String, required: true },
})
</script>

<template>
  <span class="tag">{{ label }}</span>
</template>

<style scoped>
.tag {
  display: inline-block;
  padding: 0.2rem 0.55rem;
  border: 1px solid var(--border);
  border-radius: 4px;
  background: var(--bg-elevated);
  color: var(--text-secondary);
  font-size: var(--text-xs);
  font-weight: 500;
  line-height: 1.4;
}
</style>
