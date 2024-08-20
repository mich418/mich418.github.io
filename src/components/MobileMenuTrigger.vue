<template>
  <div class="mobile-menu-trigger">
    <div
      class="mobile-menu-trigger__icon"
      :class="{ 'mobile-menu-trigger__icon--active': isActive }"
      @click="emit('click')"
    />
  </div>
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
  width: var(--burger-menu-button-size);
  height: var(--burger-menu-button-size);

  &__icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 3px;
    border-radius: 3px;
    background-color: var(--burger-menu-button-color);

    &::before,
    &::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 3px;
      border-radius: 3px;
      background-color: var(--burger-menu-button-color);
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
}
</style>
