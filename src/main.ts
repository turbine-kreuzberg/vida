import { createApp } from 'vue';
import { createI18n } from 'vue-i18n';
import App from './App.vue';

import en from './locales/en';
import de from './locales/de';

const appElement = document.createElement('div');
document.body.append(appElement);

const app = createApp(App);
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

app.use(i18n);
app.mount(appElement);
