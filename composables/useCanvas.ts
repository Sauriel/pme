import { drawGridCell } from "~/helper/canvas";
import type { TileConfig } from "~/types/types";

export function useCanvas() {
  let context: CanvasRenderingContext2D ;

  function initCanvas(canvas: HTMLCanvasElement) {
    context = canvas.getContext('2d')!;
  }

  function drawTiles(tiles: TileConfig[], frame = 0) {
    tiles.forEach(tile => {
      const hasFace = !!tile.face;
      const tileSize = 48;
      const x1 = tile.x * tileSize;
      const y1 = tile.y * tileSize;

      drawGridCell(context, tileSize, x1, y1);
      if (hasFace) {
        const faceX = tile.face!.x * tileSize;
        const faceY = tile.face!.y * tileSize;
        const image = tile.face!.tilemap;
        context!.drawImage(image, faceX, faceY, tileSize, tileSize, x1, y1, tileSize, tileSize);
      } else if (tile.tile) {
        tile.tile.tilemap.draw(context!, tile.tile.tile, x1, y1, frame);
      }
    });
  }
  return {
    initCanvas,
    drawTiles
  };
}