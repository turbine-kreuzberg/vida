<script lang="ts" setup>
import { useApp } from '../../composables/useApp';
import TheHeadline from '../TheHeadline.vue';
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
const { configuration } = useApp();

const emergencyNumber = ref(configuration.value?.emergencyNumber);
</script>
<template>
  <the-headline v-if="emergencyNumber">
    <div v-html="t('index.emergency_header', { emergencyNumber })" />
  </the-headline>
</template>
