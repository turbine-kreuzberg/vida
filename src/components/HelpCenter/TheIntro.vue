<script lang="ts" setup>
import TheTextContent from '../TheTextContent.vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>
<template>
  <the-text-content :small="true">
    <div v-html="t('index.widget_description')" />
  </the-text-content>
</template>
