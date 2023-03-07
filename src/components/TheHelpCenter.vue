<script setup lang="ts">
import TheScrollArea from './TheScrollArea.vue';
import TheIntro from './HelpCenter/TheIntro.vue';
import TheModules from './HelpCenter/TheModules.vue';
import { useWidget } from '../composables/useWidget';
import TheContentPages from './HelpCenter/TheContentPages.vue';
import TheBackButton from './HelpCenter/TheBackButton.vue';
import TheLogo from './Svg/TheLogo.vue';
import TheX from './TheX.vue';

const { configuration } = useWidget();
</script>

<template>
  <div v-if="configuration" class="the-help-center">
    <the-x />
    <the-logo />
    <the-back-button v-if="configuration.hasActiveModule()" />
    <the-scroll-area>
      <div v-if="!configuration.hasActiveModule()">
        <the-intro />
        <the-modules />
        <the-content-pages />
      </div>
      <div v-else>
        <component
          :is="configuration.getActiveModule().component"
          v-bind="configuration.getActiveModule().props"
        />
      </div>
    </the-scroll-area>
  </div>
</template>

<style scoped lang="scss">
.the-help-center {
  position: relative;
  padding: 2em;
}

.the-x {
  position: absolute;
  top: 2em;
  right: 2em;
}

.the-logo {
  margin-bottom: 1em;
  width: 170px;
}
</style>
