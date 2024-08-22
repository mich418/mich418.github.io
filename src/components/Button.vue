<template>
  <component
    :is="tag"
    :href="href"
    :target="target"
    class="button pixelated-border"
    @click="onClick"
  >
    <span class="button__label">
      <slot></slot>
    </span>
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  href?: string;
  disabled?: boolean;
  target?: '_blank' | '_self' | '_parent' | '_top';
}>()

const emit = defineEmits<{
  click: [MouseEvent];
}>()

const tag = computed(() => props.href ? 'a' : 'button');

const onClick = (event: MouseEvent) => {
  if (props.disabled) {
    event.preventDefault()
    return
  }

  emit('click', event)
}
</script>

<style lang="scss">
.button {
  --pixelated-border-color: var(--button-primary-border-color);
  display: inline-block;
  height: calc(var(--button-height) - 4px);
  line-height: calc(var(--button-height) - 4px);
  position: relative;
  color: var(--button-primary-font-color);
  padding: 0 calc(var(--button-height) / 3);
  text-decoration: none;
  background-color: var(--button-primary-background-color);
  cursor: pointer;

  &:hover,
  &:visited {
    color: var(--button-primary-font-color);
    text-decoration: none;
  }

  &:active {
    transform: translateY(3px);
  }

  &__label {
    position: relative;
    z-index: 2;
  }
}
</style>
