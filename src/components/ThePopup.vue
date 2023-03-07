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
    left: 10px;
    bottom: 30px;
  }

  &-bottom-right {
    right: 10px;
    bottom: 30px;
  }

  &-top-right {
    top: 20px;
    right: 10px;
  }

  &-top-left {
    top: 20px;
    left: 10px;
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
