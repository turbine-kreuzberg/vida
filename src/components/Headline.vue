<script lang="ts" setup>
const props = defineProps<{
  label: string;
}>();
</script>
<template>
  <div class="melb-headline" v-html="props.label" />
</template>
<style lang="scss" scoped>
.melb-headline {
  font-size: 1.2em;
  margin-bottom: 20px;
  font-weight: bold;

  :deep(a) {
    color: inherit;
  }
}
</style>
