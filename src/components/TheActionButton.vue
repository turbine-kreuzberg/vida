<script lang="ts" setup>
const props = defineProps<{
  label?: string;
  color?: string;
}>();
</script>
<template>
  <a class="the-action-button" :class="color">
    <div><slot />{{ props.label || '' }}</div>
  </a>
</template>
<style lang="scss" scoped>
.the-action-button {
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background: #000;
  color: #fff;
  padding: 1em;
  border-radius: 1em;
  font-weight: bold;
  column-gap: 10px;
  text-align: center;
  min-height: 2.5em;

  &.red {
    background: var(--red);
  }

  &.violet {
    background: var(--violet);
  }

  &.dark-rosa {
    background: var(--dark-rosa);
  }
}
</style>
