export function drawGridCell(context: CanvasRenderingContext2D, tileSize: number, x1: number, y1: number) {
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