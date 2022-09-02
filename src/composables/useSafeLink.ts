export function useSafeLink() {
  const safeLink = (link: string) => {
    const accepted = window.confirm(
      'Warning this link will appear in your browser history. You are leaving anonymous mode here. Do you want to proceed? '
    );

    if (accepted) self.location.href = link;
  };

  return {
    safeLink
  };
}
