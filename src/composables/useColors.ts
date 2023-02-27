import { ref } from 'vue';

export function useColors() {
  const red = ref('#fe2245');
  const violet = ref('#000072');
  const darkRosa = ref('#aa0060');
  const cssVariables = ref({
    '--red': red.value,
    '--violet': violet.value,
    '--dark-rosa': darkRosa.value
  });

  return {
    red,
    violet,
    darkRosa,
    cssVariables
  };
}
