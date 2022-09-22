<script lang="ts" setup>
import { useApp } from '../../composables/useApp';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
const { currentModule } = useApp();

const back = () => (currentModule.value = null);
</script>
<template>
  <div class="the-back" @click="back">&lt; {{ t('back') }}</div>
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
