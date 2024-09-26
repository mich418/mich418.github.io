<template>
  <Content :title="t('contentTitles.about')">
    <div class="about">
      <GlitchImage
        class="about__image"
        :image-src="myFace"
      />
      <p v-html="t('about.paragraphs[0]')"/>
    </div>
  </Content>
</template>

<script setup lang="ts">
import Content from '@/components/Content.vue';
import GlitchImage from '@/components/GlitchImage.vue';
import { useI18n } from 'vue-i18n';
import myFace from '@/assets/mk_info_img.jpeg';

const { t } = useI18n();
</script>

<style lang="scss">
.about {
  &__image {
    width: 180px;
    height: auto;
    float: left;
    padding: 0 20px 20px 0;
  }
}
</style>
