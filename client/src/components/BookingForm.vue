<template>
  <div class="BookingForm">
    <p v-if="hasActiveBooking">you have an active booking</p>
    <p v-else>{{ picker ? 'choose a date to book from' : 'choose a date to book to' }}</p>
    <DatePicker />
    <template v-if="hasActiveBooking">
      <Button class="main-btn" buttonText="cancel" :clickHandler="cancelBooking" />
    </template>
    <template v-else>
      <Button class="main-btn" buttonText="book" :clickHandler="bookDates" />
    </template>
    <Modal />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Button from "../elements/Button";
import DatePicker from "./DatePicker";
import Modal from "../elements/Modal";

export default {
  name: "BookingForm",
  components: {
    Button,
    DatePicker,
    Modal
  },
  data() {
    return {
      activeBooking: false
    };
  },
  computed: mapGetters(["userInfo", "picker", "showModal", "hasActiveBooking"]),
  methods: {
    ...mapActions(["bookDates", "cancelBooking"])
  }
};
</script>

<style scoped>
.BookingForm {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1rem;
}
.BookingForm > p {
  margin: 1rem;
  text-align: center;
}

.main-btn {
  margin-top: 1rem;
}
</style>