<template>
  <component
    :is="tag"
    :href="href"
    :target="target"
    class="button pixelated-border"
    @click="onClick"
    @mouseenter="onMouseEnter"
  >
    <GlitchTextLine
      ref="label"
      class="button__label"
      :text="props.text"
    />
  </component>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import GlitchTextLine from './GlitchTextLine.vue';

const props = defineProps<{
  href?: string;
  disabled?: boolean;
  target?: '_blank' | '_self' | '_parent' | '_top';
  text: string;
}>()

const label = ref<typeof GlitchTextLine | null>(null);

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

const onMouseEnter = () => {
  if (props.disabled) return
  if (label.value) label.value.glitch()
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
