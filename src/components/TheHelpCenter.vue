<script setup lang="ts">
import TheScrollArea from './TheScrollArea.vue';
import TheIntro from './HelpCenter/TheIntro.vue';
import TheEmergencyHeader from './HelpCenter/TheEmergencyHeader.vue';
import TheModules from './HelpCenter/TheModules.vue';
import { useApp } from '../composables/useApp';
import TheContentPages from './HelpCenter/TheContentPages.vue';
import TheBackButton from './HelpCenter/TheBackButton.vue';

const { currentModule } = useApp();
</script>

<template>
  <div class="the-help-center">
    <the-back-button v-if="currentModule" />
    <the-scroll-area>
      <div v-if="!currentModule">
        <the-intro />
        <the-emergency-header />
        <the-modules />
        <the-content-pages />
      </div>
      <div v-else>
        <component :is="currentModule.component" v-bind="currentModule.props" />
      </div>
    </the-scroll-area>
  </div>
</template>

<style scoped lang="scss">
.the-help-center {
  padding: 20px;
}
</style>
