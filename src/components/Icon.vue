<template>
  <span class="icon">
    <component
      v-if="icon"
      :is="icon"
    />
  </span>
</template>

<script setup lang="ts">
import { defineProps, computed } from 'vue'
import Github from '@/icons/github.svg'
import Linkedin from '@/icons/linkedin.svg'
import Twitter from '@/icons/twitter.svg'

const props = defineProps<{
  name: string
}>()

const icon = computed(() => {
  switch (props.name) {
    case 'github':
      return Github
    case 'linkedin':
      return Linkedin
    case 'twitter':
      return Twitter
    default:
      return null
  }
})
</script>

<style lang="scss">
.icon {
  display: inline-block;

  svg {
    fill: currentColor;
  }
}
</style>
