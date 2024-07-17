import type { TileConfig } from "./types";

export function useCanvas(canvas: HTMLCanvasElement) {
  const context = canvas.getContext('2d')!;

  function drawTiles(tiles: TileConfig[]) {
    tiles.forEach(tile => {
      const hasColor =  !!tile.color;
      const tileColor = hasColor ? tile.color! : 'black';
      const tileSize = 48;
      const x1 = tile.x * tileSize;
      const y1 = tile.y * tileSize;
      context.fillStyle = tileColor;
      context.fillRect(x1, y1, tileSize, tileSize);

      if (!hasColor) {
        const lineWidth = 1;
        context.fillStyle = 'white';
        context.fillRect(x1 + lineWidth, y1 + lineWidth, tileSize - (2 * lineWidth), tileSize - (2 * lineWidth));
      }
    });
  }
  return {
    drawTiles
  };
}