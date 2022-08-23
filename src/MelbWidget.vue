<script setup lang="ts">
import HelpCenter from './components/HelpCenter.vue';
import Popup from './components/Popup.vue';
import Opener from './components/Opener.vue';
import { ref } from 'vue';

const isOpen = ref(false);

const doSomething = () => {
  isOpen.value = !isOpen.value;
};
</script>

<template>
  <Opener @click="doSomething" />
  <Popup v-if="isOpen">
    <HelpCenter />
  </Popup>
</template>
