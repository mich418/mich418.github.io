<template>
  <Content :title="t('contentTitles.contact')">
    <p>contact...</p>
  </Content>
</template>

<script setup lang="ts">
import Content from '../components/Content.vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>
