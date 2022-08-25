<script lang="ts" setup>
import { IPage } from '../../../types/page';
import Headline from '../../Atom/Headline.vue';
import TextContent from '../../Molecule/TextContent.vue';

const props = defineProps<{
  page: IPage;
}>();
</script>
<template>
  <headline :label="props.page.title" />
  <text-content>
    <div v-html="props.page.content" />
  </text-content>
</template>
