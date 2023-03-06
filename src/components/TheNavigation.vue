<script lang="ts" setup>
interface IItem {
  label: string;
  anchor: string;
}

const props = defineProps<{
  items: IItem[];
}>();

const goto = (item: IItem) => {
  const element = document.getElementById(item.anchor);

  if (!element) throw new Error('Could not find target element on navigation click.');

  const targetTop = element.offsetTop - 100;
  window.scrollTo({ top: targetTop, behavior: 'smooth' });
};
</script>
<template>
  <div class="the-navigation">
    <a
      v-for="item in props.items"
      :key="item.anchor"
      class="the-navigation-item"
      :href="`#${item.anchor}`"
      @click.prevent="goto(item)"
    >
      {{ item.label }}
    </a>
  </div>
</template>
<style lang="scss" scoped>
.the-navigation {
  display: flex;
  flex-wrap: wrap;
  column-gap: 0.5em;
  row-gap: 0.5em;
  position: sticky;
  top: -2px;
  background: #fff;
  padding: 1em 0;
  z-index: 100;
}

.the-navigation-item {
  display: block;
  border: 1px solid var(--red);
  font-weight: bold;
  border-radius: 0.5em;
  padding: 0.3em 1em;
  text-decoration: none;
  color: var(--red);

  &:hover {
    border-color: var(--violet);
    background-color: var(--violet);
    color: #fff;
  }
}
</style>
