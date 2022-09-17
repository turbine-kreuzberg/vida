<script setup lang="ts">
import { onMounted, ref, nextTick } from 'vue';
import { useMap } from '../../composables/useMap';
import TheInfo from '../Messages/TheInfo.vue';
import { useI18n } from 'vue-i18n';
import TheTextContent from '../TheTextContent.vue';
import useSafePlaceMarkers from '../../composables/useSafePlaceMarkers';
import { useGeoLocation } from '../../composables/useGeoLocation';
import { LatLngExpression } from 'leaflet';

const mapTag = ref<any>(null);
const hasAccessToLocation = ref<boolean | null>(null);
const errorMessage = ref('');

const { t } = useI18n();
const { init, map } = useMap();
const { init: initMarkers, loading } = useSafePlaceMarkers();
const { init: initGeoPosition, onAllowed, onDenied } = useGeoLocation();

const initMap = async (center: LatLngExpression) => {
  await nextTick();
  init(mapTag.value, center);
  if (!map.value) throw new Error('Your map was not initialized.');
  initMarkers(map.value);
};

onAllowed((position: GeolocationPosition) => {
  hasAccessToLocation.value = true;
  initMap([position.coords.latitude, position.coords.longitude]);
});

onDenied((error: GeolocationPositionError) => {
  if (error.code === 1) errorMessage.value = 'Access to geo location not granted.';
  if (error.code === 2) errorMessage.value = 'Could not retrieve your current location.';
  if (error.code === 3) errorMessage.value = 'Timout';
  hasAccessToLocation.value = false;
});

onMounted(() => initGeoPosition());
</script>
<template>
  <div v-if="hasAccessToLocation === null">Waiting for geo location...</div>
  <div v-else-if="!hasAccessToLocation">{{ errorMessage }}</div>
  <div v-else>
    <the-info v-if="loading" class="the-info" :label="`${t('loading_safe_places')}...`" />
    <the-text-content>{{ t('index.safe_places_intro') }}</the-text-content>
    <div :class="{ transparent: loading }">
      <div id="the-map" ref="mapTag" />
    </div>
  </div>
</template>
<style lang="scss" scoped>
#the-map {
  width: calc(100vw - 80px);
  max-width: 100%;
  height: 300px;
}

.transparent {
  opacity: 0.1;
}
</style>
