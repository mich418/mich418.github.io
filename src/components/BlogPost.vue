<template>
  <article class="blog-post">
    <h2 class="blog-post__title">{{ title }}</h2>
    <p class="blog-post__lead">{{ lead }}</p>
    <div class="blog-post__actions">
      <Button
        class="blog-post__link"
        :href="url"
        target="_blank"
        :text="t('blogPost.readArticle') "
      />
    </div>
  </article>
</template>

<script setup lang="ts">
import Button from '@/components/Button.vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const props = defineProps<{
  title: string;
  lead: string;
  url: string;
}>()
</script>

<style lang="scss">
.blog-post {
  &__title {
    font-size: 18px;
    margin: 0 0 20px
  }

  &__lead {
    margin: 0 0 23px
  }

  &__actions {
    display: flex;
    justify-content: space-between;
  }
}
</style>
