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
    visible: configuration.value.isHandVisible() ? 'true' : 'false'
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

const style = computed(() => {
  return {
    '--color': configuration.value.getHandColor()
  };
});
</script>
<template>
  <a :style="style" class="copy" @click="copyToClipboard">
    &#x2398; Copy code to clipboard.
    <span v-if="copySuccess">(done)</span>
  </a>
  <div class="the-current-snippet">
    <div class="scroll-area">
      <pre v-text="snippetPrepared" />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.the-current-snippet {
  padding: 1em;
  background: #043454;
  color: #fff;
  height: 200px;
  overflow: auto;
  font-size: 0.8em;

  pre {
    margin: 0;
  }

  &::-webkit-scrollbar {
    width: 0.5em;
    height: 0.5em;
  }

  &::-webkit-scrollbar-track {
  }

  &::-webkit-scrollbar-thumb {
    background-color: #124973;
  }
}

.copy {
  display: inline-block;
  cursor: pointer;
  margin-bottom: 1em;
  padding: 0.7em 1em;
  font-size: 0.8em;
  background: var(--color);
  color: #000;

  &:hover {
    opacity: 0.8;
  }
}
</style>
