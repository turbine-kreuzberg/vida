<script setup lang="ts">
import { IContentPage } from '../../types/content-page';
import ContentPage from '../Module/ContentPage.vue';
import { useApp } from '../../composables/useApp';
import { useContentPages } from '../../composables/useContentPages';

const { currentModule } = useApp();

const { contentPages } = useContentPages();

const openContentPage = (contentPage: IContentPage) => {
  currentModule.value = {
    component: ContentPage,
    props: { contentPage }
  };
};
</script>
<template>
  <div class="melb-content-pages">
    <div v-for="contentPage in contentPages">
      <a href="#" @click.prevent="openContentPage(contentPage)">
        {{ contentPage.title }}
      </a>
    </div>
  </div>
</template>
<style scoped lang="scss">
.melb-content-pages {
  display: flex;
  flex-direction: column;
  row-gap: 20px;

  a {
    text-decoration: underline;
    color: inherit;
  }
}
</style>
