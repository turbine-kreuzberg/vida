<script lang="ts" setup>
import TheHandClosed from './Svg/TheHandClosed.vue';
import TheHandOpen from './Svg/TheHandOpen.vue';
import TheClose from './Svg/TheClose.vue';
import { ref } from 'vue';
import { useApp } from '../composables/useApp';

const props = defineProps<{
  position: string;
}>();

const { isOpen } = useApp();

const isHover = ref<boolean>(false);
</script>
<template>
  <div
    class="the-opener"
    :class="props.position"
    @mouseenter="isHover = true"
    @mouseleave="isHover = false"
  >
    <template v-if="!isOpen">
      <the-hand-closed v-if="isHover" />
      <the-hand-open v-else />
    </template>
    <template v-else>
      <the-close width="80" height="80" />
    </template>
  </div>
</template>
<style lang="scss" scoped>
.the-opener {
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
