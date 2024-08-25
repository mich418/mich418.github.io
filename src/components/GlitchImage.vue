<template>
  <div
    class="glitch-image"
    ref="wrapper"
  >
    <img
      class="glitch-image__image"
      @load="imageOnLoadHandler"
      :src="imageSrc"
    />
    <div
      v-for="line in lines"
      class="glitch-image__lines"
      :style="{
        backgroundImage: `url(${imageSrc})`,
        backgroundPosition: `0 ${line.bgPosY}px`
      }"
    >
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'

  const props = withDefaults(
    defineProps<{
      imageSrc: string,
      lineHeight?: number,
    }>(),
    {
      lineHeight: 5,
    }
  )

  const wrapper = ref<HTMLElement | null>(null)

  const lines = ref<{bgPosY}[]>([])

  const imageOnLoadHandler = () => {
    setTimeout(() => {
      if (!wrapper.value) return
      const { width, height } = wrapper.value.getBoundingClientRect()
      const linesCount = Math.ceil(height / props.lineHeight)

      for (let i = 0; i < linesCount; i++) {
        lines.value.push({
          bgPosY: -1 * i * props.lineHeight
        })
      }
    }, 100)
  }
</script>

<style lang="scss">
.glitch-image {
  overflow: hidden;
  
  &__image {
    display: block;
    width: 100%;
    height: auto;
  };
}
</style>

