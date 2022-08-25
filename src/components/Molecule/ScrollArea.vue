<script setup lang="ts">
const props = defineProps<{
  maxHeight?: string;
}>();

const maxHeights = props.maxHeight || '90vh';
</script>
<template>
  <div class="melb-scroll-area" :style="{ maxHeight: maxHeight }">
    <slot />
  </div>
</template>
<style lang="scss">
.melb-scroll-area {
  max-height: 400px;
  overflow: auto;
}
</style>
