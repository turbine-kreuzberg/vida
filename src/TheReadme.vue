<script lang="ts" setup>
import { computed, defineAsyncComponent, ref } from 'vue';
import { useWidget } from './composables/useWidget';
import { useColors } from './composables/useColors';
import TheHeadline from './components/TheHeadline.vue';

const { configuration } = useWidget();
const { cssVariables } = useColors();

const TheTextContent = defineAsyncComponent(
  () => import('./components/TheTextContent.vue')
);
const TheConfigurator = defineAsyncComponent(
  () => import('./components/TheConfigurator.vue')
);

const TheLogo = defineAsyncComponent(() => import('./components/TheLogo.vue'));

const color = computed(() => configuration.value.getHandColor());

const style = ref<{ [key: string]: any }>({
  '--color': color,
  ...cssVariables.value
});
</script>
<template>
  <div class="the-readme" :style="style">
    <the-logo />
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
    </the-text-content>
    <the-configurator />
    <the-headline :border-top="true">Reach out to us:</the-headline>
    <the-text-content> Will follow ...</the-text-content>
  </div>
</template>
<style lang="scss" scoped>
.the-readme {
  padding: 20px;
  font-family: 'Work Sans', sans-serif;
  color: var(--violet);
  margin: 20px auto;
  max-width: 800px;
  font-size: 25px;

  @media (max-width: 500px) {
    font-size: 16px;
  }
}

.the-current-snippet {
  font-size: 0.7em;
}

.the-configurator {
  margin-bottom: 2em;
}
</style>
