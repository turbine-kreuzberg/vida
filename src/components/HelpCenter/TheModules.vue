<script lang="ts" setup>
import { useWidget } from '../../composables/useWidget';
import TheMap from '../Module/TheMap.vue';
import { useSafeLink } from '../../composables/useSafeLink';
import { useI18n } from 'vue-i18n';
import { computed } from 'vue';
import TheActionButton from '../TheActionButton.vue';

const { t } = useI18n();
const { configuration } = useWidget();
const { safeLink } = useSafeLink();

const institution = computed(() => configuration.value.getInstitution());

const openSafePlaces = () => {
  configuration.value.setActiveModule({
    component: TheMap
  });
};
</script>
<template>
  <div class="the-modules">
    <the-action-button :color="'red'" :href="`tel:${institution.getPhone()}`">
      {{ t('call_institution', { institution: institution.getName() }) }}<br />
      <span class="the-underline">{{ institution.getPhone() }}</span>
    </the-action-button>
    <the-action-button :color="'violet'" @click="openSafePlaces()">
      {{ t('find_a_safe_help_resource') }}
    </the-action-button>
    <the-action-button
      v-if="institution.hasChat()"
      :color="'dark-rosa'"
      @click="safeLink(institution.getChat())"
    >
      {{ t('go_to_live_chat') }}
    </the-action-button>
  </div>
</template>
<style lang="scss" scoped>
a {
  color: inherit;
  text-decoration: none;
}

.the-underline {
  text-decoration: underline;
}

.the-modules {
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  margin-bottom: 40px;
}
</style>
