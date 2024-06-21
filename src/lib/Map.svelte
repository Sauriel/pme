<script lang="ts">
  import { Canvas } from 'svelte-canvas';
  import Tile from '$lib/Tile.svelte';
	import type { TileConfig, TileEvent } from './types';

  let width = $state<number>(30);
  let height = $state<number>(20);

  let tiles = $derived.by<TileConfig[]>(() => {
    const list: TileConfig[] = [];
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        list.push({ x, y, color: null });
      }
    }
    return list;
  });
</script>

<Canvas width={48 * width} height={48 * height} layerEvents>
  {#each tiles as tileConfig}
    <Tile {tileConfig} />
  {/each}
</Canvas>