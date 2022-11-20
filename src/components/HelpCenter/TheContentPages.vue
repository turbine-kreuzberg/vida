<script setup lang="ts">
import { IContentPage } from '../../types/content-page';
import TheContentPage from '../Module/TheContentPage.vue';
import { useWidget } from '../../composables/useWidget';
import { useContentPages } from '../../composables/useContentPages';

const { configuration } = useWidget();
const { contentPages } = useContentPages();

const openContentPage = (contentPage: IContentPage) => {
  if (!configuration.value) {
    throw new Error('Must initialize widget before setting active module');
  }

  configuration.value.setActiveModule({
    component: TheContentPage,
    props: { contentPage }
  });
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
