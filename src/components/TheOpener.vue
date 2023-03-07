<script lang="ts" setup>
import TheHandClosed from './Svg/TheHandClosed.vue';
import TheHandOpen from './Svg/TheHandOpen.vue';
import { ref } from 'vue';

const props = defineProps<{
  position: string;
}>();

const isHover = ref<boolean>(false);
</script>
<template>
  <div
    class="the-opener"
    :class="props.position"
    @mouseenter="isHover = true"
    @mouseleave="isHover = false"
  >
    <the-hand-closed v-if="isHover" />
    <the-hand-open v-else />
  </div>
</template>
<style lang="scss" scoped>
.the-opener {
  position: fixed;
  top: auto;
  left: auto;
  bottom: auto;
  right: auto;
  width: 40px;
  height: 80px;
  text-align: center;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  font-weight: bold;
  z-index: 1000;

  &.top-left {
    top: 20px;
    left: 20px;
  }

  &.top-right {
    top: 20px;
    right: 20px;
  }

  &.bottom-left {
    bottom: 20px;
    left: 20px;
  }

  &.bottom-right {
    bottom: 20px;
    right: 20px;
  }

  &.centered {
    bottom: 10px;
    left: 50%;
    margin-left: -40px;
  }

  > * {
    width: auto;
    height: 100%;
  }
}
</style>
