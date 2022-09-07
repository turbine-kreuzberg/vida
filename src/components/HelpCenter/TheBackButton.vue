<script lang="ts" setup>
import { useApp } from '../../composables/useApp';

const { currentModule } = useApp();

const back = () => {
  currentModule.value = null;
};
</script>
<template>
  <div class="the-back" @click="back">&lt; Back</div>
</template>
<style scoped lang="scss">
.the-back {
  border-bottom: 1px solid #eee;
  padding: 0 0 10px 0;
  margin-bottom: 20px;
  font-weight: bold;
  cursor: pointer;
}
</style>
