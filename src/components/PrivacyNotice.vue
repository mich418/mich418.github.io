<template>
  <div class="privacy-notice">
    <GlitchImage
      class="privacy-notice__locker-icon"
      :image-src="locker"
      :line-height="4"
    />
    <div class="privacy-notice__content">
      <p><strong>{{ t('privacyNotice.title') }}</strong></p>
      <p v-html="t('privacyNotice.text')"/>
      <Button
        class="privacy-notice__button"
        @click="acnowledgePrivacy"
        :text="t('privacyNotice.acknowledge')"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { usePrivacy } from '@/composables/privacy';
import Button from '@/components/Button.vue';
import GlitchImage from '@/components/GlitchImage.vue';
import locker from '@/assets/locker.png';

const { t } = useI18n();
const { acnowledgePrivacy } = usePrivacy();
</script>

<style lang="scss">
.privacy-notice {
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  width: calc(100% - calc(2* var(--page-x-spacing)));
  max-width: calc(var(--page-max-width) - calc(2* var(--page-x-spacing)));
  padding: 20px;
  border: 1px solid var(--forground-color);
  background-color: var(--background-color-secondary);
  display: flex;
  align-items: center;
  z-index: 1000;

  &__locker-icon {
    width: 34px;
    height: 44px;
    image-rendering: pixelated;
    display: block;
    flex: 0 0 34px;
  }

  &__content {
    margin-left: 20px;
    flex-grow: 1 1 auto;
  }

  &__button {
    width: 100px;
    margin-top: 20px;
    display: block;
    margin-left: auto;
  }
}
</style>
