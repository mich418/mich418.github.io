<template>
  <Content :title="t('contentTitles.contact')">
    <p>contact...</p>
    <Button
      text="Github"
      icon="github"
      href="/"
    />
    <hr>
    <Button
      text="Linkedin"
      icon="linkedin"
      href="/"
    />
    <hr>
    <Button
      text="Twitter"
      icon="twitter"
      href="/"
    />
  </Content>
</template>

<script setup lang="ts">
import Content from '../components/Content.vue';
import Button from '@/components/Button.vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>
