<template>
  <Content :title="t('contentTitles.code')">
    <div class="code">
      My works...
    </div>
  </Content>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import Content from '@/components/Content.vue';

const { t } = useI18n();
</script>
