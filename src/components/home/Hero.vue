<script setup>
import { site } from '../../content/site.js'
</script>

<template>
  <section class="hero">
    <div class="container hero-grid">
      <div class="copy">
        <p class="name">{{ site.name.toUpperCase() }}</p>
        <h1>{{ site.title }}</h1>
        <p class="positioning">{{ site.hero.positioning }}</p>
        <p class="tech">{{ site.hero.tech }}</p>
        <p class="underline">{{ site.hero.underline }}</p>
        <div class="actions">
          <a class="btn btn-primary" href="#work">View Selected Work</a>
          <a
            class="btn btn-secondary"
            :href="site.resumeUrl"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download Resume
          </a>
        </div>
        <p class="domains">{{ site.hero.domains }}</p>
        <p class="location">
          Based in {{ site.location }} · Remote engineering experience
        </p>
      </div>
      <aside class="photo-wrap">
        <img
          class="photo"
          :src="site.photo"
          :alt="site.photoAlt"
          width="240"
          height="240"
          decoding="async"
        />
        <p class="photo-caption">{{ site.shortName }}</p>
        <p class="photo-meta">Cebu City, PH</p>
      </aside>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  padding: 80px 0 64px;
  border-bottom: 1px solid var(--border);
  overflow: hidden;
  background:
    radial-gradient(
      120% 80% at 0% 0%,
      rgba(37, 99, 235, 0.07) 0%,
      transparent 55%
    ),
    radial-gradient(
      90% 70% at 100% 10%,
      rgba(15, 23, 42, 0.04) 0%,
      transparent 50%
    ),
    linear-gradient(180deg, #ffffff 0%, var(--bg) 100%);
}

.hero::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(23, 25, 28, 0.035) 1px, transparent 1px),
    linear-gradient(90deg, rgba(23, 25, 28, 0.035) 1px, transparent 1px);
  background-size: 48px 48px;
  mask-image: linear-gradient(180deg, rgba(0, 0, 0, 0.45), transparent 85%);
  pointer-events: none;
}

.hero-grid {
  position: relative;
  z-index: 1;
  display: grid;
  gap: 2.5rem;
  align-items: start;
}

.name {
  font-size: var(--text-xs);
  font-weight: 700;
  letter-spacing: 0.14em;
  color: var(--text-muted);
}

h1 {
  margin-top: 12px;
  font-size: clamp(2.125rem, 5vw, 3.25rem);
  line-height: 1.1;
  letter-spacing: -0.035em;
  font-weight: 700;
  max-width: 14ch;
}

.positioning {
  margin-top: 24px;
  font-size: var(--text-lg);
  line-height: 1.55;
  color: var(--text-secondary);
  max-width: 36rem;
}

.tech {
  margin-top: 16px;
  font-size: var(--text-sm);
  font-weight: 600;
  color: var(--text);
}

.underline {
  margin-top: 8px;
  font-size: var(--text-sm);
  color: var(--text-muted);
}

.actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 28px;
}

.domains {
  margin-top: 28px;
  font-size: var(--text-sm);
  color: var(--text-secondary);
  max-width: 36rem;
}

.location {
  margin-top: 10px;
  font-size: var(--text-sm);
  color: var(--text-muted);
}

.photo-wrap {
  justify-self: start;
  margin-top: 4px;
}

.photo {
  width: 240px;
  height: 240px;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  object-position: center 20%;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--surface);
}

.photo-caption {
  margin-top: 12px;
  font-size: var(--text-sm);
  font-weight: 600;
}

.photo-meta {
  font-size: var(--text-xs);
  color: var(--text-muted);
}

@media (min-width: 900px) {
  .hero-grid {
    grid-template-columns: minmax(0, 1fr) 240px;
    column-gap: 3rem;
    align-items: start;
  }

  .photo-wrap {
    justify-self: end;
    width: 240px;
  }
}

@media (max-width: 899px) {
  .photo-wrap {
    display: none;
  }

  .hero {
    padding: 56px 0 48px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .hero::before {
    opacity: 0.5;
  }
}
</style>
