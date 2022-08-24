<script setup lang="ts">
import ContactMe from '../Organism/Module/ContactMe.vue';
import { shallowRef } from 'vue';
import Headline from '../Atom/Headline.vue';
import TextContent from '../Molecule/TextContent.vue';

const currentModule = shallowRef<any>(null);

const openContactMe = async () => {
  currentModule.value = ContactMe;
};

const back = () => {
  currentModule.value = null;
};
</script>

<template>
  <div class="melb-help-center">
    <div v-if="!currentModule">
      <headline label="How do you want to proceed?" />
      <text-content>
        This box is completely anonymous and not traceable. In order to close it just
        click somewhere outside of the box, or simple use the "ESCAPE" key on your
        keyboard.
      </text-content>
      <div class="melb-modules">
        <a class="melb-module" @click="openContactMe()">Contact me</a>
        <a class="melb-module">Info</a>
        <a class="melb-module" href="tel:112">Call police</a>
        <a class="melb-module">Shelters</a>
      </div>
    </div>
    <div v-else class="melb-back" @click="back">&lt; Back</div>
    <component :is="currentModule" />
  </div>
</template>

<style scoped lang="scss">
.melb-help-center {
  padding: 20px;
}

.melb-modules {
  display: grid;
  margin: 0 -5px;
  grid-template-columns: 1fr 1fr;
}

.melb-module {
  border: 1px solid #eee;
  border-radius: 10px;
  padding: 20px;
  margin: 5px;
  cursor: pointer;
  text-align: center;

  &:hover {
    border-color: #000;
  }
}

.melb-back {
  border-bottom: 1px solid #eee;
  padding: 0 0 10px 0;
  margin-bottom: 20px;
  font-weight: bold;
  cursor: pointer;
}
</style>
