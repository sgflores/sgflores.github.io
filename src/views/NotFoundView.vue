<script setup>
import { site } from '../content/site.js'
</script>

<template>
  <main class="not-found">
    <div class="container">
      <p class="code">404</p>
      <h1>This page doesn't exist.</h1>
      <p class="text">The URL may be incorrect or the page may have moved.</p>
      <RouterLink class="btn btn-primary" to="/">Back to portfolio</RouterLink>
      <p class="meta">{{ site.shortName }} · {{ site.title }}</p>
    </div>
  </main>
</template>

<style scoped>
.not-found {
  flex: 1;
  padding: 96px 0;
}

.code {
  color: var(--accent);
  font-size: var(--text-xs);
  font-weight: 700;
  letter-spacing: 0.12em;
}

h1 {
  margin-top: 12px;
  font-size: clamp(1.75rem, 4vw, 2.5rem);
  letter-spacing: -0.03em;
}

.text {
  margin-top: 12px;
  color: var(--text-secondary);
}

.btn {
  margin-top: 28px;
}

.meta {
  margin-top: 40px;
  font-size: var(--text-sm);
  color: var(--text-muted);
}
</style>
