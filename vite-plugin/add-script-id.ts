// noinspection JSUnusedGlobalSymbols

const isDevelopment =
  process.env.NODE_ENV === 'development' || process.env.NODE_ENV === undefined;

export const addScriptId = () => {
  return {
    name: 'html-transform',
    transformIndexHtml(html: string) {
      if (isDevelopment) return;

      return html.replace(
        /<script type="module"/,
        '<script id="vida-script" type="module"'
      );
    }
  };
};
