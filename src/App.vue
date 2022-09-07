<script setup lang="ts">
import TheHelpCenter from './components/TheHelpCenter.vue';
import ThePopup from './components/ThePopup.vue';
import TheOpener from './components/TheOpener.vue';
import { useApp } from './composables/useApp';
import { onMounted, ref } from 'vue';
import { onClickOutside, onKeyDown } from '@vueuse/core';

const { open, close, dispatchLoaded, isOpen, configuration, position, showHand } =
  useApp();

const popup = ref<HTMLElement | null>(null);
const opener = ref<HTMLElement | null>(null);

onMounted(() => {
  dispatchLoaded();
  onClickOutside(popup, () => close(), { ignore: [opener] });
  onKeyDown('Escape', () => close());
});
</script>

<template>
  <div v-if="configuration" class="the-app">
    <TheOpener
      v-if="showHand"
      ref="opener"
      :position="position"
      @click="!isOpen ? open() : close()"
    />
    <ThePopup v-if="isOpen" ref="popup" :position="position">
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
