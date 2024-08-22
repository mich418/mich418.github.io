<template>
  <span>
    {{ dynamicText }}
  </span>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'

const props = withDefaults(
  defineProps<{
    text: string;
    time?: number;
  }>(),
  {
    time: 1000
  }
)

const regenerateText = (originalString: string) => {
  if (originalString.length === doNotReplaceIndexes.length) return originalString

  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  return Array.from(originalString, (originalChar, index) => {
   return doNotReplaceIndexes.includes(index) ? originalChar : characters.charAt(Math.floor(Math.random() * characters.length))
  }).join('')
}

let doNotReplaceIndexes: number[] = []
let doNotPeplaceIndexesParts: number[][] = []
let timeoutCount = 0
let currentTimeout: number | null = null

const dynamicText = ref(regenerateText(props.text))

const calculateInitialAnimationValues = () => {
  doNotReplaceIndexes = []
  timeoutCount = Math.floor(props.time / 50)

  const indexes = Array.from({length: props.text.length}, (_, index) => index)
  const partsCount = indexes.length > timeoutCount ? timeoutCount : indexes.length
  const indexesPerPart = Math.floor(indexes.length / partsCount)

  if (indexes.length > timeoutCount) {
    while (indexes.length) {
      if (doNotPeplaceIndexesParts.length === partsCount) {
        doNotPeplaceIndexesParts[doNotPeplaceIndexesParts.length - 1].push(...indexes)
        break
      }

      const part: number[] = []

      for (let i = 0; i < indexesPerPart; i++) {
        const randomIndex = Math.floor(Math.random() * indexes.length)
        part.push(...indexes.splice(randomIndex, 1))
      }

      doNotPeplaceIndexesParts.push(part)
    }
  } else {
    doNotPeplaceIndexesParts = indexes.map(index => [index])
  }
}

const animate = () => {
  if (doNotPeplaceIndexesParts.length > 0 && timeoutCount === doNotPeplaceIndexesParts.length) {
    const part = doNotPeplaceIndexesParts.shift()

    if (part) {
      doNotReplaceIndexes.push(...part)
    }
  }

  timeoutCount--
  dynamicText.value = regenerateText(props.text)
  
  if (timeoutCount > 0) {
    currentTimeout = setTimeout(animate, 50)
  } else {
    currentTimeout = null
  }
}

const startAnimation = () => {
  if (currentTimeout) {
    clearTimeout(currentTimeout)
  }
  calculateInitialAnimationValues()
  animate()
}

watch(
  () => props.text,
  () => {
    dynamicText.value = regenerateText(props.text)
    startAnimation()
  }
)

onMounted(() => {
  startAnimation()
})
</script>
