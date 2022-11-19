// noinspection HtmlUnknownTarget

import { IContentPage } from '../types/content-page';
import { computed } from 'vue';
import { useWidget } from './useWidget';
import { useBaseUrl } from './useBaseUrl';
import { useI18n } from 'vue-i18n';

export function useContentPages() {
  const { configuration } = useWidget();
  const { replacePublicPaths } = useBaseUrl();
  const { t } = useI18n();

  if (!configuration.value) {
    throw new Error(
      'Content pages can not be provided before initializing configuration'
    );
  }

  const contentPages = computed<IContentPage[]>(() => [
    {
      title: t('content_page.universal_hand_signal.title'),
      content: t('content_page.universal_hand_signal.content')
    },
    {
      title: t('content_page.what_can_you_do.title'),
      content: t('content_page.what_can_you_do.content')
    },
    {
      title: `Information about ${configuration.value.getInstitution().getName()}`,
      content: `${configuration.value.getInstitution().getInformation()}`
    },
    {
      title: t('content_page.about_this_widget.title'),
      content: t('content_page.about_this_widget.content')
    }
  ]);

  // We replace content @public with our scripts basepath
  const processedContentPages = computed(() =>
    contentPages.value.map(
      (contentPage): IContentPage => ({
        title: contentPage.title,
        content: replacePublicPaths(contentPage.content)
      })
    )
  );

  return {
    contentPages: processedContentPages
  };
}
