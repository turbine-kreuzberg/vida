<script lang="ts" setup>
import { useApp } from '../../composables/useApp';
import Headline from '../Headline.vue';
import { ref } from 'vue';

const { configuration } = useApp();

const number = ref(configuration.value?.emergencyNumber);
</script>
<template>
  <headline
    v-if="number"
    :label="`
      If you or someone you know is in immediate danger, please call: <a href='tel:${number}'>${number}</a>
    `"
  />
</template>
