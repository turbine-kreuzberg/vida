<script setup lang="ts">
import HelpCenter from './components/Organism/HelpCenter.vue';
import Popup from './components/Molecule/Popup.vue';
import Opener from './components/Molecule/Opener.vue';

import { usePopup } from './composables/usePopup';
import { ref } from 'vue';

const { isOpen, toggle, popupRef, ignoreElementOnOutsideClick } = usePopup();

const openerRef = ref(null);
ignoreElementOnOutsideClick(openerRef);

// @ts-ignore
window.startBreakout = () => {
  toggle();
};
</script>

<template>
  <div class="melb-widget">
    <Opener @click="toggle" ref="openerRef" />
    <Popup v-if="isOpen" ref="popupRef" :position="'centered'">
      <HelpCenter />
    </Popup>
  </div>
</template>

<style lang="scss" scoped>
.melb-widget {
  font-family: arial, sans-serif;
  font-size: 16px;
  line-height: 1;
}
</style>
