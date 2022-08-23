<script lang="ts" setup>
defineProps<{
  label: string;
}>();
</script>
<template>
  <div class="melb-headline">{{ label }}</div>
</template>
<style lang="scss" scoped>
.melb-headline {
  font-size: 1.2em;
  margin-bottom: 20px;
  font-weight: bold;
}
</style>
