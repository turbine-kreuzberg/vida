<template>
  <div class="opener" :class="position">Help</div>
</template>
<script setup lang="ts">
defineProps<{
  position: string;
}>();
</script>
<style lang="scss" scoped>
.opener {
  position: fixed;
  border-radius: 100px;
  width: 50px;
  height: 50px;
  background: red;
  text-align: center;
  padding-top: 17px;
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
}
</style>
