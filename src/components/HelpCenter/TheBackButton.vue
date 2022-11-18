<script lang="ts" setup>
import { useWidget } from '../../composables/useWidget';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
const { configuration } = useWidget();

const back = () => configuration.value.setActiveModule(null);
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
