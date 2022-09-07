<script lang="ts" setup>
import { useApp } from '../../composables/useApp';
import TheMap from '../Module/TheMap.vue';
import { useSafeLink } from '../../composables/useSafeLink';

const { configuration, currentModule } = useApp();
const { safeLink } = useSafeLink();

const openSafePlaces = () => {
  currentModule.value = {
    component: TheMap
  };
};
</script>
<template>
  <div class="the-modules">
    <a class="the-module" :href="`tel:${configuration.institution.phone}`">
      Call {{ configuration.institution.name }}<br />
      <span class="the-small">{{ configuration.institution.phone }}</span>
    </a>
    <a class="the-module" @click="openSafePlaces()"> Find a safe help resource </a>
    <a
      v-if="configuration.institution.chat"
      class="the-module"
      @click="safeLink(configuration.institution.chat)"
    >
      Go to livechat
    </a>
  </div>
</template>
<style lang="scss" scoped>
a {
  color: inherit;
  text-decoration: none;
}

.the-small {
  font-size: 0.8em;
  color: #666;
}

.the-modules {
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  margin-bottom: 40px;
}

.the-module {
  border: 1px solid #eee;
  border-radius: 10px;
  padding: 20px;
  cursor: pointer;
  text-align: center;

  &:hover {
    border-color: #000;
  }
}
</style>
