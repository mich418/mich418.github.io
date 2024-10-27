<template>
  <Content :title="t('contentTitles.privacy')">
    <p v-html="t('privacyNotice.text')"/>
  </Content>
</template>

<script setup lang="ts">
import Content from '@/components/Content.vue';
import { RouterLink } from 'vue-router';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>
