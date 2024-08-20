<template>
  <main class="content">
    <h1 class="content__title"><AnimatedText :text="title" :time="500"/></h1>
    <slot />
  </main>
</template>

<script setup lang="ts">
import AnimatedText from '../components/AnimatedText.vue';

defineProps<{
  title: string;
}>();
</script>

<style lang="scss">
.content {
  &__title {
    margin-top: 0;
  }
}
</style>
