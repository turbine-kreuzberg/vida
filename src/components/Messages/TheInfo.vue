<script setup lang="ts">
const props = defineProps<{
  label: string | undefined;
}>();
</script>
<template>
  <div class="the-info">
    {{ props.label }}
    <slot />
  </div>
</template>
<style lang="scss" scoped>
.the-info {
  border-left: 3px solid rgba(140, 186, 248, 0.35);
  margin-bottom: 20px;
  padding: 0 0 0 10px;
  color: #666666;
}
</style>
