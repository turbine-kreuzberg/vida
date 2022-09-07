<script lang="ts" setup>
const props = defineProps<{
  label: string;
}>();
</script>
<template>
  <div class="the-headline" v-html="props.label" />
</template>
<style lang="scss" scoped>
.the-headline {
  font-size: 1.2em;
  margin-bottom: 20px;
  font-weight: bold;

  :deep(a) {
    color: inherit;
  }
}
</style>
