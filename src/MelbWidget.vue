<script setup lang="ts">
import HelpCenter from './components/Organism/HelpCenter.vue';
import Popup from './components/Molecule/Popup.vue';
import Opener from './components/Molecule/Opener.vue';

import { usePopup } from './composables/usePopup';
import { ref } from 'vue';
import { IConfiguration } from './types/configuration';

const { isOpen, toggle, popupRef, ignoreElementOnOutsideClick } = usePopup();

const openerRef = ref(null);
ignoreElementOnOutsideClick(openerRef);

// @ts-ignore
const configuration: IConfiguration = window.breakout;

const renderBadge =
  typeof configuration.renderBadge === 'undefined' ? true : configuration.renderBadge;

const widgetPosition = configuration.widgetPosition
  ? configuration.widgetPosition
  : 'bottom-right';

const forceCenteredPopup = ref<boolean>(false);

// @ts-ignore
window.startBreakout = () => {
  openClose(true);
};

const openClose = (centered?: boolean) => {
  forceCenteredPopup.value = !!centered;
  toggle();
};
</script>

<template>
  <div class="melb-widget">
    <Opener
      @click="openClose()"
      ref="openerRef"
      v-if="renderBadge"
      :position="widgetPosition"
    />
    <Popup
      v-if="isOpen"
      ref="popupRef"
      :position="forceCenteredPopup ? 'centered' : null"
    >
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
