<template>
  <ul class="lang-switch">
    <li
      v-for="lang in langs"
      class="lang-switch__lang"
      :class="{
        'lang-switch__lang--active': lang === locale,
      }"
    >
      <span @click="setLocale(lang)">{{ lang }}</span>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const { locale } = useI18n()

const setLocale = (lang: string) => {
  locale.value = lang;
}

const langs = ['pl', 'en']
</script>
<style lang="scss">
.lang-switch {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: flex-end;

  &__lang {
    padding: 0 8px;
    position: relative;

    span {
      cursor: pointer;
    }

    &--active {
      span {
        text-decoration: underline;
        cursor: default;
      }
    }

    &:first-child {
      padding-left: 0;
    }

    &:last-child {
      padding-right: 0;
    }

    &:not(:last-child)::after {
      content: '/';
      position: absolute;
      right: -5px;
    }
  }
}
</style>
