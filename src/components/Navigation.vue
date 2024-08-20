<template>
  <nav>
    <ul>
      <li
        v-for="link in navigationLinks"
        :key="link.path"
      >
        <RouterLink :to="link.path">
          {{ link.name }}
        </RouterLink>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { useI18n } from 'vue-i18n'
import { navigation } from '@/variables/variables';
const { t } = useI18n() 

const navigationLinks = navigation.map(navigationLink => ({
  path: navigationLink.path,
  name: t(`navigation.link.${navigationLink.name}`),
}))
</script>

<style lang="scss">
nav {
  width: var(--navigation-width);

  ul {
    list-style: none;
    padding: 0;
    margin: 3px 0 0;
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    li {
      margin-bottom: 10px;
      position: relative;

      &:last-child {
        margin-bottom: 0;
      }

      &::after {
        content: '\00a0\00a0';
      }

      &:has(.router-link-active) {
        &::after {
          content: ' |';
        }
      }
    }
  }
}
</style>
