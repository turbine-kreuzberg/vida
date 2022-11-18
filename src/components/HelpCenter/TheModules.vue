<script lang="ts" setup>
import { useWidget } from '../../composables/useWidget';
import TheMap from '../Module/TheMap.vue';
import { useSafeLink } from '../../composables/useSafeLink';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
const { configuration } = useWidget();
const { safeLink } = useSafeLink();

const institution = configuration.value.getInstitution();

const openSafePlaces = () => {
  configuration.value.setActiveModule({
    component: TheMap
  });
};
</script>
<template>
  <div class="the-modules">
    <a class="the-module" :href="`tel:${institution.getPhone()}`">
      {{ t('call_institution', { institution: institution.getName() }) }}<br />
      <span class="the-small">{{ institution.getPhone() }}</span>
    </a>
    <a class="the-module" @click="openSafePlaces()">
      {{ t('find_a_safe_help_resource') }}
    </a>
    <a
      v-if="institution.hasChat()"
      class="the-module"
      @click="safeLink(institution.getChat())"
    >
      {{ t('go_to_live_chat') }}
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
