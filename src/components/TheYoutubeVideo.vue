<script lang="ts" setup>
import { computed } from 'vue';

const props = defineProps<{
  code: string;
}>();

const source = computed(() => `https://www.youtube-nocookie.com/embed/${props.code}`);
</script>
<template>
  <div class="the-youtube-video">
    <!--suppress HtmlDeprecatedAttribute -->
    <iframe
      :src="source"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </div>
</template>
<style lang="scss" scoped>
.the-youtube-video {
  aspect-ratio: 16 / 9;

  iframe {
    width: 100%;
    height: 100%;
  }
}
</style>
