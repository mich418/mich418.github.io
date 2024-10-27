<template>
  <footer>
    <p>&copy; {{ year }} Michał Koczkodon</p>
    <RouterLink to="/privacy">
      {{ t('navigation.link.privacy') }}
    </RouterLink>
  </footer>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
const year = new Date().getFullYear();
</script>

<style lang="scss">
footer {
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
