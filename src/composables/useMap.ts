import L, { LatLngExpression, Map } from 'leaflet';
import { Ref, ref } from 'vue';
import 'leaflet/dist/leaflet.css';

const urlTemplate = 'https://tile.openstreetmap.org/{z}/{x}/{y}.png';
const attribution =
  '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

export function useMap() {
  const map = ref<Map | null>(null) as Ref<Map | null>;

  const init = (element: HTMLElement, center: LatLngExpression, zoom = 14) => {
    map.value = L.map(element)
      .setView(center, zoom)
      .addLayer(L.tileLayer(urlTemplate, { attribution }));
  };

  return {
    init,
    map
  };
}
