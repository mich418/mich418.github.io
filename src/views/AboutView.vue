<template>
  <Content :title="t('contentTitles.about')">
    <p>About text...</p>
  </Content>
</template>

<script setup lang="ts">
import Content from '../components/Content.vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>
