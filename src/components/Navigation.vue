<template>
  <nav class="navigation">
    <ul class="navigation__elements">
      <li
        v-for="link in navigationLinks"
        class="navigation__element"
        :key="link.path"
      >
        <RouterLink :to="link.path">
          {{ link.name }}
        </RouterLink>
      </li>
    </ul>
    <LangSwitch class="navigation__lang-switch" />
  </nav>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { RouterLink } from 'vue-router';
import { navigation } from '@/variables/variables';
import { useI18n } from 'vue-i18n';
import LangSwitch from '@/components/LangSwitch.vue';
const { t } = useI18n();

const navigationLinks = computed(() => {
  return navigation.map(navigationLink => ({
    path: navigationLink.path,
    name: t(`navigation.link.${navigationLink.name}`),
  }))
})
</script>

<style lang="scss">
.navigation {
  width: var(--navigation-width);

  &__elements {
    list-style: none;
    padding: 0;
    margin: 3px 0 0;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  &__element {
    margin-bottom: 10px;
    padding-right: 15px;
    position: relative;

    &:last-child {
      margin-bottom: 0;
    }

    &:has(.router-link-active) {
      &::after {
        content: '';
        width: 2px;
        height: 18px;
        margin-top: -8px;
        top: 50%;
        background-color: var(--font-color-base);
        position: absolute;
        right: 0px;
      }
    }
  }

  &__lang-switch {
    margin-top: 30px;
    padding-right: 15px;
  }
}
</style>
