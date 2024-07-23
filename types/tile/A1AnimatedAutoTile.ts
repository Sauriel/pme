import type { BaseTile, MapTile } from "./type";

export class A1AnimatedAutoTile implements BaseTile {
  constructor(private readonly image: HTMLImageElement, private readonly x1: number, private readonly y1: number) {}

  draw(context: CanvasRenderingContext2D, tile: MapTile, x: number, y: number, frame: number) {
    //
  }
}