<script lang="ts" setup>
import HandClosed from './Svg/HandClosed.vue';
import HandOpen from './Svg/HandOpen.vue';
import { ref } from 'vue';

defineProps<{
  position: string;
}>();

const isHover = ref<boolean>(false);
</script>
<template>
  <div
    class="opener"
    :class="position"
    @mouseenter="isHover = true"
    @mouseleave="isHover = false"
  >
    <hand-closed v-if="isHover" />
    <hand-open v-else />
  </div>
</template>
<style lang="scss" scoped>
.opener {
  position: fixed;
  top: auto;
  left: auto;
  bottom: auto;
  right: auto;
  width: 80px;
  height: 80px;
  text-align: center;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  font-weight: bold;
  z-index: 1000;

  &.top-left {
    top: 10px;
    left: 10px;
  }

  &.top-right {
    top: 10px;
    right: 10px;
  }

  &.bottom-left {
    bottom: 10px;
    left: 10px;
  }

  &.bottom-right {
    bottom: 10px;
    right: 10px;
  }

  &.centered {
    bottom: 10px;
    left: 50%;
    margin-left: -40px;
  }
}
</style>
