<script lang="ts">
  import { Layer, type Render } from 'svelte-canvas';
	import type { LayerProps } from './svelte-canvas';
	import type { TileProps } from './types';

  let { tileConfig }: TileProps = $props();

  let color = $state<string | null>(tileConfig.color);

  let render = $derived.by<Render>(() => {
    const hasColor =  !!color;
    const tileColor = hasColor ? color! : 'black';
    return (props: LayerProps) => {
      const { context } = props;
      const tileSize = 48;
      const x1 = tileConfig.x * tileSize;
      const y1 = tileConfig.y * tileSize;
      context.fillStyle = tileColor;
      context.fillRect(x1, y1, tileSize, tileSize);

      if (!hasColor) {
        const lineWidth = 1;
        context.fillStyle = 'white';
        context.fillRect(x1 + lineWidth, y1 + lineWidth, tileSize - (2 * lineWidth), tileSize - (2 * lineWidth));
      }
    };
  });

  $effect(() => {
    console.log(`color changed to "${color}"`);
  })

  function onmouseenter() {
    document.body.style.cursor = 'pointer';
    // console.log(`mouse enter x: ${tileConfig.x} / y: ${tileConfig.y}`)
    color = 'red';
  }

  function onmouseleave() {
    document.body.style.cursor = 'auto';
    color = null;
  }
</script>

<Layer {render} on:mouseenter={onmouseenter} on:mouseleave={onmouseleave} />