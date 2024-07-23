<template>
  <div id="tilemap">
    <canvas
      ref="canvas"
      :width="canvasWidth"
      :height="canvasHeight"
    ></canvas>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import type { TileConfig, TilemapFace } from "../types/types";
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
const width = ref<number>(8);
const height = ref<number>(4);
const tiles = ref<TileConfig[]>([]);
const a1Tile = ref<HTMLImageElement | null>(null);

const canvasWidth = computed<number>(() => 48 * width.value);
const canvasHeight = computed<number>(() => 48 * height.value);

onMounted(() => {
  initCanvas(canvas.value!);
  if (!a1Tile.value) {
    a1Tile.value = new Image();
    a1Tile.value.src = '/tilemaps/winlu/Fantasy_Outside_A1.png'
    a1Tile.value.addEventListener('load', () => {
      for (let y = 0; y < height.value; y++) {
        for (let x = 0; x < width.value; x++) {
          const face: TilemapFace = {
            tilemap: a1Tile.value!,
            x: x * 2,
            y: y * 3,
          };
          const tile: TileConfig = { x, y, face };
          tiles.value.push(tile);
        }
      }
      drawTiles(tiles.value);
    });
  }
});
</script>

<style scoped>
#tilemap {
  grid-area: tilemap;
}
</style>