import { institutions } from '../databases/institutions';
import { computed } from 'vue';

export function useInstitutions() {
  const findInstitution = (name: string) => {
    const institution = institutions.find((v) => v.getKey() === name);

    if (!institution) throw new Error(`Could not find institution by name: ${name}`);

    return institution;
  };

  return {
    institutions: computed(() => institutions),
    findInstitution
  };
}
