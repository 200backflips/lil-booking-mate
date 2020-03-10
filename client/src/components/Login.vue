<template>
  <form class="Login" autocomplete="on">
    <FormField labelName="email" inputType="text" :capture="captureEmail" />
    <FormField labelName="password" inputType="password" :capture="capturePassword" />
    <div class="error-message">
      <p>{{errorMessage}}</p>
    </div>
    <Button buttonText="login" class="main-btn" :clickHandler="verifyLogIn" />
  </form>
</template>

<script>
import Button from "../elements/Button";
import FormField from "../elements/FormField";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Login",
  components: {
    Button,
    FormField
  },
  computed: mapGetters(["errorMessage"]),
  methods: {
    ...mapActions(["captureEmail", "capturePassword", "verifyLogIn"])
  }
};
</script>

<style scoped>
.Login {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.error-message {
  width: 70%;
  text-align: center;
  font-style: italic;
  font-weight: bold;
  font-size: 1.2rem;
}

.main-btn {
  margin: 1rem;
}
</style>