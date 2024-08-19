<template>
  <header>
    <Logo/>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { generateRandomString } from '../helpers/helpers';
import Logo from '../components/Logo.vue';

const code = ref(generateRandomString(168));
</script>

<style lang="scss">
header {
  .random-chars {
    margin-top: 1px;
    font-size: 12px;
    line-height: 18px;
    word-break: break-all;
    color: var(--font-color-disabled);
    
    div {
      margin-bottom: 4px;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }
}
</style>
