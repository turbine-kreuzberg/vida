<script lang="ts" setup>
import { ref, watch } from 'vue';
import { useWidget } from '../composables/useWidget';

const { configuration } = useWidget();

const color = ref<string>(configuration.value.getHandColor());
const position = ref<string>('bottom-right');
const visible = ref<boolean>(true);
const language = ref<string>('en');

watch(color, (v) => configuration.value.setHandColor(v));
watch(position, (v) => configuration.value.setHandPosition(v));
watch(visible, (v) => configuration.value.setHandVisible(v));
watch(language, (v) => configuration.value.setLanguage(v));
</script>
<template>
  <div class="the-configurator">
    <label class="fieldset">
      <span class="label">Color</span>
      <input v-model="color" type="color" class="input" :placeholder="'#ff0000'" />
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
      <span class="label">Show/Hide hand</span>
      <select v-model="visible" class="select">
        <option :value="true">Show hand</option>
        <option :value="false">Hide hand</option>
      </select>
    </label>
    <label class="fieldset">
      <span class="label">Language</span>
      <select v-model="language" class="select">
        <option :value="'en'">English</option>
        <option :value="'de'">German</option>
      </select>
    </label>
  </div>
</template>
<style scoped lang="scss">
.the-configurator {
  margin-bottom: 1em;
  display: flex;
  flex-flow: row wrap;
  margin-right: -1em;

  .fieldset {
    display: block;
    flex-basis: calc(33.33333333% - 3em - 6px);
    border: 1px solid #ddd;
    border-radius: 10px;
    padding: 1em;
    margin-right: 1em;
    margin-bottom: 1em;

    .label {
      display: block;
      font-size: 0.9em;
      font-weight: bold;
      margin-bottom: 1em;
    }

    .input {
      display: block;
      width: 100%;
      height: 2.5em;
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
