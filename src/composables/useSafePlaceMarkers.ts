import L, { Map } from 'leaflet';
import { ref } from 'vue';
import OverPassLayer, {
  OverPassLayerOptions
} from 'leaflet-overpass-layer/src/OverPassLayer';

export default function () {
  const idsProcessed = ref<(string | number)[]>([]);
  const loading = ref(true);
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

  const createOverPassLayer = (options: OverPassLayerOptions = {}) => {
    options.minZoom = 13;
    options.query = query;
    options.onSuccess = function (data) {
      for (const item of data.elements) {
        if (idsProcessed.value.includes(item.id)) continue;
        idsProcessed.value.push(item.id);

        if (item.type !== 'node') throw new Error('None node found, what shall we do?');

        const marker = L.circle(L.latLng(item.lat, item.lon), 20, {
          stroke: true,
          color: '#0f57b4',
          weight: 2,
          fillColor: '#e3e823'
        });

        marker.bindPopup(
          L.popup().setContent(`
            <div><strong>${item.tags.name}</strong></div>
            <div>${item.tags.amenity}</div>
          `)
        );

        // @ts-ignore
        this._markers.addLayer(marker);
      }
      loading.value = false;
    };

    return new OverPassLayer(options);
  };

  const init = (map: Map) => map && map.addLayer(createOverPassLayer());

  return {
    init,
    loading
  };
}
