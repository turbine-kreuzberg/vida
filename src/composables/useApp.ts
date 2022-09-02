import { computed, ref, shallowRef } from 'vue';
import { IConfiguration } from '../types/configuration';
import { IModule } from '../types/module';

// Global state
const isOpen = ref<boolean>(false);
const configuration = ref<IConfiguration | null>(null);
const currentModule = shallowRef<IModule | null>();

// Global computed state
const position = computed((): string => {
  if (!configuration.value) return 'bottom-right';
  if (!configuration.value.widget.position) return 'bottom-right';
  return configuration.value.widget.position;
});

const showHand = computed((): boolean => {
  return configuration.value?.widget.showHand || false;
});

export function useApp() {
  const init = (configurationParameter: IConfiguration) => {
    configuration.value = configurationParameter;
  };

  const configure = (configurationParameter: IConfiguration) => {
    configuration.value = configurationParameter;
  };

  const open = () => {
    isOpen.value = true;
  };

  const close = () => {
    isOpen.value = false;
    currentModule.value = null;
  };

  const dispatchLoaded = () => {
    window.dispatchEvent(
      new CustomEvent('breakout-loaded', {
        detail: { init, configure, open, close }
      })
    );
  };

  return {
    init,
    configure,
    open,
    close,
    dispatchLoaded,
    currentModule,
    isOpen,
    configuration,
    position,
    showHand
  };
}