<template>
  <component
    :is="tag"
    :href="href"
    :target="target"
    class="button pixelated-border"
    @click="onClick"
    @mouseenter="onMouseEnter"
  >
    <Icon
      v-if="props.icon"
      class="button__icon"
      :name="props.icon"
    />
    <GlitchTextLine
      ref="label"
      class="button__label"
      :text="props.text"
    />
  </component>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import Icon from '@/components/Icon.vue';
import GlitchTextLine from '@/components/GlitchTextLine.vue';

const props = defineProps<{
  href?: string;
  disabled?: boolean;
  target?: '_blank' | '_self' | '_parent' | '_top';
  text: string;
  icon?: string;
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
  border: none;
  font-family: var(--font-family);

  &:hover,
  &:visited {
    color: var(--button-primary-font-color);
    text-decoration: none;
  }

  &:active {
    transform: translateY(3px);
  }

  &:has(.button__icon) {
    padding-left: calc(var(--button-height));
  }

  &__icon {
    width: calc(var(--button-height) - 8px);
    height: calc(var(--button-height) - 8px);
    position: absolute;
    left: 2px;
    top: 2px;
  }

  &__label {
    position: relative;
    z-index: 2;
  }
}
</style>
