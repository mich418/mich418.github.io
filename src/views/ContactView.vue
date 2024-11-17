<template>
  <Content :title="t('contentTitles.contact')">
    <div class="contact">
      <p>{{ t('contact.paragraphs[0]') }}</p>
      <div class="contact__buttons">
        <Button
          text="Github"
          icon="github"
          href="https://github.com/mich418"
          target="_blank"
        />
        <Button
          text="Linkedin"
          icon="linkedin"
          href="https://www.linkedin.com/in/michalkoczkodon/"
          target="_blank"
        />
        <Button
          text="Twitter"
          icon="twitter"
          href="https://x.com/mihauco"
          target="_blank"
        />
      </div>
    </div>
  </Content>
</template>

<script setup lang="ts">
import Content from '@/components/Content.vue';
import Button from '@/components/Button.vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>

<style lang="scss">
.contact {
  &__buttons {
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
    margin-top: 24px;
  }
}
</style>
