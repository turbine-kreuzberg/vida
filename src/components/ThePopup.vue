<script lang="ts" setup>
import { HandPosition } from '../models/Configuration';

const props = defineProps<{
  position: HandPosition;
}>();
</script>
<template>
  <div class="the-popup" :class="`the-popup-${props.position}`">
    <slot />
  </div>
</template>
<style scoped lang="scss">
.the-popup {
  position: fixed;
  top: auto;
  left: auto;
  right: auto;
  bottom: auto;
  max-width: 450px;
  margin-left: 10px;
  margin-right: 10px;
  z-index: 1000;
  background: #fff;
  border: 1px solid #eee;
  border-radius: 2em;
  box-shadow: rgba(100, 100, 111, 0.2) 0 7px 29px 0;

  &-bottom-left {
    left: 0;
    bottom: 100px;
  }

  &-bottom-right {
    right: 0;
    bottom: 100px;
  }

  &-top-right {
    top: 100px;
    right: 0;
  }

  &-top-left {
    top: 100px;
    left: 0;
  }

  &-centered {
    top: 10px;
    left: 50%;
    bottom: auto;
    right: auto;
    margin-left: -200px;
  }
}
</style>
