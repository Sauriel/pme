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
import type { TileConfig, TileFace } from "../types/types";
import { A1AnimatedAutoTilemap } from '~/types/tile/A1AnimatedAutoTile';
import type { MapTile } from '~/types/tile/type';
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
      const tile: MapTile = {
        continueBottom: false,
        continueLeft: false,
        continueRight: false,
        continueTop: false,
      };
      tiles.value.push({ x: 0, y: 0, face: null, tile: { tilemap: new A1AnimatedAutoTilemap(a1Tile.value!, 0, 0), tile }});
      tiles.value.push({ x: 1, y: 0, face: null, tile: { tilemap: new A1AnimatedAutoTilemap(a1Tile.value!, 48 * 8, 0), tile }});
      tiles.value.push({ x: 2, y: 0, face: null, tile: { tilemap: new A1AnimatedAutoTilemap(a1Tile.value!, 0, 48 * 3), tile }});
      tiles.value.push({ x: 3, y: 0, face: null, tile: { tilemap: new A1AnimatedAutoTilemap(a1Tile.value!, 48 * 8, 48 * 3), tile }});
      tiles.value.push({ x: 4, y: 0, face: null, tile: { tilemap: new A1AnimatedAutoTilemap(a1Tile.value!, 0, 48 * 6), tile }});
      tiles.value.push({ x: 5, y: 0, face: null, tile: { tilemap: new A1AnimatedAutoTilemap(a1Tile.value!, 48 * 8, 48 * 6), tile }});
      tiles.value.push({ x: 6, y: 0, face: null, tile: { tilemap: new A1AnimatedAutoTilemap(a1Tile.value!, 0, 48 * 9), tile }});
      tiles.value.push({ x: 7, y: 0, face: null, tile: { tilemap: new A1AnimatedAutoTilemap(a1Tile.value!, 48 * 8, 48 * 9), tile }});
      const FPS = 5;
      let frame = 0;
      setInterval(() => drawTiles(tiles.value, frame++), 1000 / FPS);
    });
  }
});
</script>

<style scoped>
#tilemap {
  grid-area: tilemap;
}
</style>