import { computed, ref, watch } from 'vue';
import { IConfiguration } from '../types/configuration';
import { useI18n } from 'vue-i18n';
import { Configuration } from '../models/Configuration';
import { Institution } from '../models/Institution';

// Global state
const configurationState = ref<Configuration | null>(null);

export function useWidget() {
  const { locale } = useI18n();

  const language = computed(() => configuration.value.getLanguage());

  const isInitialized = computed(() => configurationState.value !== null);

  const init = (config: IConfiguration | Configuration) => {
    if (!(config instanceof Configuration)) config = Configuration.createLegacy(config);

    configurationState.value = config;

    watch(language, () => (locale.value = configuration.value.getLanguage()), {
      immediate: true
    });
  };

  const dispatchLoaded = () => {
    const open = () => configuration.value.open();
    window.dispatchEvent(
      new CustomEvent('vida-loaded', {
        detail: { init, open, Configuration, Institution }
      })
    );
  };

  const configuration = computed((): Configuration => {
    if (!configurationState.value) {
      throw new Error('Trying to access configuration before initializing vida widget.');
    }
    return configurationState.value as Configuration;
  });

  return {
    init,
    dispatchLoaded,
    isInitialized,
    configuration
  };
}
