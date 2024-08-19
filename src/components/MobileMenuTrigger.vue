<template>
  <div
    class="mobile-menu-trigger"
    :class="{ 'mobile-menu-trigger--active': isActive }"
    @click="emit('click')"
  />
</template>

<script setup lang="ts">
const props = defineProps<{
  isActive?: boolean;
}>();

const emit = defineEmits(['click']);
</script>

<style lang="scss">
.mobile-menu-trigger {
  position: relative;
  width: 30px;
  height: 3px;
  border-radius: 3px;
  background-color: var(--burger-menu-color);

  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 30px;
    height: 3px;
    border-radius: 3px;
    background-color: var(--burger-menu-color);
    transform-origin: center left;
    transition: all .2s;
  }

  &::before {
    top: -10px;
  }

  &::after {
    top: 10px;
  }

  &--active {

    &::before {
      transform: rotate(45deg);
      width: 15px;
      top: -1px;
    }

    &::after {
      transform: rotate(-45deg);
      width: 15px;
      top: 1px;
    }
  }
}
</style>
