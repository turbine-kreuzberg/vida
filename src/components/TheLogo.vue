<script lang="ts" setup></script>
<template>
  <div class="the-logo">
    <div class="first-line">vida</div>
    <div class="second-line">widget</div>
  </div>
</template>
<style lang="scss" scoped>
.the-logo {
  display: flex;
  flex-direction: column;
  font-size: 3em;
  font-weight: 500;
  line-height: 0.8em;

  @media (max-width: 500px) {
    flex-direction: row;
    font-size: 2em;
  }
}
.first-line {
  font-weight: bold;
  color: var(--red);
}
.second-line {
  color: var(--violet);
}
</style>
