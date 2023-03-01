import { computed, ref } from 'vue';

export function useColors() {
  const colors = ref({
    black: '#000000',
    red: '#fe2245',
    violet: '#000072',
    darkRosa: '#aa0060'
  });

  const snakeToCamel = (string: string) =>
    string
      .toLowerCase()
      .replace(/([-_][a-z])/g, (group) =>
        group.toUpperCase().replace('-', '').replace('_', '')
      );

  const camelToSnake = (string: string) =>
    string.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`);

  const cssVariables = computed((): { [key: string]: string } => {
    const variables: { [key: string]: string } = {};

    for (const color in colors.value) {
      // @ts-ignore
      variables[`--${camelToSnake(color)}`] = colors.value[color];
    }

    return variables;
  });

  const assertColorExists = (color: string) => {
    if (!colorExists(color)) throw new Error(`The given color ${color} does not exist.`);
  };

  const colorExists = (color: string) => {
    return Object.keys(colors.value).includes(snakeToCamel(color));
  };

  const getColor = (color: string): string => {
    assertColorExists(color);

    // @ts-ignore
    return colors.value[snakeToCamel(color)];
  };

  return {
    colors,
    cssVariables,
    getColor,
    colorExists,
    assertColorExists
  };
}
