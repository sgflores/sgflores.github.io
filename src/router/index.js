import { createRouter, createWebHistory } from 'vue-router'
import { site } from '../content/site.js'
import { jevlyCase, stallionCase, saasMarketplaceCase } from '../content/projects.js'
import { engineering } from '../content/engineering.js'
import HomeView from '../views/HomeView.vue'
import JevlyView from '../views/JevlyView.vue'
import StallionView from '../views/StallionView.vue'
import SaasMarketplaceView from '../views/SaasMarketplaceView.vue'
import EngineeringNoteView from '../views/EngineeringNoteView.vue'
import NotFoundView from '../views/NotFoundView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { title: site.defaultTitle },
    },
    {
      path: '/work/jevly',
      name: 'work-jevly',
      component: JevlyView,
      meta: { title: jevlyCase.metaTitle },
    },
    {
      path: '/work/stallion',
      name: 'work-stallion',
      component: StallionView,
      meta: { title: stallionCase.metaTitle },
    },
    {
      path: '/work/saas-marketplace',
      name: 'work-saas-marketplace',
      component: SaasMarketplaceView,
      meta: { title: saasMarketplaceCase.metaTitle },
    },
    {
      path: '/work/qgp',
      redirect: '/work/saas-marketplace',
    },
    {
      path: '/engineering/:slug',
      name: 'engineering-note',
      component: EngineeringNoteView,
      beforeEnter(to) {
        const exists = engineering.some((n) => n.id === to.params.slug)
        if (!exists) return { name: 'not-found' }
      },
      meta: {
        title: (to) => {
          const note = engineering.find((n) => n.id === to.params.slug)
          return note?.metaTitle || site.defaultTitle
        },
      },
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: NotFoundView,
      meta: { title: `Page not found | ${site.shortName}` },
    },
  ],
  scrollBehavior(to, _from, saved) {
    if (saved) return saved
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' }
    }
    return { top: 0 }
  },
})

router.afterEach((to) => {
  const metaTitle = to.meta.title
  document.title =
    typeof metaTitle === 'function'
      ? metaTitle(to)
      : metaTitle || site.defaultTitle
})

export default router
