<script lang="ts" setup>
import { useColors } from '../composables/useColors';
import { ref } from 'vue';

const props = defineProps<{
  label?: string;
  color?: string;
}>();

const { getColor } = useColors();
const color = getColor(props.color || 'black');
const cssVariables = ref({ '--color': color });
</script>
<template>
  <a class="the-action-button" :style="cssVariables">
    <div>
      <slot />
      {{ props.label || '' }}
    </div>
  </a>
</template>
<style lang="scss" scoped>
.the-action-button {
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background: var(--color);
  color: #fff;
  padding: 1em;
  border-radius: 1em;
  font-weight: bold;
  column-gap: 10px;
  text-align: center;
  min-height: 2.5em;
}
</style>
