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
