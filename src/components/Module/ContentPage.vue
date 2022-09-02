<script lang="ts" setup>
import { IContentPage } from '../../types/content-page';
import TextContent from '../TextContent.vue';
import Headline from '../Headline.vue';

const props = defineProps<{
  contentPage: IContentPage;
}>();
</script>
<template>
  <headline :label="props.contentPage.title" />
  <text-content>
    <div v-html="props.contentPage.content" />
  </text-content>
</template>
