<script setup>
import { site } from '../../content/site.js'
</script>

<template>
  <section id="about" class="section section-alt">
    <div class="container grid">
      <div class="about">
        <p class="section-label">About</p>
        <h2 class="section-title">{{ site.shortName }}</h2>
        <div class="about-body">
          <img
            class="photo"
            :src="site.photo"
            :alt="site.photoAlt"
            width="200"
            height="200"
            decoding="async"
            loading="lazy"
          />
          <div class="text">
            <p v-for="(para, i) in site.about" :key="i">{{ para }}</p>
            
          </div>
        </div>
      </div>

      <div class="contact">
        <p class="section-label">Let's Talk</p>
        <h2 class="section-title">Get in touch</h2>
        <p class="intro">{{ site.contactIntro }}</p>
        <ul class="links">
          <li>
            <a :href="`mailto:${site.email}`">Email me →</a>
          </li>
          <li>
            <a :href="site.linkedin" target="_blank" rel="noopener noreferrer">
              LinkedIn →
            </a>
          </li>
          <li>
            <a :href="site.github" target="_blank" rel="noopener noreferrer">
              GitHub →
            </a>
          </li>
          <li>
            <a
              :href="site.resumeUrl"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Resume ↓
            </a>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped>
.grid {
  display: grid;
  gap: 4rem;
}

.about-body {
  margin-top: 28px;
  max-width: 42rem;
}

.about-body::after {
  content: '';
  display: table;
  clear: both;
}

.photo {
  float: left;
  width: 168px;
  height: 168px;
  margin: 0.2rem 1.5rem 1rem 0;
  object-fit: cover;
  object-position: center 20%;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--bg-elevated);
  shape-outside: margin-box;
}

.text {
  display: grid;
  gap: 1rem;
  color: var(--text-secondary);
  line-height: 1.7;
}

.currently {
  color: var(--text);
  font-weight: 500;
}

.intro {
  margin-top: 16px;
  color: var(--text-secondary);
  line-height: 1.7;
  max-width: 28rem;
}

.links {
  list-style: none;
  margin-top: 28px;
  display: grid;
  gap: 0.85rem;
}

.links a {
  font-weight: 600;
  font-size: var(--text-base);
}

@media (min-width: 960px) {
  .grid {
    grid-template-columns: 1.35fr 0.85fr;
    gap: 4rem;
    align-items: start;
  }

  .photo {
    width: 188px;
    height: 188px;
  }
}

@media (max-width: 719px) {
  .about {
    text-align: center;
  }

  .about-body {
    margin-top: 24px;
  }

  .photo {
    float: none;
    display: block;
    width: 148px;
    height: 148px;
    margin: 0 auto 1.5rem;
  }

  .text {
    text-align: left;
  }
}
</style>
