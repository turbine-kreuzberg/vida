import { createApp, defineAsyncComponent } from 'vue';
import { createI18n } from 'vue-i18n';
import TheWidget from './TheWidget.vue';

import en from './locales/en';
import de from './locales/de';

const widgetElement = document.createElement('div');
document.body.append(widgetElement);

const widget = createApp(TheWidget);
const i18n = createI18n({
  legacy: false,
  locale: 'de',
  fallbackLocale: 'en',
  warnHtmlInMessage: false,
  warnHtmlMessage: false,
  fallbackWarn: false,
  missingWarn: false,
  messages: {
    en,
    de
  }
});

widget.use(i18n);
widget.mount(widgetElement);

const vidaReadmeElement = document.querySelector('#vida-readme');

if (vidaReadmeElement) {
  const readme = createApp(defineAsyncComponent(() => import('./TheReadme.vue')));
  readme.use(i18n);
  readme.mount(vidaReadmeElement);
}
