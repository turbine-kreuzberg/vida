<script lang="ts" setup>
import { useWidget } from '../composables/useWidget';

const { configuration } = useWidget();
</script>
<template>
  <div class="the-x" @click="configuration.close()">
    <div class="the-trigger" />
  </div>
</template>
<style lang="scss" scoped>
.the-trigger {
  cursor: pointer;
  font-size: 4em;
  color: var(--red);

  &:after {
    position: relative;
    top: -0.2em;
    content: '\00d7';
  }
}
</style>
