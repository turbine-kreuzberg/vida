<script lang="ts" setup>
import { useColors } from '../composables/useColors';

const props = defineProps<{
  color?: string;
}>();

const { getColor } = useColors();

const color = getColor(props.color || 'dark-rosa');
</script>
<template>
  <div class="the-headline" :style="{ '--color': color }">
    <slot />
  </div>
</template>
<style lang="scss" scoped>
.the-headline {
  font-size: 1.2em;
  margin-bottom: 20px;
  font-weight: bold;
  color: var(--color);

  :deep(a) {
    color: inherit;
  }
}
</style>
