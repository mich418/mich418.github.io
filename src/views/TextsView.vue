<template>
  <Content :title="t('contentTitles.texts')">
    <div class="texts">
      <BlogPost
        v-for="post in blogPosts"
        class="texts__blog-post"
        :title="post.title[locale]"
        :lead="post.lead[locale]"
        :url="post.url"
      />
    </div>
  </Content>
</template>

<script setup lang="ts">
import type { WritableComputedRef } from 'vue';
import Content from '@/components/Content.vue';
import BlogPost from '@/components/BlogPost.vue';
import { useI18n } from 'vue-i18n';
import blogPosts from '@/data/blog.json'

const { t } = useI18n();
const locale = useI18n().locale as WritableComputedRef<'en' | 'pl'>;
</script>

<style lang="scss">
.texts {
  &__blog-post {
    margin-bottom: 50px;
  }
}
</style>
