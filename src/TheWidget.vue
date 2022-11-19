<script setup lang="ts">
import ThePopup from './components/ThePopup.vue';
import TheOpener from './components/TheOpener.vue';
import { useWidget } from './composables/useWidget';
import { defineAsyncComponent, onMounted, ref } from 'vue';
import { onClickOutside, onKeyDown } from '@vueuse/core';

const TheHelpCenter = defineAsyncComponent(
  () => import('./components/TheHelpCenter.vue')
);

const { dispatchLoaded, isInitialized, configuration } = useWidget();

const popup = ref<HTMLElement | null>(null);
const opener = ref<HTMLElement | null>(null);

onMounted(() => {
  dispatchLoaded();
  onClickOutside(popup, () => configuration.value.close(), { ignore: [opener] });
  onKeyDown('Escape', () => configuration.value.close());
});
</script>

<template>
  <div v-if="isInitialized" class="the-app">
    <TheOpener
      v-if="configuration.isHandVisible()"
      ref="opener"
      :position="configuration.getHandPosition()"
      @click="!configuration.isVisible() ? configuration.open() : configuration.close()"
    />
    <ThePopup
      v-if="configuration.isForceOpen() || configuration.isVisible()"
      ref="popup"
      :position="configuration.getHandPosition()"
    >
      <TheHelpCenter />
    </ThePopup>
  </div>
</template>

<style lang="scss" scoped>
.the-app {
  font-family: arial, sans-serif;
  font-size: 16px;
  line-height: 1;
}
</style>
