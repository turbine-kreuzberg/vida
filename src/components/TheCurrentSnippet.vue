<script lang="ts" setup>
import snippet from './../plain/snippet-code.txt?raw';
import { computed, ref } from 'vue';
import { useWidget } from '../composables/useWidget';

const { configuration } = useWidget();

const copySuccess = ref(false);

const snippetPrepared = computed(() => {
  let snippedPrepared = snippet;

  const markers: { [key: string]: string } = {
    color: configuration.value.getHandColor(),
    position: configuration.value.getHandPosition(),
    visible: configuration.value.isHandVisible() ? 'true' : 'false',
    language: configuration.value.getLanguage()
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
    <div class="copy" @click="copyToClipboard">
      Copy code to clipboard.
      <span v-if="copySuccess">(done)</span>
    </div>
    <pre v-text="snippetPrepared" />
  </div>
</template>
<style lang="scss" scoped>
.the-current-snippet {
  position: relative;
  background: #043454;
  color: #fff;

  pre {
    overflow: auto;
    height: 200px;
    padding: 2em;
    margin: 0;
    font-size: 0.8em;

    &::-webkit-scrollbar {
      width: 0.5em;
      height: 0.5em;
    }

    &::-webkit-scrollbar-thumb {
      background-color: rgba(255, 255, 255, 0.5);
    }

    &::-webkit-scrollbar-corner {
      background: transparent;
    }
  }

  .copy {
    display: block;
    cursor: pointer;
    padding: 0.7em 1em;
    font-size: 0.8em;
    border-bottom: 2px solid #ffffff;
    color: #ffffff;
    text-align: center;

    &:hover {
      background: #00000066;
    }
  }
}
</style>
