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

export type Tile = {
  x: number;
  y: number;

}

export type BleedingTile = {
  center: Tile;
  topLeft: Tile;
  top: Tile;
  topRight: Tile;
  right: Tile;
  bottomRight: Tile;
  bottom: Tile;
  bottomLeft: Tile;
  left: Tile;
}

export interface BaseTilemap {
  draw(context: CanvasRenderingContext2D, tile: MapTile, x: number, y: number, frame: number);
}