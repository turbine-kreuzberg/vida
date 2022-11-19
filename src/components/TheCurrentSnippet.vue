<script lang="ts" setup>
import snippet from './../plain/snippet-code.txt?raw';
import { computed } from 'vue';
import { useWidget } from '../composables/useWidget';

const { configuration } = useWidget();

const snippetPrepared = computed(() => {
  let snippedPrepared = snippet;

  const markers: { [key: string]: string } = {
    color: configuration.value.getHandColor(),
    position: configuration.value.getHandPosition(),
    visible: configuration.value.isHandVisible() ? 'true' : 'false'
  };

  for (const marker in markers) {
    snippedPrepared = snippedPrepared.replace(`###${marker}###`, markers[marker]);
  }

  return snippedPrepared;
});
</script>
<template>
  <div class="the-code-content">
    <pre v-text="snippetPrepared" />
  </div>
</template>
<style lang="scss" scoped>
.the-code-content {
  padding: 1.5em;
  background: #043454;
  color: #fff;
  overflow-x: auto;
  font-size: 1.2em;
}
</style>
