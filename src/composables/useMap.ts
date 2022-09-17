import OverPassLayer, {
  OverPassLayerOptions
} from 'leaflet-overpass-layer/src/OverPassLayer';
import L, { LatLngExpression, Map } from 'leaflet';
import { ref } from 'vue';
import 'leaflet/dist/leaflet.css';

const urlTemplate = 'https://tile.openstreetmap.org/{z}/{x}/{y}.png';
const attribution =
  '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

const query = `
    (
      node({{bbox}})[amenity~"^(fire_station|hospital)$"];
      node({{bbox}})[amenity~"^(hospital)$"];
      relation({{bbox}})[amenity~"^(hospital)$"];
      node({{bbox}})[healthcare~"^(hospital|clinic)$"];
      relation({{bbox}})[healthcare~"^(hospital|clinic)$"];
    );
    out;
`;

export function useMap() {
  const map = ref<Map | null>(null);
  const isMarkersLoaded = ref(false);

  const initMap = (
    element: HTMLElement,
    center: LatLngExpression,
    zoom = 14,
    overPassOptions: OverPassLayerOptions = {}
  ) => {
    map.value = L.map(element).setView(center, zoom);
    map.value
      .addLayer(L.tileLayer(urlTemplate, { attribution }))
      .addLayer(createOverPassLayer(overPassOptions));
  };

  const createOverPassLayer = (options: OverPassLayerOptions) => {
    options.afterRequest = () => (isMarkersLoaded.value = true);
    options.minZoom = 13;
    options.query = query;

    options.onSuccess = function (data) {
      for (const item of data.elements) {
        // @ts-ignore
        if (item.id in this._ids) {
          continue;
        }

        // @ts-ignore
        this._ids[item.id] = true;

        if (item.type !== 'node') {
          throw new Error('None node found, what shall we do?');
        }

        const pos = L.latLng(item.lat, item.lon);

        const marker = L.circle(pos, 20, {
          stroke: true,
          color: '#0f57b4',
          weight: 2,
          fillColor: '#e3e823'
        });

        const popup = L.popup().setContent(`
          <div><strong>${item.tags.name}</strong></div>
        `);
        marker.bindPopup(popup);

        // @ts-ignore
        this._markers.addLayer(marker);
      }
    };

    return new OverPassLayer(options);
  };

  return {
    initMap,
    isMarkersLoaded,
    map
  };
}
