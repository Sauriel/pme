<template>
  <canvas
    ref="canvas"
    :width="canvasWidth"
    :height="canvasHeight"
    @mousedown="onmousedown"
    @mousemove="onmousemove"
    @mouseup="onmouseup"
  ></canvas>
</template>

<script setup lang="ts">
import { ref, onMounted, effect } from 'vue';
import type { TileConfig } from "../types/types";
// type Props = {
//   value: string;
// }

// type Emits = {
//   (e: 'update', payload: string): void;
// }

// const props = defineProps<Props>();
// const emit = defineEmits<Emits>();

const { initCanvas, drawTiles } = useCanvas();

const canvas = ref<HTMLCanvasElement>();
const width = ref<number>(30);
const height = ref<number>(20);
const tiles = ref<TileConfig[]>([]);
const currentTileFace = ref<HTMLImageElement | null>(null);
const isDrawing = ref<boolean>(false);

const canvasWidth = computed<number>(() => 48 * width.value);
const canvasHeight = computed<number>(() => 48 * height.value);

onMounted(() => {
  if (!currentTileFace.value) {
    currentTileFace.value = new Image();
    currentTileFace.value.src = '/tilemaps/winlu/Fantasy_Outside_A2.png'
    currentTileFace.value.addEventListener('load', () => console.log('tile face loaded'));
  }
  initCanvas(canvas.value!);
  for (let y = 0; y < height.value; y++) {
    for (let x = 0; x < width.value; x++) {
      tiles.value.push({ x, y, face: null });
    }
  }
});

effect(() => {
  drawTiles(tiles.value);
});

function drawOnMousePosition(event: MouseEvent) {
  const mouseX = event.offsetX;
  const mouseY = event.offsetY;
  const x = Math.floor(mouseX / 48);
  const y = Math.floor(mouseY / 48);
  const tile = tiles.value.find((tile) => tile.x === x && tile.y === y);
  if (tile) {
    // tile.color = 'red';
    tile.face = {
      tilemap: currentTileFace.value!,
      x: 0,
      y: 0,
    }
  }
}

function onmousedown(event: MouseEvent) {
  isDrawing.value = true;
}

function onmousemove(event: MouseEvent) {
  if (isDrawing.value) {
    drawOnMousePosition(event);
  }
}

function onmouseup(event: MouseEvent) {
  isDrawing.value = false;
}
</script>

<style scoped>
/* ToDo: Add style content */
</style>