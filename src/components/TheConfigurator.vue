<script lang="ts" setup>
import { ref, watch } from 'vue';
import { useWidget } from '../composables/useWidget';
import { useInstitutions } from '../composables/useInstitutions';
import TheCurrentSnippet from './TheCurrentSnippet.vue';
import TheHeadline from './TheHeadline.vue';

const { configuration } = useWidget();
const { institutions, findInstitution } = useInstitutions();

const color = ref<string>(configuration.value.getHandColor());
const position = ref<string>(configuration.value.getHandPosition());
const visible = ref<boolean>(configuration.value.isVisible());
const language = ref<string>(configuration.value.getLanguage());
const emergencyNumber = ref<string>(configuration.value.getEmergencyNumber());
const institution = ref<string>(configuration.value.getInstitution().getKey());
const forceOpen = ref<boolean>(false);

watch(color, (v) => configuration.value.setHandColor(v));
watch(position, (v) => configuration.value.setHandPosition(v));
watch(visible, (v) => configuration.value.setHandVisible(v));
watch(language, (v) => configuration.value.setLanguage(v));
watch(emergencyNumber, (v) => configuration.value.setEmergencyNumber(v));
watch(institution, (v) => configuration.value.setInstitution(findInstitution(v)));
watch(forceOpen, (v) => configuration.value.setForceOpen(v));
</script>
<template>
  <div class="the-configurator">
    <div class="the-intro">
      <the-headline>Configure your widget</the-headline>
      Keep Widget open during configuration <input v-model="forceOpen" type="checkbox" />
    </div>
    <div class="the-form">
      <label class="fieldset">
        <span class="label">Institution</span>
        <select v-model="institution" class="select">
          <option
            v-for="institutionOption in institutions"
            :key="institutionOption.getKey()"
            :value="institutionOption.getKey()"
          >
            {{ institutionOption.getKey() }}
          </option>
        </select>
      </label>
      <label class="fieldset">
        <span class="label">Language</span>
        <select v-model="language" class="select">
          <option :value="'en'">English</option>
          <option :value="'de'">German</option>
        </select>
      </label>
      <label class="fieldset">
        <span class="label">Color</span>
        <input v-model="color" type="color" class="color" :placeholder="'#ff0000'" />
      </label>
      <label class="fieldset">
        <span class="label">Position</span>
        <select v-model="position" class="select">
          <option value="bottom-right">Bottom right</option>
          <option value="bottom-left">Bottom left</option>
          <option value="top-right">Top right</option>
          <option value="top-left">Top left</option>
        </select>
      </label>
      <label class="fieldset">
        <span class="label">Emergency Nr.</span>
        <input v-model="emergencyNumber" type="text" class="input" />
      </label>
      <label class="fieldset">
        <span class="label">Show/Hide hand</span>
        <select v-model="visible" class="select">
          <option :value="true">Show hand</option>
          <option :value="false">Hide hand</option>
        </select>
      </label>
    </div>
    <the-current-snippet />
  </div>
</template>
<style scoped lang="scss">
.force-open {
  font-size: 0.9em;
  margin-bottom: 2em;
}

.the-intro {
  margin-bottom: 2em;
}

.the-configurator {
  border: 2px solid var(--dark-rosa);
  padding: 2em;
  border-radius: 1em;
}

.the-form {
  margin-bottom: 2em;
  display: flex;
  flex-flow: row wrap;
  margin-right: -1em;
  row-gap: 1em;
  column-gap: 1.5em;

  .fieldset {
    display: block;
    flex-basis: calc(33.33333333% - 1.3em);

    .label {
      display: block;
      font-size: 0.7em;
      font-weight: bold;
      margin-bottom: 0.5em;
    }

    .input {
      display: block;
      width: calc(100% - 2em);
      height: 2.3em;
      padding: 0 1em;
      line-height: 1;
      border: 1px solid #000;
    }

    .color {
      display: block;
      height: 2.5em;
      width: 100%;
    }

    .select {
      display: block;
      width: 100%;
      height: 2.5em;
      padding-left: 0.5em;
    }

    .check {
      display: block;
      width: 100%;
      height: 2.5em;
    }
  }
}
</style>
