/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue';

  // eslint-disable-next-line @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, {}>;

  export default component;
}

declare module '@vue-leaflet/vue-leaflet' {
  export const LMap: any;
  export const LTileLayer: any;
}

declare module 'leaflet-overpass-layer/src/OverPassLayer' {
  import { Icon, Layer } from 'leaflet';

  export interface OverPassLayerResult {
    elements: {
      [key: string]: string | number;
      id: number;
      lat: number;
      lon: number;
      type: string;
      tags: {
        [key: string]: string;
      };
    }[];
  }

  export interface OverPassLayerOptions {
    query?: string;
    minZoom?: int;
    beforeRequest?: () => void;
    afterRequest?: () => void;
    onSuccess?: (data: OverPassLayerResult) => void;
    markerIcon?: Icon;
  }

  export default class OverPassLayer extends Layer {
    constructor(options: OverPassLayerOptions);
  }
}
