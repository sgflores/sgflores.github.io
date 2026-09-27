<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { site } from '../../content/site.js'

const open = ref(false)

const links = [
  { label: 'Work', to: { path: '/', hash: '#work' } },
  { label: 'Products', to: { path: '/', hash: '#products' } },
  { label: 'Open Source', to: { path: '/', hash: '#open-source' } },
  { label: 'Experience', to: { path: '/', hash: '#experience' } },
  { label: 'Expertise', to: { path: '/', hash: '#expertise' } },
  { label: 'Engineering', to: { path: '/', hash: '#engineering' } },
  { label: 'About', to: { path: '/', hash: '#about' } },
]

function close() {
  open.value = false
}

function onKeydown(e) {
  if (e.key === 'Escape') close()
}

onMounted(() => window.addEventListener('keydown', onKeydown))
onUnmounted(() => window.removeEventListener('keydown', onKeydown))
</script>

<template>
  <header class="nav">
    <div class="container nav-inner">
      <RouterLink class="brand" to="/" @click="close">
        {{ site.shortName.toUpperCase() }}
      </RouterLink>

      <button
        class="menu-toggle"
        type="button"
        :aria-expanded="open"
        aria-controls="primary-nav"
        :aria-label="open ? 'Close menu' : 'Open menu'"
        @click="open = !open"
      >
        <span />
        <span />
        <span />
      </button>

      <nav
        id="primary-nav"
        class="nav-links"
        :class="{ open }"
        aria-label="Primary"
      >
        <RouterLink
          v-for="link in links"
          :key="link.label"
          :to="link.to"
          @click="close"
        >
          {{ link.label }}
        </RouterLink>
        <a
          class="resume"
          :href="site.resumeUrl"
          target="_blank"
          rel="noopener noreferrer"
          @click="close"
        >
          Resume ↓
        </a>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.nav {
  position: sticky;
  top: 0;
  z-index: 100;
  background: rgba(255, 255, 255, 0.92);
  border-bottom: 1px solid var(--border);
  backdrop-filter: blur(8px);
}

.nav-inner {
  min-height: var(--nav-height);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

.brand {
  color: var(--text);
  font-size: var(--text-sm);
  font-weight: 700;
  letter-spacing: 0.06em;
}

.brand:hover {
  color: var(--text);
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 1.15rem;
  flex-wrap: wrap;
  justify-content: flex-end;
}

.nav-links a,
.nav-links :deep(a) {
  color: var(--text-secondary);
  font-size: var(--text-sm);
  font-weight: 500;
}

.nav-links a:hover,
.nav-links :deep(a:hover),
.nav-links a.resume {
  color: var(--text);
}

.nav-links a.resume {
  color: var(--accent);
  font-weight: 600;
}

.menu-toggle {
  display: none;
  width: 40px;
  height: 40px;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--bg-elevated);
  padding: 10px;
  flex-direction: column;
  justify-content: space-between;
}

.menu-toggle span {
  display: block;
  height: 2px;
  background: var(--text);
}

@media (max-width: 768px) {
  .menu-toggle {
    display: flex;
  }

  .nav-links {
    display: none;
    position: absolute;
    top: var(--nav-height);
    left: 0;
    right: 0;
    flex-direction: column;
    align-items: flex-start;
    gap: 0;
    background: var(--bg-elevated);
    border-bottom: 1px solid var(--border);
    padding: 0.5rem 1rem 1rem;
  }

  .nav-links.open {
    display: flex;
  }

  .nav-links a {
    width: 100%;
    padding: 0.75rem 0;
    border-bottom: 1px solid var(--border);
  }

  .nav-links a:last-child {
    border-bottom: none;
  }
}
</style>
