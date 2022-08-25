<script setup lang="ts">
interface Props {
  important: boolean;
  centered: boolean;
  small: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  important: false,
  centered: false,
  small: false
});
</script>
<template>
  <div
    class="melb-text-content"
    :class="{
      important: props.important,
      centered: props.centered,
      small: props.small
    }"
  >
    <slot />
  </div>
</template>
<style lang="scss" scoped>
.melb-text-content {
  font-size: 0.9em;
  line-height: 1.5em;
  margin-bottom: 20px;

  :deep(p) {
    margin: 0 0 1em 0;
  }

  &.important {
    font-size: 1.1em;
    font-weight: bold;
  }

  &.centered {
    text-align: center;
  }

  &.small {
    font-size: 0.8em;
  }
}
</style>
