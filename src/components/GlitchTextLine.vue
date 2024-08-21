<template>
  <span
    class="glitch-text"
    :data-text="text"
    :style="style"
  >{{ text }}</span>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref, watch } from 'vue'
import { sleep } from '@/helpers/helpers'

const props = defineProps<{
  text: string,
  interval?: number
}>()

const randomPos = () => ((Math.random() * 5) * (Math.random() > 0.5 ? 1 : -1))
const randomOpacity = () => Math.random()
const randomCssVars = () => {
	let styleVarsString = `--text-original-pos-x: ${randomPos()}px;`
  styleVarsString += `--text-original-pos-y: ${randomPos()}px;`
  styleVarsString += `--text-before-pos-x: ${randomPos()}px;`
  styleVarsString += `--text-before-pos-y: ${randomPos()}px;`
  styleVarsString += `--text-after-pos-x: ${randomPos()}px;`
  styleVarsString += `--text-after-pos-y: ${randomPos()}px;`
  styleVarsString += `--text-before-opacity: ${randomOpacity()};`
  styleVarsString += `--text-after-opacity: ${randomOpacity()};`
  return styleVarsString
}

const style = ref('')

const glitch = async () => {
  style.value = randomCssVars()
  await sleep(100)
  style.value = randomCssVars()
  await sleep(100)
  style.value = randomCssVars()
  await sleep(100)
  style.value = ''
}

let intervalFunction: ReturnType<typeof setInterval> | null = null

onMounted(() => {
  if (props.interval) {
    intervalFunction = setInterval(glitch, props.interval)
  }
})

onBeforeUnmount(() => {
  if (intervalFunction) {
    clearInterval(intervalFunction)
    intervalFunction = null
  }
})

watch(() => props.interval, (newInterval) => {
  if (intervalFunction) {
    clearInterval(intervalFunction)
    intervalFunction = null
  }

  if (newInterval) {
    intervalFunction = setInterval(glitch, newInterval)
  }
})

defineExpose({
  glitch
})
</script>

<style lang="scss">
.glitch-text {
  display: inline-block;
  position: relative;
  transform: translate(var(--text-original-pos-x), 0);
  
  &::before,
  &::after {
    content: attr(data-text);
    box-sizing: border-box;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  
  &::before {
    color: red;
    opacity: var(--text-before-opacity, 0);
    transform: translate(var(--text-before-pos-x), var(--text-before-pos-y));
  }
  
  &::after {
    color: green;
    opacity: var(--text-after-opacity, 0);
    transform: translate(var(--text-after-pos-x), var(--text-after-pos-y));
  }
}
</style>
