export type MapTile = {
  continueLeft: boolean;
  continueTopLeft?: boolean;
  continueTop: boolean;
  continueTopRight?: boolean;
  continueRight: boolean;
  continueBottomRight?: boolean;
  continueBottom: boolean;
  continueBottomLeft?: boolean;
}

export interface BaseTilemap {
  draw(context: CanvasRenderingContext2D, tile: MapTile, x: number, y: number, frame: number);
}