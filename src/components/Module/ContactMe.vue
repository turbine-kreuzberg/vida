<script setup lang="ts">
import Headline from '../Headline.vue';
import TextContent from '../TextContent.vue';

const send = () => {
  alert('Now send this content.');
};
</script>
<template>
  <headline label="Send a message to us" />
  <text-content>
    If you pick "call-me" option, we will only proceed the call, when we here your
    code-word...
  </text-content>
  <form @submit.prevent="send()">
    <div class="fieldset">
      <label class="fieldset-label">Your name</label>
      <input class="fieldset-input" />
    </div>
    <div class="fieldset">
      <label class="fieldset-label">Please contact me via:</label>
      <input class="fieldset-input" placeholder="Not implemented yet" disabled />
    </div>
    <div class="fieldset">
      <label class="fieldset-label">Code word</label>
      <input class="fieldset-input" />
    </div>
    <div class="fieldset">
      <label class="fieldset-label">Your message</label>
      <textarea class="fieldset-input"></textarea>
    </div>
    <button class="button-submit" type="submit" disabled>Send</button>
  </form>
</template>
<style lang="scss" scoped>
.fieldset {
  position: relative;
  margin-bottom: 10px;

  &-label {
    position: absolute;
    top: 0;
    left: 0;
    background: #000;
    color: #fff;
    font-size: 0.9em;
    padding: 0.1em 10px;
  }

  &-input {
    box-sizing: border-box;
    display: block;
    border: 1px solid #eee;
    padding: 30px 10px 10px 10px;
    width: 100%;
  }

  textarea {
    height: 140px;
  }
}

.button-submit {
  background: #64b444;
  padding: 10px;
  width: 50%;
  border: none;
  color: #fff;
}
</style>
