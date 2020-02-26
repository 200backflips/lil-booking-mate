<template>
  <div class="form-field">
    <label>{{ labelName }}</label>
    <input
      v-bind:type="inputType"
      v-model="userInput"
      v-on:input="capture(userInput)"
      autocomplete="on"
    />
  </div>
</template>

<script>
export default {
  name: "FormField",
  props: {
    labelName: String,
    inputType: String,
    capture: Function
  },
  data() {
    return {
      userInput: ""
    };
  }
};
</script>

<style scoped>
.form-field {
  width: 90%;
  margin-bottom: 2rem;
  padding: 0.6rem;
  background: #2b2b2b;
}
.form-field > input {
  width: 100%;
  margin-top: 1rem;
  font-size: 1.1rem;
  background: #2b2b2b;
  color: #ffffff;
  border: none;
  border-bottom: 2px solid rgba(255, 255, 255, 0.4);
  outline: none;
}
</style>