<template>
  <div class="logo" v-html="text">
    
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { logo } from '@/variables/variables'

const text = ref(logo.join('<br>'))
</script>

<style lang="scss">
.logo {
  font-size: 10px;
  color: var(--font-color-primary);
}
</style>
