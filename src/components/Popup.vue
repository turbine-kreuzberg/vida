<template>
  <div class="melb-popup">
    <slot />
  </div>
</template>
<style scoped lang="scss">
.melb-popup {
  position: absolute;
  right: 10px;
  bottom: 70px;
  width: 400px;
  z-index: 1000;
  background: yellow;
  border-radius: 30px;
}
</style>
