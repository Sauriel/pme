import type { TileConfig } from "~/types/types";

export function useCanvas() {
  let context;

  function initCanvas(canvas: HTMLCanvasElement) {
    context = canvas.getContext('2d')!;
  }

  function drawTiles(tiles: TileConfig[]) {
    tiles.forEach(tile => {
      const hasFace = !!tile.face;
      const tileSize = 48;
      const x1 = tile.x * tileSize;
      const y1 = tile.y * tileSize;

      if (hasFace) {
        const faceX = tile.face!.x * tileSize;
        const faceY = tile.face!.y * tileSize;
        const image = tile.face!.tilemap;
        context!.drawImage(image, faceX, faceY, tileSize, tileSize, x1, y1, tileSize, tileSize);
      } else {
        // grid checker bg
        const checkerFraction = 4;
        const checkerSize = tileSize / checkerFraction;
        for (let x = 0; x < checkerFraction; x++) {
          for (let y = 0; y < checkerFraction; y++) {
            const isWhite = ((x + y) % 2) === 0;
            context!.fillStyle = isWhite ? '#FFF' : '#DDD';
            const cx = x1 + (checkerSize * x);
            const cy = y1 + (checkerSize * y);
            context!.fillRect(cx, cy, checkerSize, checkerSize);
          }
        }

        // grid
        context!.fillStyle = '#AAA';
        context!.fillRect(x1, y1, tileSize, 1);
        context!.fillRect(x1, y1 + (tileSize - 1), tileSize, 1);
        context!.fillRect(x1, y1, 1, tileSize);
        context!.fillRect(x1 + (tileSize - 1), y1, 1, tileSize);

      }
    });
  }
  return {
    initCanvas,
    drawTiles
  };
}