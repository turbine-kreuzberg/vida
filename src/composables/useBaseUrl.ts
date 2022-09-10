import { ref } from 'vue';

export function useBaseUrl() {
  const baseUrl = ref(new URL('./../../', import.meta.url).href);
  const publicUrl = ref(new URL('./../../', import.meta.url).href);

  const url = (path: string) => baseUrl.value + path;

  const replacePublicPaths = (content: string) => {
    return content.split('@public/').join(publicUrl.value);
  };

  return {
    url,
    baseUrl,
    replacePublicPaths
  };
}
