<script setup>
import Navbar from './components/layout/Navbar.vue'
import Footer from './components/layout/Footer.vue'
import BackgroundMark from './components/layout/BackgroundMark.vue'
</script>

<template>
  <BackgroundMark />
  <Navbar />
  <div class="page">
    <RouterView />
    <Footer />
  </div>
</template>

<style scoped>
.page {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>
