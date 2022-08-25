import { Ref, ref } from 'vue';
import { onClickOutside, onKeyDown } from '@vueuse/core';

export function usePopup() {
  const isOpen = ref(false);
  const popupRef = ref(null);

  const ignoredElements: Ref[] = [];

  function toggle() {
    isOpen.value = !isOpen.value;
  }

  function close() {
    isOpen.value = false;
  }

  function ignoreElementOnOutsideClick(reference: Ref) {
    ignoredElements.push(reference);
  }

  onClickOutside(
    popupRef,
    () => {
      close();
    },
    { ignore: ignoredElements }
  );

  onKeyDown('Escape', () => {
    close();
  });

  return {
    toggle,
    isOpen,
    popupRef,
    ignoreElementOnOutsideClick
  };
}
