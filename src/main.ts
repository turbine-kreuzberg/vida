import { createApp } from 'vue';
import './style.css';
import App from './MelbWidget.vue';

const melbWidget = document.createElement('div');
document.body.append(melbWidget);

createApp(App).mount(melbWidget);
