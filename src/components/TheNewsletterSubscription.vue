<script lang="ts" setup>
import TheButton from './TheButton.vue';
import { computed, ref } from 'vue';

const iframeReference = ref<HTMLElement | null>(null);
const isActive = ref(false);
const isLoading = ref(false);

const iframe = computed((): HTMLElement => {
  if (!iframeReference.value) throw new Error('Iframe not found');
  return iframeReference.value;
});

const activate = () => {
  isActive.value = true;
  isLoading.value = true;

  if (document.head.querySelector('#the-newsletter-subscription-script')) {
    return;
  }

  const script = document.createElement('script');
  script.setAttribute('id', 'the-newsletter-subscription-script');
  script.setAttribute('src', 'https://app.mailjet.com/pas-nc-embedded-v1.js');
  document.head.appendChild(script);

  script.addEventListener('load', async () => {
    await new Promise((r) => window.setTimeout(r, 500));
    isLoading.value = false;
    window.scrollTo({ top: iframe.value.offsetTop, behavior: 'smooth' });
  });
};
</script>
<template>
  <div class="the-newsletter-subscription">
    <the-button v-if="!isActive" :color="'var(--dark-rosa)'" @click="activate">
      Keep me up to date
    </the-button>
    <the-button v-if="isLoading" :disabled="true">Loading ...</the-button>
    <!--suppress HtmlDeprecatedAttribute -->
    <iframe
      ref="iframeReference"
      data-w-type="embedded"
      frameborder="0"
      scrolling="no"
      marginheight="0"
      marginwidth="0"
      src="https://0kpw4.mjt.lu/wgt/0kpw4/m6p/form?c=b5cc1666"
      width="100%"
      :class="{ 'the-hidden': !isActive, 'the-invisible': isLoading }"
    ></iframe>
  </div>
</template>
<style lang="scss" scoped>
iframe {
  border: 2px solid var(--red);
  border-radius: 2em;
}
.the-hidden {
  display: none;
}
.the-invisible {
  opacity: 0;
}
</style>
