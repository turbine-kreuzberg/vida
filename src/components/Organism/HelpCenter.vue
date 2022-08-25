<script setup lang="ts">
import { shallowRef } from 'vue';
import TextContent from '../Molecule/TextContent.vue';
import Page from '../Organism/Module/Page.vue';
import { IPage } from '../../types/page';
import { IModule } from '../../types/module';
import ScrollArea from '../Molecule/ScrollArea.vue';
import { IConfiguration } from '../../types/configuration';

// @ts-ignore
const configuration: IConfiguration = window.breakout;
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
    content: `
    <p>
      The universal "<strong>Signal for Help</strong>" is a simple one-handed sign someone can use to silently
      show they need help and want someone to check in with them in a safe way.
    </p>
    <p>
      <img
        style="width: 75%; height: auto;"
        alt="hand sign"
        src="https://turbine-kreuzberg.github.io/melb/img/hand-sign.png"
      />
    </p>
    <p>This can be used in a video call or video post, in a public place, etc.</p>
  `
  },
  {
    title: 'What can you do if someone signals to you?',
    content: `
      <p>
        If you see someone use the Signal for Help, check in with the person safely to find out what they
        need and want you to do.
      </p>
      <p>They may:</p>
      <ul>
        <li>want to talk or get information</li>
        <li>ask for help finding services</li>
        <li><strong>want to use your phone</strong> or device to search for help</li>
      </ul>
      <p>Please do not assume they want you to call the authorities. Let them take the lead.</p>
      <p>Ask questions that can be answered with "Yes" or "No."</p>
    `
  },
  {
    title: `Information about ${configuration.institution.name}`,
    content: `${configuration.institution.information}`
  },
  {
    title: 'About this Widget',
    content: `
      <h3>How can I host this widget on my site?</h3>
      <p>
        Go to <a href="https://github.com/turbine-kreuzberg/melb#readme">breakout git repository</a>
        to copy and paste a widget for your region and institution (ngo).
      </p>
      <h3>Legal disclaimer & data storage info</h3>
      <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
    `
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
        <a :href="`tel:${configuration.emergencyNumber}`">{{
          configuration.emergencyNumber
        }}</a>
      </text-content>
      <div class="melb-modules">
        <a class="melb-module" :href="`tel:${configuration.institution.phone}`">
          Call {{ configuration.institution.name }}<br />
          <span class="melb-small">{{ configuration.institution.phone }}</span>
        </a>
        <a class="melb-module"> Find a safe help resource </a>
        <a
          v-if="configuration.institution.chat"
          class="melb-module"
          @click="linkWithWarning(configuration.institution.chat)"
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
      <scroll-area>
        <component :is="currentModule.component" v-bind="currentModule.props" />
      </scroll-area>
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
