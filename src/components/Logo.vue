<template>
  <div
    class="logo"
    ref="element"
  >
    <div class="logo__lines">
      <img
        v-if="isXmasTime"
        :src="santaHat"
        class="logo__santa-hat"
      />
      <GlitchTextLine
        v-for="line in logo.lines"
        ref="lines"
        class="logo__line"
        :text="line"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import type { LogoASCII } from '@/types'
import santaHat from '@/assets/santa_hat.png'
import { logoMIHAUCO, logoMICHALDEV } from '@/variables/variables'
import { setDynamicGlobalCSSVar } from '@/helpers/helpers'
import GlitchTextLine from '@/components/GlitchTextLine.vue'
import { useXmas } from '@/composables/xmas'

const element = ref<HTMLElement | null>(null)
const lines = ref<typeof GlitchTextLine[]>([])
const { isXmasTime } = useXmas()

const logo: LogoASCII = logoMICHALDEV

const calculateVars = () => {
  if (!element.value) return
  const newValue = element.value.getBoundingClientRect().width * (logo.fontSize / logo.width)
  setDynamicGlobalCSSVar('logo-font-size', `${newValue > 10 ? 10 : newValue}px`)

  setTimeout(() => {
    if (!element.value) return
    setDynamicGlobalCSSVar('logo-height', `${element.value.getBoundingClientRect().height}px`)
  }, 100);
}

window.addEventListener('resize', () => {
  calculateVars()
})

let interval: ReturnType<typeof setInterval> | null = null

onMounted(() => {
  calculateVars()

  interval = setInterval(() => {
    const randomLineIndex = Math.floor(Math.random() * lines.value.length)
    lines.value[randomLineIndex].glitch()
  }, 3000)
})

onBeforeUnmount(() => {
  if (interval) {
    clearInterval(interval)
    interval = null
  }
})
</script>

<style lang="scss">
.logo {
  font-size: var(--logo-font-size, 10px);
  color: var(--font-color-primary);

  &__lines {
    position: relative;
  }

  &__santa-hat {
    position: absolute;
    top: -23%;
    left: -5%;
    z-index: 100;
    height: auto;
    width: 10%;
    image-rendering: pixelated;
  }
}
</style>
