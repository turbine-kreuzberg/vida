<script lang="ts" setup>
import snippet from './../plain/snippet-code.txt?raw';
import { computed, ref } from 'vue';
import { useWidget } from '../composables/useWidget';
import TheActionButton from './TheActionButton.vue';

const { configuration } = useWidget();

const copySuccess = ref(false);

const snippetPrepared = computed(() => {
  let snippedPrepared = snippet;

  const config = configuration.value;
  const institution = config.getInstitution();
  const chat = institution.hasChat() ? institution.getChat() : null;

  const escape = (string: string) => string.replace(/\\"/g, '&quot;');

  const markers: { [key: string]: string } = {
    color: `"${config.getHandColor()}"`,
    position: `"${config.getHandPosition()}"`,
    visible: config.isHandVisible() ? 'true' : 'false',
    language: `"${config.getLanguage()}"`,
    emergencyNumber: `"${config.getEmergencyNumber()}"`,
    institutionName: `"${institution.getName()}"`,
    institutionPhone: `"${institution.getPhone()}"`,
    institutionInformation: `"${escape(institution.getInformation())}"`,
    institutionChat: chat ? `"${chat}"` : 'null'
  };

  for (const marker in markers) {
    snippedPrepared = snippedPrepared.replace(`###${marker}###`, markers[marker]);
  }

  return snippedPrepared;
});

const copyToClipboard = async () => {
  const code = document.querySelector('.the-current-snippet pre')?.innerHTML;

  function htmlDecode(input: string): string {
    const doc = new DOMParser().parseFromString(input, 'text/html');
    return doc.documentElement.textContent || '';
  }

  if (!code) {
    throw new Error('Could not grasp code...');
  }

  await navigator.clipboard.writeText(htmlDecode(code));
  copySuccess.value = true;

  window.setTimeout(() => (copySuccess.value = false), 1000);
};
</script>
<template>
  <div class="the-current-snippet">
    <the-action-button color="dark-rosa" @click="copyToClipboard">
      Copy to clipboard
      <span v-if="copySuccess">(done)</span>
    </the-action-button>
    <pre v-text="snippetPrepared" />
  </div>
</template>
<style lang="scss" scoped>
.the-action-button {
  margin-bottom: 1em;
}
.the-current-snippet {
  position: relative;
  background: #fff;
  color: #888;

  pre {
    overflow: auto;
    height: 400px;
    padding: 2em;
    margin: 0;
    font-size: 0.8em;
    border: 1px solid #ccc;
    border-radius: 4px;

    &::-webkit-scrollbar {
      width: 0.5em;
      height: 0.5em;
    }

    &::-webkit-scrollbar-thumb {
      background-color: var(--dark-rosa);
    }

    &::-webkit-scrollbar-corner {
      background: transparent;
    }
  }
}
</style>
