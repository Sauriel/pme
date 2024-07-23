import { BaseTilemap, MapTile } from './tile/type';

export type TilemapFace = {
  tilemap: HTMLImageElement;
  x: number;
  y: number;
}

export type TileConfig = {
  x: number;
  y: number;
  face: TilemapFace | null;
  tile?: TileFace | null;
}

export type TileEvent = {
  x: number;
  y: number;
  originalEvent: MouseEvent;
}

export type TileProps = {
  tileConfig: TileConfig;
}

export type TileFace = {
  tilemap: BaseTilemap;
  tile: MapTile;
}