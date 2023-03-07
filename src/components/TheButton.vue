<script lang="ts" setup>
import { computed } from 'vue';

const props = defineProps<{
  color?: string;
  label?: string;
  disabled?: boolean;
}>();

const color = computed(() => props.color || 'var(--violet)');
const disabled = computed(() => !!props.disabled);
</script>
<template>
  <a class="the-button" :class="{ disabled }" :style="{ '--color': color }">
    <slot /> {{ label }}
  </a>
</template>
<style lang="scss" scoped>
a {
  display: inline-block;
  cursor: pointer;
  background: var(--color);
  padding: 0.5em 2em;
  border-radius: 2em;
  color: #fff;

  &.disabled {
    pointer-events: none;
    opacity: 0.5;
  }
}
</style>
