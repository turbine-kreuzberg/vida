import { ref } from 'vue';

const baseUrl = ref<string>('');
const script = document.getElementById('vida-script');

baseUrl.value =
  script instanceof HTMLScriptElement
    ? script.src.split('/').slice(0, -1).join('/') + '/'
    : '/';

export function useBaseUrl() {
  const replacePublicPaths = (content: string) => {
    return content.replaceAll('__public/', baseUrl.value);
  };

  return {
    baseUrl,
    replacePublicPaths
  };
}
