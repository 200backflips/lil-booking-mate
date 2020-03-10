<template>
  <div class="form-field">
    <label>{{ labelName }}</label>
    <input :type="inputType" v-model="userInput" :input="capture(userInput)" />
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
  width: 15rem;
  margin-bottom: 2rem;
  padding: 0.6rem;
  background: #374474;
}
.form-field > input {
  width: 100%;
  margin-top: 1rem;
  font-size: 1.1rem;
  background: #374474;
  color: #ffffff;
  border: none;
  border-bottom: 2px solid rgba(255, 255, 255, 0.4);
  outline: none;
}
.form-field > input:-webkit-autofill,
.form-field > input:-webkit-autofill:hover,
.form-field > input:-webkit-autofill:focus {
  -webkit-text-fill-color: #ffffff;
  box-shadow: 0 0 0 1000px #374474 inset;
  font-size: 1.1rem;
}
</style>