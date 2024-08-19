<template>
  <footer>
    <p>&copy; {{ year }} Michał Koczkodon</p>
  </footer>
</template>

<script setup lang="ts">
const year = new Date().getFullYear();
</script>

<style lang="scss">
footer {
  font-size: 12px;
}
</style>
