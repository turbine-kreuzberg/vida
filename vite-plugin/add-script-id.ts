export const addScriptId = () => {
  return {
    name: 'html-transform',
    transformIndexHtml(html: string) {
      if (process.env.NODE_ENV === 'development') return;
      return html.replace(
        /<script type="module"/,
        '<script id="vida-script" type="module"'
      );
    }
  };
};
