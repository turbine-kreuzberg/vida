<script lang="ts" setup>
import { useColors } from '../composables/useColors';
import { computed } from 'vue';

const props = defineProps<{
  color?: string;
  borderTop?: boolean;
  level?: number;
}>();

const { getColor } = useColors();

const color = computed(() => getColor(props.color || 'violet'));
const borderTop = computed(() => props.borderTop || false);
const level = computed(() => props.level || 1);
</script>
<template>
  <div
    class="the-headline"
    :class="[borderTop ? 'border-top' : '', `level-${level}`]"
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

  &.level-2 {
    font-size: 1em;
  }
}
</style>
