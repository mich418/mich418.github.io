<template>
  <main class="content">
    <h1><AnimatedText :text="title" :time="500"/></h1>
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

</style>
