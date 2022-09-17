<script setup lang="ts">
import { onMounted, ref, nextTick } from 'vue';
import { useMap } from '../../composables/useMap';
import TheInfo from '../Messages/TheInfo.vue';
import { useI18n } from 'vue-i18n';
import TheTextContent from '../TheTextContent.vue';

const center = ref<[number, number] | null>(null);
const hasAccessToLocation = ref<boolean | null>(null);
const errorMessage = ref();
const mapTag = ref<any>(null);

const { t } = useI18n();
const { initMap, isMarkersLoaded } = useMap();

const onAllowed = async (position: GeolocationPosition) => {
  center.value = [position.coords.latitude, position.coords.longitude];
  hasAccessToLocation.value = true;

  await nextTick();
  initMap(mapTag.value, center.value);
};

const onDisallowed = (error: GeolocationPositionError) => {
  if (error.code === 1) errorMessage.value = 'Access not granted.';
  if (error.code === 2) errorMessage.value = 'Could not retrieve your current location.';
  if (error.code === 3) errorMessage.value = 'Timout';
  hasAccessToLocation.value = false;
};

onMounted(() => {
  const geolocation = navigator.geolocation || null;
  if (!geolocation) return;

  geolocation.getCurrentPosition(onAllowed, onDisallowed);
});
</script>
<template>
  <template v-if="hasAccessToLocation">
    <the-text-content>{{ t('index.safe_places_intro') }}</the-text-content>
    <the-info v-if="!isMarkersLoaded" class="the-info">
      {{ t('loading_safe_places') }} ...
    </the-info>
    <div id="the-map" ref="mapTag" />
  </template>
  <div v-else-if="hasAccessToLocation === null">Waiting for permission ...</div>
  <div v-else>{{ errorMessage.value }}</div>
</template>
<style lang="scss" scoped>
#the-map {
  width: calc(100vw - 80px);
  max-width: 100%;
  height: 400px;
}
</style>
