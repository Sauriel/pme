<script lang="ts">
	import { onMount } from 'svelte';
	import type { TileConfig } from './types';
	import { useCanvas } from './useCanvas';

  let canvas: HTMLCanvasElement;
  let onTilesChanged: (tiles: TileConfig[]) => void;

  let width = $state<number>(30);
  let height = $state<number>(20);
  let tiles = $state<TileConfig[]>([]);

  onMount(() => {
    const { drawTiles } = useCanvas(canvas);
    onTilesChanged = drawTiles;
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        tiles.push({ x, y, color: null });
      }
    }
  })

  $effect(() => {
    onTilesChanged(tiles);
  })

  function onCanvasClick(event: MouseEvent) {
    const mouseX = event.offsetX;
    const mouseY = event.offsetY;
    const x = Math.floor(mouseX / 48);
    const y = Math.floor(mouseY / 48);
    const tile = tiles.find((tile) => tile.x === x && tile.y === y);
    if (tile) {
      if (!tile.color) {
        tile.color = 'red';
      } else {
        tile.color = null;
      }
    }
  }
</script>

<canvas width={48 * width} height={48 * height} bind:this={canvas} onclick={onCanvasClick}></canvas>