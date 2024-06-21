export type TileConfig = {
  x: number;
  y: number;
  color: string | null;
}

export type TileEvent = {
  x: number;
  y: number;
  originalEvent: MouseEvent;
}

export type TileProps = {
  tileConfig: TileConfig;
}