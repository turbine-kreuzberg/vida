<script setup lang="ts">
interface Props {
  important?: boolean;
  centered?: boolean;
  small?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  important: false,
  centered: false,
  small: false
});
</script>
<template>
  <div
    class="the-text-content"
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
.the-text-content {
  font-size: 0.9em;
  line-height: 1.7em;
  margin-bottom: 20px;

  :deep(a) {
    color: inherit;
    text-decoration: underline;
  }

  :deep(p) {
    margin: 0 0 1em 0;

    &:last-child {
      margin-bottom: 0;
    }
  }

  :deep(h3) {
    font-size: 1.2em;
    font-weight: bold;
    font-family: inherit;
    border-bottom: 1px solid #eee;
    padding-bottom: 10px;
    margin-bottom: 15px;
  }

  :deep(ul) {
    list-style-type: disc;
    margin: 0 0 20px 20px;
    padding: 0;

    li {
      margin: 0 5px 5px 5px;
    }
  }

  :deep(hr) {
    background: none;
    border: none;
    border-bottom: 1px solid #ddd;
    margin: 2em 0;
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
