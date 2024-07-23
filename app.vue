<template>
  <div id="app">
    <Menu />
    <Tilemap />
    <MapEditor />
  </div>
</template>

<script setup lang="ts">
import '~/assets/css/global.css';
</script>

<style scoped>
#app {
  --tilemap-width: calc(8 * 48px);
  display: grid;
  grid-template-areas:
      "menu menu"
      "tilemap mapeditor";
  grid-template-columns: var(--tilemap-width) 1fr;
  grid-template-rows: 2rem 1fr;
  gap: 4px;
  width: 100vw;
  height: 100vh;
}
</style>