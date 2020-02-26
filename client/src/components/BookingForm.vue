<template>
  <div class="BookingForm">
    <form class="BookingForm">
      <FormField labelName="email" inputType="text" v-bind:capture="captureEmail" />
      <FormField labelName="password" inputType="password" v-bind:capture="capturePassword" />
      <Button v-if="isLoggedIn" buttonText="book" v-bind:clickHandler="toggleLogIn" />
      <Button v-else buttonText="login" v-bind:clickHandler="toggleLogIn" />
    </form>
  </div>
</template>

<script>
import Button from "../elements/Button.vue";
import FormField from "../elements/FormField.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "BookingForm",
  components: {
    Button,
    FormField
  },
  computed: mapGetters(["isLoggedIn"]),
  methods: {
    ...mapActions(["captureEmail", "capturePassword", "toggleLogIn"])
  }
};
</script>

<style scoped>
.BookingForm {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: nowrap;
  height: 65%;
  font-size: 1rem;
}
</style>
