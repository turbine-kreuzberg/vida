import { ref } from 'vue';
import { onClickOutside, onKeyDown } from '@vueuse/core';

export function usePopup() {
  const popupRef = ref(null);
  const isOpen = ref(false);

  function toggle() {
    isOpen.value = !isOpen.value;
  }

  function close() {
    isOpen.value = false;
  }

  onClickOutside(popupRef, () => {
    close();
  });

  onKeyDown('Escape', () => {
    close();
  });

  return {
    isOpen,
    popupRef,
    toggle
  };
}
