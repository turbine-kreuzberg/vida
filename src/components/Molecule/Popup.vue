<script lang="ts" setup>
defineProps<{
  position: string;
}>();
</script>
<template>
  <div class="melb-popup" :class="`melb-popup-${position}`">
    <slot />
  </div>
</template>
<style scoped lang="scss">
.melb-popup {
  position: fixed;
  right: 10px;
  bottom: 70px;
  width: 400px;
  z-index: 1000;
  background: #fff;
  border: 1px solid #eee;
  border-radius: 15px;
  box-shadow: rgba(100, 100, 111, 0.2) 0 7px 29px 0;

  &-centered {
    top: 10px;
    left: 50%;
    bottom: auto;
    right: auto;
    margin-left: -200px;
  }
}
</style>
