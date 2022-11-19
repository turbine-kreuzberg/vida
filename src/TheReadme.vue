<script lang="ts" setup>
import { computed, defineAsyncComponent, ref } from 'vue';
import { useWidget } from './composables/useWidget';

const { configuration } = useWidget();

const TheHeadline = defineAsyncComponent(() => import('./components/TheHeadline.vue'));
const TheTextContent = defineAsyncComponent(
  () => import('./components/TheTextContent.vue')
);
const TheCurrentSnippet = defineAsyncComponent(
  () => import('./components/TheCurrentSnippet.vue')
);
const TheConfigurator = defineAsyncComponent(
  () => import('./components/TheConfigurator.vue')
);

const color = computed(() => configuration.value.getHandColor());

const style = ref<any>({
  '--color': color
});
</script>
<template>
  <div class="the-readme" :style="style">
    <the-headline>VIDA</the-headline>
    <the-text-content>
      <p>
        The widget can be applied on any website. The outcome will be a little hand on the
        screen, which can be used by victims to retrieve information & help. The
        interaction with the widget is not trackable by abusers.
      </p>
      <p>
        Use the hand on the screen to open the widget or just
        <a href="#" onclick="window.vida.open(); return false;">click here</a>
        .
      </p>
      <hr />
    </the-text-content>
    <the-headline>Usage</the-headline>
    <the-text-content>
      <p>Configure your snippet copy & paste it to your website.</p>
    </the-text-content>
    <the-configurator />
    <the-current-snippet />
  </div>
</template>
<style lang="scss" scoped>
.the-readme {
  border: 6px solid var(--color);
  border-radius: 10px;
  padding: 20px;
  font-family: monospace;
  margin: 20px auto;
  max-width: 600px;
  font-size: 16px;
}
</style>
