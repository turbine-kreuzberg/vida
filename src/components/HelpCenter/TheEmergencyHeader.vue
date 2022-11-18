<script lang="ts" setup>
import { useWidget } from '../../composables/useWidget';
import TheHeadline from '../TheHeadline.vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
const { configuration } = useWidget();
</script>
<template>
  <the-headline v-if="configuration.getEmergencyNumber()">
    <div
      v-html="
        t('index.emergency_header', {
          emergencyNumber: configuration.getEmergencyNumber()
        })
      "
    />
  </the-headline>
</template>
