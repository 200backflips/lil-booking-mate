<template>
  <div class="BookingForm">
    <form class="BookingForm">
      <div class="form-field">
        <label>email</label>
        <input type="text" />
      </div>
      <div v-if="this.isLoggedIn" class="form-field">
        <label>time period</label>
        <input type="date" />
      </div>
      <div v-else class="form-field">
        <label>password</label>
        <input type="password" />
      </div>
      <BookingButton />
    </form>
  </div>
</template>

<script>
import BookingButton from "../elements/BookingButton.vue";
import { mapGetters } from "vuex";

export default {
  name: "BookingForm",
  computed: mapGetters(["allUsers"]),
  components: {
    BookingButton
  },
  data() {
    return {
      isLoggedIn: false
    };
  }
};
</script>

<style scoped>
.BookingForm {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: nowrap;
  height: 68vh;
  font-size: 1.2rem;
}
.form-field {
  width: 15rem;
  margin-bottom: 2rem;
  padding: 0.6rem;
  background: #2b2b2b;
}
.form-field > input {
  width: 100%;
  margin-top: 1rem;
  font-size: 1.4rem;
  background: #2b2b2b;
  color: #ffffff;
  border: none;
  border-bottom: 2px solid rgba(255, 255, 255, 0.4);
  outline: none;
}

/* @media screen and (min-width: 420px) {
  } */
</style>
