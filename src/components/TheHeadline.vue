<template>
  <div class="the-headline">
    <slot />
  </div>
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
