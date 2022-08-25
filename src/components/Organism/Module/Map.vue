<template>
  <div id="melb-map" v-if="hasAccessToLocation">
    <l-map style="height: 100%; width: 100%" :zoom="14" :center="center">
      <l-tile-layer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        layer-type="base"
        name="OpenStreetMap"
      ></l-tile-layer>
    </l-map>
  </div>
  <div v-else-if="hasAccessToLocation === null">Waiting for permission ...</div>
  <div v-else>You did not grant access to retrieve your location.</div>
</template>
<script setup lang="ts">
import 'leaflet/dist/leaflet.css';
import { LMap, LTileLayer } from '@vue-leaflet/vue-leaflet';
import { onMounted, ref } from 'vue';

defineProps<{
  center: number[];
  zoom: number;
}>();

const center = ref<number[] | null>(null);
const hasAccessToLocation = ref<boolean | null>(null);

const onAllowed = (position: GeolocationPosition) => {
  center.value = [position.coords.latitude, position.coords.longitude];
  hasAccessToLocation.value = true;
};

const onDisallowed = () => {
  hasAccessToLocation.value = false;
};

onMounted(() => {
  const geolocation = navigator.geolocation || null;
  if (!geolocation) return;

  geolocation.getCurrentPosition(onAllowed, onDisallowed);
});
</script>
<style lang="scss" scoped>
#melb-map {
  height: 400px;
}
</style>
