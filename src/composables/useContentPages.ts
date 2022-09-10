// noinspection HtmlUnknownTarget

import { IContentPage } from '../types/content-page';
import { ref } from 'vue';
import { useApp } from './useApp';

export function useContentPages() {
  const { configuration } = useApp();

  if (!configuration.value) {
    throw new Error(
      'Content pages can not be provided before initializing configuration'
    );
  }

  const contentPages = ref<IContentPage[]>([
    {
      title: 'The Universal Hand Signal for Help',
      content: `
        <p>
          The universal "<strong>Signal for Help</strong>" is a simple one-handed sign someone can use to silently
          show they need help and want someone to check in with them in a safe way.
        </p>
        <p style="text-align: center">
          <img 
            style="display:inline-block; width: 75%; height: auto;" 
            alt="hand sign" 
            src="@public/img/hand-sign.png" />
        </p>
        <p>This can be used in a video call or video post, in a public place, etc.</p>
      `
    },
    {
      title: 'What can you do if someone signals to you?',
      content: `
        <p>
          If you see someone use the Signal for Help, check in with the person safely to find out what they
          need and want you to do.
        </p>
        <p>They may:</p>
        <ul>
          <li>want to talk or get information</li>
          <li>ask for help finding services</li>
          <li><strong>want to use your phone</strong> or device to search for help</li>
        </ul>
        <p>Please do not assume they want you to call the authorities. Let them take the lead.</p>
        <p>Ask questions that can be answered with "Yes" or "No."</p>
      `
    },
    {
      title: `Information about ${configuration.value.institution.name}`,
      content: `${configuration.value.institution.information}`
    },
    {
      title: 'About this Widget',
      content: `
        <h3>How can I host this widget on my site?</h3>
        <p>
          Go to <a href="https://github.com/turbine-kreuzberg/vida#readme">breakout git repository</a>
          to copy and paste a widget for your region and institution (ngo).
        </p>
      `
    }
  ]);

  // We replace content @public with our scripts basepath
  const processedContentPages = ref(
    contentPages.value.map((contentPage) =>
      Object.assign({}, contentPage, {
        content: contentPage.content
          .split('@public/')
          .join(new URL('/', import.meta.url).href)
      })
    )
  );

  return {
    contentPages: processedContentPages
  };
}
