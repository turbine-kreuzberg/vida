<script setup lang="ts">
import { shallowRef } from 'vue';
import TextContent from '../Molecule/TextContent.vue';
import Page from '../Organism/Module/Page.vue';
import { IPage } from '../../types/page';
import { IModule } from '../../types/module';

const emergencyNumber = '112';
const institution = {
  name: 'Amnesty International',
  phone: '004912341234'
};
const currentModule = shallowRef<IModule | null>(null);

const back = () => {
  currentModule.value = null;
};

const linkWithWarning = (link: string) => {
  const accepted = window.confirm(
    'Warning this link will appear in your browser history. You are leaving anonymous mode here. Do you want to proceed? '
  );

  if (accepted) self.location.href = link;
};

const openPage = (page: IPage) => {
  currentModule.value = {
    component: Page,
    props: { page }
  };
};

const pages: IPage[] = [
  {
    title: 'The Universal Hand Signal for Help',
    content: 'here some content'
  },
  {
    title: 'About this widget',
    content: 'here some content'
  }
];
</script>

<template>
  <div class="melb-help-center">
    <div v-if="!currentModule">
      <text-content :small="true">
        <p>
          This widget provides anonymous access to assistance for
          <strong>victims of domestic violence.</strong>
        </p>
        <p>
          This box will disappear immediately if you click the X button or type "ESC" on
          your keyboard or click outside of this popup.
        </p>
      </text-content>
      <text-content :important="true" :centered="true">
        If you or someone you know is in immediate danger, please call
        <a :href="`tel:${emergencyNumber}`">{{ emergencyNumber }}</a>
      </text-content>
      <div class="melb-modules">
        <a class="melb-module" :href="`tel:${institution.phone}`">
          Call {{ institution.name }}<br />
          <span class="melb-small">{{ institution.phone }}</span>
        </a>
        <a class="melb-module"> Find a safe help resource </a>
        <a
          class="melb-module"
          @click="
            linkWithWarning(
              'https://login.beranet.de/chatlight/index.php?firma_id=850&type=infochat'
            )
          "
        >
          Go to livechat
        </a>
      </div>
      <div class="melb-link-list">
        <div v-for="page in pages">
          <a href="#" @click.prevent="openPage(page)">{{ page.title }}</a>
        </div>
      </div>
    </div>
    <div v-else>
      <div class="melb-back" @click="back">&lt; Back</div>
      <component :is="currentModule.component" v-bind="currentModule.props" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.melb-help-center {
  padding: 20px;
}

a {
  color: inherit;
  text-decoration: none;
}

.melb-small {
  font-size: 0.8em;
  color: #666;
}

.melb-modules {
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  margin-bottom: 40px;
}

.melb-module {
  border: 1px solid #eee;
  border-radius: 10px;
  padding: 20px;
  cursor: pointer;
  text-align: center;

  &:hover {
    border-color: #000;
  }
}

.melb-back {
  border-bottom: 1px solid #eee;
  padding: 0 0 10px 0;
  margin-bottom: 20px;
  font-weight: bold;
  cursor: pointer;
}

.melb-link-list {
  display: flex;
  flex-direction: column;
  row-gap: 20px;

  a {
    text-decoration: underline;
  }
}
</style>
