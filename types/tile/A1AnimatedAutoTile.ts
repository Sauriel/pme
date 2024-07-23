import type { BaseTilemap, MapTile } from "./type";

export class A1AnimatedAutoTilemap implements BaseTilemap {
  private halfTileSize = 24;

  constructor(private readonly image: HTMLImageElement, private readonly x1: number, private readonly y1: number) { }

  draw(context: CanvasRenderingContext2D, tile: MapTile, x: number, y: number, frame: number) {
    this.drawTopLeft(context, tile, x, y, frame);
    this.drawTopRight(context, tile, x, y, frame);
    this.drawBottomRight(context, tile, x, y, frame);
    this.drawBottomLeft(context, tile, x, y, frame);
  }

  drawTopLeft(context: CanvasRenderingContext2D, tile: MapTile, x: number, y: number, frame: number) {
    const animateXMargin = (this.halfTileSize * 4) * (frame % 3);
    let imageX;
    let imageY;

    let mapX = x;
    let mapY = y;
    if (!tile.continueTop && !tile.continueLeft) {
      imageX = this.x1 + animateXMargin;
      imageY = this.y1 + (2 * this.halfTileSize);
    } else {
      imageX = 0; // ToDo: all other ifs and else
      imageY = 0; // ToDo: all other ifs and else
    }
    context.drawImage(this.image, imageX, imageY, this.halfTileSize, this.halfTileSize, mapX, mapY, this.halfTileSize, this.halfTileSize);
  }

  drawTopRight(context: CanvasRenderingContext2D, tile: MapTile, x: number, y: number, frame: number) {
    const animateXMargin = (this.halfTileSize * 4) * (frame % 3);
    let imageX;
    let imageY;

    let mapX = x + this.halfTileSize;
    let mapY = y;
    if (!tile.continueTop && !tile.continueRight) {
      imageX = this.x1 + animateXMargin + (3 * this.halfTileSize);
      imageY = this.y1 + (2 * this.halfTileSize);
    } else {
      imageX = 0; // ToDo: all other ifs and else
      imageY = 0; // ToDo: all other ifs and else
    }
    context.drawImage(this.image, imageX, imageY, this.halfTileSize, this.halfTileSize, mapX, mapY, this.halfTileSize, this.halfTileSize);
  }

  drawBottomRight(context: CanvasRenderingContext2D, tile: MapTile, x: number, y: number, frame: number) {
    const animateXMargin = (this.halfTileSize * 4) * (frame % 3);
    let imageX;
    let imageY;

    let mapX = x + this.halfTileSize;
    let mapY = y + this.halfTileSize;
    if (!tile.continueBottom && !tile.continueRight) {
      imageX = this.x1 + animateXMargin + (3 * this.halfTileSize);
      imageY = this.y1 + (5 * this.halfTileSize);
    } else {
      imageX = 0; // ToDo: all other ifs and else
      imageY = 0; // ToDo: all other ifs and else
    }
    context.drawImage(this.image, imageX, imageY, this.halfTileSize, this.halfTileSize, mapX, mapY, this.halfTileSize, this.halfTileSize);
  }

  drawBottomLeft(context: CanvasRenderingContext2D, tile: MapTile, x: number, y: number, frame: number) {
    const animateXMargin = (this.halfTileSize * 4) * (frame % 3);
    let imageX;
    let imageY;

    let mapX = x;
    let mapY = y + this.halfTileSize;
    if (!tile.continueBottom && !tile.continueLeft) {
      imageX = this.x1 + animateXMargin;
      imageY = this.y1 + (5 * this.halfTileSize);
    } else {
      imageX = 0; // ToDo: all other ifs and else
      imageY = 0; // ToDo: all other ifs and else
    }
    context.drawImage(this.image, imageX, imageY , this.halfTileSize, this.halfTileSize, mapX, mapY, this.halfTileSize, this.halfTileSize);
  }
}