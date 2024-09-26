<template>
  <Content :title="t('contentTitles.home')">
    <p v-html="t('home.paragraphs[0]')"/>
    <p v-html="t('home.paragraphs[1]')"/>
  </Content>
</template>

<script setup lang="ts">
import Content from '../components/Content.vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>
