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
      <div
        v-if="mobileMenuOpen"
        class="page__mobile-overlay"
        @click="mobileMenuOpen = false"
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
  --mobile-left-padding: calc(var(--page-x-spacing) * 2 + var(--burger-menu-button-size));
  width: 100%;
  max-width: 840px;
  margin: 0 auto;
  overflow-x: hidden;

  &--mobile-menu-open {
    .page__grid {
      left: calc(var(--navigation-width) - var(--mobile-left-padding) + var(--page-x-spacing));

      @media (min-width: variables.$breakpoint) {
        left: 0;
      }
    }

    .page__navigation {
      left: 0;

      @media (min-width: variables.$breakpoint) {
        left: auto;
      }
    }

    .page__header,
    .page__content,
    .page__footer {
      pointer-events: none;
      opacity: .4;

      @media (min-width: variables.$breakpoint) {
        opacity: 1;
        pointer-events: unset;
      }
    }
  }

  &__grid {
    display: grid;
    position: relative;
    left: 0;
    width: 100%;
    min-height: 100vh;
    padding:
      var(--page-y-spacing)
      var(--page-x-spacing)
      var(--page-y-spacing)
      var(--mobile-left-padding);
    transition: left .2s;
    grid-template-columns: auto;
    grid-template-rows: min-content 1fr min-content;
    grid-template-areas:
      'header'
      'main'
      'footer';
    row-gap: 20px;

    @media (min-width: variables.$breakpoint) {
      width: 840px;
      padding: var(--page-y-spacing) var(--page-x-spacing);
      grid-template-columns: var(--navigation-width) auto;
      grid-template-areas:
        '. header'
        'navigation main'
        '. footer';
      grid-template-rows: auto 1fr auto;
      column-gap: 40px;
    }
  }

  &__mobile-menu-trigger {
    position: fixed;
    top: 38px;
    left: var(--page-x-spacing);

    @media (min-width: variables.$breakpoint) {
      display: none;
    }
  }

  &__mobile-overlay {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: var(--mobile-left-padding);

    @media (min-width: variables.$breakpoint) {
      display: none;
    }
  }

  &__header {
    grid-area: header;
  }

  &__navigation {
    transition: left .2s;
    position: fixed;
    left: calc(-1 * var(--navigation-width));
    top: 112px;

    @media (min-width: variables.$breakpoint) {
      grid-area: navigation;
      position: static;
      left: auto;
      top: auto;
      transform: none;
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
