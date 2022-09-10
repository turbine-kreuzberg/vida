import { useI18n } from 'vue-i18n';

export function useSafeLink() {
  const { t } = useI18n();

  const safeLink = (link: string) => {
    const accepted = window.confirm(t('index.safe_link_note'));

    if (accepted) self.location.href = link;
  };

  return {
    safeLink
  };
}
