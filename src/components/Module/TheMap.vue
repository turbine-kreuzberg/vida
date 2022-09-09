<script setup lang="ts">
import 'leaflet/dist/leaflet.css';
import { LMap, LTileLayer } from '@vue-leaflet/vue-leaflet';
import { onMounted, ref } from 'vue';

const center = ref<number[] | null>(null);
const hasAccessToLocation = ref<boolean | null>(null);
const errorMessage = ref('Unknown error');

const onAllowed = (position: GeolocationPosition) => {
  center.value = [position.coords.latitude, position.coords.longitude];
  hasAccessToLocation.value = true;
};

const onDisallowed = (error: GeolocationPositionError) => {
  if (error.code === 1) errorMessage.value = 'Access not granted.';
  if (error.code === 2) errorMessage.value = 'Could not retrieve your current location.';
  hasAccessToLocation.value = false;
};

onMounted(() => {
  const geolocation = navigator.geolocation || null;
  if (!geolocation) return;

  geolocation.getCurrentPosition(onAllowed, onDisallowed);
});
</script>
<template>
  <div v-if="hasAccessToLocation" id="the-map">
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
<style lang="scss" scoped>
#the-map {
  height: 400px;
}
</style>
