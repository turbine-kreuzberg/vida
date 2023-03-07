<script lang="ts" setup>
import { computed, defineAsyncComponent, ref } from 'vue';
import { useWidget } from './composables/useWidget';
import { useColors } from './composables/useColors';

const { configuration } = useWidget();
const { cssVariables } = useColors();

const TheHeadline = defineAsyncComponent(() => import('./components/TheHeadline.vue'));

const TheNavigation = defineAsyncComponent(
  () => import('./components/TheNavigation.vue')
);

const TheTextContent = defineAsyncComponent(
  () => import('./components/TheTextContent.vue')
);
const TheConfigurator = defineAsyncComponent(
  () => import('./components/TheConfigurator.vue')
);

const TheNewsletterSubscription = defineAsyncComponent(
  () => import('./components/TheNewsletterSubscription.vue')
);

const TheYoutubeVideo = defineAsyncComponent(
  () => import('./components/TheYoutubeVideo.vue')
);

const TheLogo = defineAsyncComponent(() => import('./components/Svg/TheLogo.vue'));

const color = computed(() => configuration.value.getHandColor());

const style = ref<{ [key: string]: any }>({
  '--color': color,
  ...cssVariables.value
});

const navigation = ref([
  {
    anchor: 'break-the-cycle',
    label: 'about'
  },
  {
    anchor: 'use',
    label: 'use'
  },
  {
    anchor: 'reach-out',
    label: 'reach out'
  }
]);
</script>
<template>
  <div class="the-readme" :style="style">
    <the-logo />
    <the-navigation :items="navigation" />
    <the-headline id="break-the-cycle"> let’s break the cycle</the-headline>
    <the-text-content>
      <p>
        Worldwide, more than one in three women<a
          target="_blank"
          href="https://www.who.int/news-room/fact-sheets/detail/violence-against-women"
          >¹</a
        >
        and up to one in five men<a
          target="_blank"
          href="https://www.aerzteblatt.de/int/archive/article/214902/Domestic-Violence-Against-Men-Prevalence-and-Risk-Factors"
          >²</a
        >
        have experienced intimate partner violence. In most cases, the severity and
        frequency of the violence increase with time. To prevent this spiral of violence,
        help needs to be made available quickly and in an easily accessible way. We are
        convinced that open technology is a powerful tool for providing victims with
        access to support resources and prevention strategies, as well as creating further
        awareness.
      </p>
    </the-text-content>
    <the-headline :level="2" :border-top="true">vida widget</the-headline>
    <the-text-content>
      <p>
        Vida is an open sourced widget designed to provide information and support
        services to people affected by domestic violence. The widget comes in the form of
        an adjustable code snippet that can be easily integrated into virtually every
        website on the Internet.
      </p>
      <p>
        Users open the widget by clicking on a button in the form of the global hand
        signal for help – or even a simple link hidden on the page. This opens an info box
        featuring a number of resources, which range from a local phone hotline based on
        the user’s current country, a chat button to reach out to a support organization
        nearby, and further information services. Any interaction with the widget is
        untraceable and anonymous, and as such cannot be tracked by abusers.
      </p>
      <p>
        To see how it works, click on the hand on your screen to open the widget on this
        page or simply
        <a href="#" onclick="window.vida.open(); return false;">click here</a>.
      </p>
    </the-text-content>
    <the-youtube-video code="mu2jxWnbC4g" />
    <the-text-content>
      <p>
        Read more about:
        <a href="https://turbinekreuzberg.com/en/topics/vida-widget" target="_blank"
          >How We Built Vida</a
        >.
      </p>
    </the-text-content>
    <the-headline id="use" :border-top="true">Usage</the-headline>
    <the-text-content>
      <p>There are <u>three simple steps</u> to using the Vida Widget on your website.</p>
      <ul>
        <li>Use the configurator below to set up the widget according to your needs.</li>
        <li>Copy the generated code snippet.</li>
        <li>
          Paste the code directly on any website that you wish to add the Vida Widget to.
        </li>
      </ul>
    </the-text-content>
    <the-configurator />
    <the-headline id="reach-out" :border-top="true">Reach out to us:</the-headline>
    <the-text-content>
      <p>
        For more information about Vida and how you can participate, please reach out to
        the team at
        <a href="mailto:vida@turbinekreuzberg.com">vida@turbinekreuzberg.com</a>.
      </p>
      <p>
        For media inquiries, please contact
        <a href="mailto:press@turbinekreuzberg.com">press@turbinekreuzberg.com</a>.
      </p>
    </the-text-content>
    <the-newsletter-subscription v-once />
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

.the-logo {
  margin-bottom: 0.2em;
  width: 300px;
}

.the-current-snippet {
  font-size: 0.7em;
}

.the-configurator {
  margin-bottom: 2em;
}

.the-youtube-video {
  margin-bottom: 2em;
}

.the-newsletter-subscription {
  margin-bottom: 2em;
}

.the-navigation {
  margin-bottom: 1em;
}
</style>
