<script setup lang="ts">
import ScrollArea from './ScrollArea.vue';
import Intro from './HelpCenter/Intro.vue';
import EmergencyHeader from './HelpCenter/EmergencyHeader.vue';
import Modules from './HelpCenter/Modules.vue';
import { useApp } from '../composables/useApp';
import ContentPages from './HelpCenter/ContentPages.vue';
import BackButton from './HelpCenter/BackButton.vue';

const { currentModule } = useApp();
</script>

<template>
  <div class="melb-help-center">
    <div v-if="!currentModule">
      <intro />
      <emergency-header />
      <modules />
      <content-pages />
    </div>
    <div v-else>
      <back-button />
      <scroll-area>
        <component :is="currentModule.component" v-bind="currentModule.props" />
      </scroll-area>
    </div>
  </div>
</template>

<style scoped lang="scss">
.melb-help-center {
  padding: 20px;
}
</style>
