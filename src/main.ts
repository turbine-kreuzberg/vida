import { createApp } from 'vue';
import App from './MelbWidget.vue';

const melbWidget = document.createElement('div');
document.body.append(melbWidget);

createApp(App).mount(melbWidget);
