<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps<{
  maxHeight?: string;
}>();

const finalMaxHeight = ref(props.maxHeight || '90vh');
</script>
<template>
  <div class="melb-scroll-area" :style="{ maxHeight: finalMaxHeight }">
    <slot />
  </div>
</template>
<style lang="scss">
.melb-scroll-area {
  max-height: 400px;
  overflow: auto;
}
</style>
