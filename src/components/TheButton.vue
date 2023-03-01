<script lang="ts" setup>
import { useColors } from '../composables/useColors';
import { ref } from 'vue';

const props = defineProps<{
  color?: string;
  label?: string;
}>();

const { getColor } = useColors();
const color = ref(getColor(props.color || 'black'));
</script>
<template>
  <a class="the-button" :style="{ '--color': color }"> <slot /> {{ label }} </a>
</template>
<style lang="scss" scoped>
a {
  display: inline-block;
  cursor: pointer;
  background: var(--color);
  padding: 0.5em 2em;
  border-radius: 2em;
  color: #fff;
}
</style>
