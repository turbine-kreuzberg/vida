<script lang="ts" setup>
import { IContentPage } from '../../types/content-page';
import TheTextContent from '../TheTextContent.vue';
import TheHeadline from '../TheHeadline.vue';

const props = defineProps<{
  contentPage: IContentPage;
}>();
</script>
<template>
  <the-headline :label="props.contentPage.title" />
  <the-text-content>
    <div v-html="props.contentPage.content" />
  </the-text-content>
</template>
