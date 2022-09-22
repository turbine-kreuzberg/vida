<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps<{
  maxHeight?: string;
}>();

const style = ref<{ [key: string]: string | undefined | null | number }>({
  maxHeight: props.maxHeight || 'calc(100vh - 220px)'
});
</script>
<template>
  <div class="the-scroll-area" :style="style">
    <slot />
  </div>
</template>
<style lang="scss">
.the-scroll-area {
  overflow: auto;
  padding-right: 10px;

  // this prevents firefox scrollbar appearing with no reason :/ Is not so important and can also be removed.
  padding-bottom: 10px;
}
</style>
