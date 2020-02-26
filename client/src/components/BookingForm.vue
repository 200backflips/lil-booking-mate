<template>
  <div class="BookingForm">
    <DatePicker />
    <Button class="main-btn" buttonText="book" :clickHandler="verifyLogIn" />
  </div>
</template>

<script>
import Button from "../elements/Button";
import DatePicker from "./DatePicker";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "BookingForm",
  components: {
    Button,
    DatePicker
  },
  computed: mapGetters(["isLoggedIn"]),
  methods: {
    ...mapActions(["captureEmail", "capturePassword", "verifyLogIn"])
  }
};
</script>

<style scoped>
.BookingForm {
  display: flex;
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