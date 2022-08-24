<script setup lang="ts">
import HelpCenter from './components/Organism/HelpCenter.vue';
import Popup from './components/Molecule/Popup.vue';
import Opener from './components/Molecule/Opener.vue';
import { ref } from 'vue';

const isOpen = ref(false);

const toggle = () => {
  isOpen.value = !isOpen.value;
};
</script>

<template>
  <div class="melb-widget">
    <Opener @click="toggle" />
    <Popup v-if="isOpen"><HelpCenter /></Popup>
  </div>
</template>

<style lang="scss" scoped>
.melb-widget {
  font-family: arial, sans-serif;
  font-size: 16px;
  line-height: 1;
}
</style>
