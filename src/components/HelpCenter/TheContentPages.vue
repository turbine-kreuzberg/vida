<script setup lang="ts">
import { IContentPage } from '../../types/content-page';
import TheContentPage from '../Module/TheContentPage.vue';
import { useApp } from '../../composables/useApp';
import { useContentPages } from '../../composables/useContentPages';

const { currentModule } = useApp();

const { contentPages } = useContentPages();

const openContentPage = (contentPage: IContentPage) => {
  currentModule.value = {
    component: TheContentPage,
    props: { contentPage }
  };
};
</script>
<template>
  <div class="the-content-pages">
    <div v-for="contentPage in contentPages" :key="contentPage.title">
      <a href="#" @click.prevent="openContentPage(contentPage)">
        {{ contentPage.title }}
      </a>
    </div>
  </div>
</template>
<style scoped lang="scss">
.the-content-pages {
  display: flex;
  flex-direction: column;
  row-gap: 20px;

  a {
    text-decoration: underline;
    color: inherit;
  }
}
</style>
