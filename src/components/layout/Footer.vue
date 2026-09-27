<script setup>
import { site } from '../../content/site.js'
</script>

<template>
  <footer class="footer">
    <div class="container footer-inner">
      <div>
        <p class="name">{{ site.shortName.toUpperCase() }}</p>
        <p class="meta">{{ site.title }}</p>
        <p class="meta">{{ site.location }}</p>
      </div>
      <div class="links">
        <RouterLink :to="{ path: '/', hash: '#work' }">Work</RouterLink>
        <RouterLink :to="{ path: '/', hash: '#products' }">Products</RouterLink>
        <RouterLink :to="{ path: '/', hash: '#open-source' }">Open Source</RouterLink>
        <a :href="site.github" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a :href="site.linkedin" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a :href="`mailto:${site.email}`">Email</a>
        <a :href="site.resumeUrl" target="_blank" rel="noopener noreferrer">Resume</a>
      </div>
      <p class="copy">© {{ new Date().getFullYear() }} {{ site.shortName }}</p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  border-top: 1px solid var(--border);
  padding: 40px 0;
  margin-top: auto;
}

.footer-inner {
  display: grid;
  gap: 1.5rem;
}

.name {
  font-size: var(--text-sm);
  font-weight: 700;
  letter-spacing: 0.06em;
}

.meta {
  color: var(--text-secondary);
  font-size: var(--text-sm);
  margin-top: 0.25rem;
}

.links {
  display: flex;
  gap: 1.25rem;
  flex-wrap: wrap;
}

.links a {
  font-size: var(--text-sm);
  font-weight: 500;
}

.copy {
  color: var(--text-muted);
  font-size: var(--text-xs);
}

@media (min-width: 768px) {
  .footer-inner {
    grid-template-columns: 1fr auto;
    align-items: end;
  }

  .copy {
    grid-column: 1 / -1;
  }
}
</style>
