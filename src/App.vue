<script setup lang="ts">
import HelpCenter from './components/HelpCenter.vue';
import Popup from './components/Popup.vue';
import Opener from './components/Opener.vue';
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
  <div class="melb-app" v-if="configuration">
    <Opener
      ref="opener"
      @click="!isOpen ? open() : close()"
      v-if="showHand"
      :position="position"
    />
    <Popup v-if="isOpen" ref="popup" :position="position">
      <HelpCenter />
    </Popup>
  </div>
</template>

<style lang="scss" scoped>
.melb-app {
  font-family: arial, sans-serif;
  font-size: 16px;
  line-height: 1;
}
</style>
