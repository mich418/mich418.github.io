<template>
  <div
    class="page"
    :class="{ 'page--mobile-menu-open': mobileMenuOpen }"
  >
    <div class="page__grid">
      <MobileMenuTrigger
        class="page__mobile-menu-trigger"
        :is-active="mobileMenuOpen"
        @click="mobileMenuOpen = !mobileMenuOpen"
      />
      <Header class="page__header" />
      <Navigation class="page__navigation" />
      <RouterView class="page__content" />
      <Footer class="page__footer" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { RouterView, useRoute } from 'vue-router'
import Header from './components/Header.vue'
import Navigation from './components/Navigation.vue'
import Footer from './components/Footer.vue'
import Console from './components/Console'
import MobileMenuTrigger from './components/MobileMenuTrigger.vue'

new Console()

const mobileMenuOpen = ref(false)
const route = useRoute()

watch(() => route.path, () => {
  mobileMenuOpen.value = false
})
</script>

<style lang="scss">
@use './variables/variables' as variables;

.page {
  width: 100%;
  max-width: 840px;
  margin: 0 auto;

  &--mobile-menu-open {
    @media (max-width: variables.$breakpoint - 1px) {
      overflow-x: hidden;

      .page__grid {
        transform: translateX(90px);
      }

      .page__navigation {
        transform: translateX(-30px);
      }

      .page__header,
      .page__content,
      .page__footer {
        opacity: .6;
      }
    }
  }

  &__grid {
    display: block;
    position: relative;
    width: 100%;
    padding: 20px 20px 20px 70px;
    transition: transform .2s;

    @media (min-width: variables.$breakpoint) {
      width: 840px;
      padding: 20px;
      display: grid;
      grid-template-columns: 160px auto;
      grid-template-areas:
        '. header'
        'navigation main'
        '. footer';
      grid-template-rows: auto 1fr auto;
      column-gap: 40px;
      row-gap: 20px;
    }
  }

  &__mobile-menu-trigger {
    position: fixed;
    top: 48px;
    left: 20px;

    @media (min-width: variables.$breakpoint) {
      display: none;
    }
  }

  &__header {
    grid-area: header;
  }

  &__navigation {
    grid-area: navigation;
    transition: transform .2s;

    @media (max-width: variables.$breakpoint - 1px) {
      position: fixed;
      left: 0;
      transform: translateX(-100%);
      top: 100px;
    }
  }

  &__content {
    grid-area: main;
  }

  &__footer {
    grid-area: footer;
  }
}
</style>
