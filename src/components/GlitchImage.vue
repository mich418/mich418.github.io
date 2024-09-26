<template>
  <div
    class="glitch-image"
    :style="cssVars"
  >
    <div
      class="glitch-image__wrapper"
      ref="wrapper"
    >
      <img
        class="glitch-image__image"
        @load="imageOnLoadHandler"
        :src="imageSrc"
      />
      <div
        v-for="(line, index) in lines"
        class="glitch-image__line"
        :class="{ 'glitch-image__line--glitch': glitchLineIndex === index }"
        :style="{
          top: `${line.linePosY}px`,
          height: `${lineHeight}px`,
        }"
      >
        <div
          v-for="i in 3"
          class="glitch-image__subline"
          :style="{
            backgroundImage: `url(${imageSrc})`,
            backgroundPosition: `0 ${line.bgPosY}px`,
          }"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref, onBeforeUnmount } from 'vue'
  import { sleep } from '@/helpers/helpers';

  const props = withDefaults(
    defineProps<{
      imageSrc: string,
      lineHeight?: number,
    }>(),
    {
      lineHeight: 20,
    }
  )

  const wrapper = ref<HTMLElement | null>(null)
  const lines = ref<{linePosY: number, bgPosY: number}[]>([])
  const cssVars = ref('')
  const glitchLineIndex = ref(-1)

  const imageOnLoadHandler = () => {
    setTimeout(() => {
      if (!wrapper.value) return
      const { width, height } = wrapper.value.getBoundingClientRect()
      const linesCount = Math.ceil(height / props.lineHeight)

      for (let i = 0; i < linesCount; i++) {
        lines.value.push({
          linePosY: i * props.lineHeight,
          bgPosY: -1 * i * props.lineHeight
        })
      }

      runGlitchInterval()
    }, 100)
  }

  const randomPos = () => ((Math.random() * 5) * (Math.random() > 0.5 ? 1 : -1))
  const randomDeg = () => Math.floor(Math.random() * 360)
  const randomCssVars = () => {
    let styleVarsString = `--image-subline-1-pos-x: ${randomPos()}px;`
    styleVarsString += `--image-subline-1-pos-y: ${randomPos()}px;`
    styleVarsString += `--image-subline-2-pos-x: ${randomPos()}px;`
    styleVarsString += `--image-subline-2-pos-y: ${randomPos()}px;`
    styleVarsString += `--image-subline-3-pos-x: ${randomPos()}px;`
    styleVarsString += `--image-subline-3-pos-y: ${randomPos()}px;`
    styleVarsString += `--image-subline-1-filter: hue-rotate(${randomDeg()}deg);`
    styleVarsString += `--image-subline-2-filter: hue-rotate(${randomDeg()}deg);`
    styleVarsString += `--image-subline-3-filter: hue-rotate(${randomDeg()}deg);`
    return styleVarsString
  }

  const getRandomLineIndex = () => Math.floor(Math.random() * lines.value.length)

  const glitchLine = async () => {
    glitchLineIndex.value = getRandomLineIndex()
    cssVars.value = randomCssVars()
    await sleep(100)
    cssVars.value = randomCssVars()
    await sleep(100)
    cssVars.value = randomCssVars()
    await sleep(100)
    cssVars.value = ''
    glitchLineIndex.value = -1
  }

  let intervalFunction: ReturnType<typeof setInterval> | null = null

  const runGlitchInterval = () => {
    intervalFunction = setInterval(glitchLine, 5000)
  }

  onBeforeUnmount(() => {
    if (intervalFunction) {
      clearInterval(intervalFunction)
      intervalFunction = null
    }
  })
</script>

<style lang="scss">
.glitch-image {
  &__wrapper {
    position: relative;
  }
  
  &__image {
    display: block;
    width: 100%;
    height: auto;
  }

  &__line {
    position: absolute;
    width: 100%;
    left: 0;

    &--glitch {
      .glitch-image__subline {
        &:nth-child(1) {
          transform: translate(var(--image-subline-1-pos-x), var(--image-subline-1-pos-y));
          filter: var(--image-subline-1-filter);
        }

        &:nth-child(2) {
          transform: translate(var(--image-subline-2-pos-x), var(--image-subline-2-pos-y));
          filter: var(--image-subline-2-filter);
        }

        &:nth-child(3) {
          transform: translate(var(--image-subline-3-pos-x), var(--image-subline-3-pos-y));
          filter: var(--image-subline-3-filter);
        }
      }
    }
  }

  &__subline {
    position: absolute;
    width: 100%;
    height: 100%;
    background-size: 100% auto;
    left: 0;
  }
}
</style>

