<script lang="ts">
	import { onMount } from 'svelte';
	import type { TileConfig } from './types';
	import { useCanvas } from './useCanvas';

  let canvas: HTMLCanvasElement;
  let onTilesChanged: (tiles: TileConfig[]) => void;

  let width = $state<number>(30);
  let height = $state<number>(20);
  let tiles = $state<TileConfig[]>([]);
  let currentTileFace: HTMLImageElement | null = null;

  onMount(() => {
    const { drawTiles } = useCanvas(canvas);
    onTilesChanged = drawTiles;
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        tiles.push({ x, y, face: null });
      }
    }
  })

  $effect(() => {
    onTilesChanged(tiles);
    currentTileFace = new Image();
    currentTileFace.src = '/tilemaps/winlu/Fantasy_Outside_A2.png'
    currentTileFace.addEventListener('load', () => console.log('tile face loaded'));
  })

  function drawOnMousePosition(event: MouseEvent) {
    const mouseX = event.offsetX;
    const mouseY = event.offsetY;
    const x = Math.floor(mouseX / 48);
    const y = Math.floor(mouseY / 48);
    const tile = tiles.find((tile) => tile.x === x && tile.y === y);
    if (tile) {
      // tile.color = 'red';
      tile.face = {
        tilemap: currentTileFace!,
        x: 0,
        y: 0,
      }
    }
  }

  let isDrawing = $state<boolean>(false);

  function onmousedown(event: MouseEvent) {
    isDrawing = true;
  }

  function onmousemove(event: MouseEvent) {
    if (isDrawing) {
      drawOnMousePosition(event);
    }
  }

  function onmouseup(event: MouseEvent) {
    isDrawing = false;
  }
</script>

<canvas
  bind:this={canvas}
  width={48 * width}
  height={48 * height}
  {onmousedown}
  {onmousemove}
  {onmouseup}
></canvas>