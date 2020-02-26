<template>
  <form class="Login">
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
}

.main-btn {
  position: fixed;
  top: 74%;
}

@media screen and (min-width: 420px) {
  .main-btn {
    top: 69%;
  }
}
</style>