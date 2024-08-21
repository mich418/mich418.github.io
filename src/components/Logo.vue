<template>
  <div
    class="logo"
    ref="element"
  >
    <div class="logo__lines">
      <GlitchTextLine
        v-for="line in logo"
        ref="lines"
        class="logo__line"
        :text="line"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { logo } from '@/variables/variables'
import { setDynamicGlobalCSSVar } from '@/helpers/helpers'
import GlitchTextLine from '@/components/GlitchTextLine.vue'

const element = ref<HTMLElement | null>(null)
const lines = ref<typeof GlitchTextLine[]>([])

const calculateVars = () => {
  if (!element.value) return
  const newValue = element.value.getBoundingClientRect().width * 0.0287
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

  &__line {
    display: block;
  }
}
</style>
