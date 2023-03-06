<script lang="ts" setup>
import { onMounted } from 'vue';

onMounted(() => {
  if (document.head.querySelector('#the-newsletter-subscription-script')) {
    return;
  }

  const element = document.createElement('script');
  element.setAttribute('id', 'the-newsletter-subscription-script');
  element.setAttribute('src', 'https://app.mailjet.com/pas-nc-embedded-v1.js');
  document.head.appendChild(element);
});
</script>
<template>
  <div class="the-newsletter-subscription">
    <!--suppress HtmlDeprecatedAttribute -->
    <iframe
      data-w-type="embedded"
      frameborder="0"
      scrolling="no"
      marginheight="0"
      marginwidth="0"
      src="https://0kpw4.mjt.lu/wgt/0kpw4/m6p/form?c=b5cc1666"
      width="100%"
      height="700"
    ></iframe>
  </div>
</template>
