<script lang="ts" setup>
import { useColors } from '../composables/useColors';

const props = defineProps<{
  color?: string;
  borderTop?: boolean;
}>();

const { getColor } = useColors();

const color = getColor(props.color || 'violet');
const borderTop = props.borderTop || false;
</script>
<template>
  <div
    class="the-headline"
    :class="{ 'border-top': borderTop }"
    :style="{ '--color': color }"
  >
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

  &.border-top {
    padding-top: 1em;
    border-top: 2px solid var(--red);
  }
}
</style>
