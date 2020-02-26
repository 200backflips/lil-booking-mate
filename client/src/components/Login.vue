<template>
  <form class="Login">
    <FormField labelName="email" inputType="text" :capture="captureEmail" />
    <FormField labelName="password" inputType="password" :capture="capturePassword" />
    <Button buttonText="login" class="main-btn" :clickHandler="toggleLogIn" />
  </form>
</template>

<script>
import Button from "../elements/Button";
import FormField from "../elements/FormField";
import { mapActions } from "vuex";

export default {
  name: "Login",
  components: {
    Button,
    FormField
  },
  methods: {
    ...mapActions(["captureEmail", "capturePassword", "toggleLogIn"])
  }
};
</script>

<style scoped>
.Login {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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