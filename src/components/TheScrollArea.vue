<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps<{
  maxHeight?: string;
}>();

const style = ref<{ [key: string]: string | undefined | null | number }>({
  maxHeight: props.maxHeight
});
</script>
<template>
  <div class="the-scroll-area" :style="style">
    <slot />
  </div>
</template>
<style lang="scss">
.the-scroll-area {
  max-height: 400px;
  overflow: auto;
}
</style>
