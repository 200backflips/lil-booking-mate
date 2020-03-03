<template>
  <div class="BookingForm">
    <p v-if="hasActiveBooking">you have an active booking</p>
    <p v-else>{{ picker ? 'choose a date to book from' : 'choose a date to book to' }}</p>
    <DatePicker />
    <template v-if="hasActiveBooking">
      <Button class="main-btn" buttonText="cancel" :clickHandler="cancelBooking" />
      <div :class="showModal ? 'modal show' : 'modal'">
        <h4>booking successful!</h4>
        <p>active booking</p>
        <p>from: {{ userInfo.timePeriod.from }}</p>
        <p>to: {{ userInfo.timePeriod.to }}</p>
      </div>
    </template>
    <template v-else>
      <Button class="main-btn" buttonText="book" :clickHandler="bookDates" />
      <div :class="showModal ? 'modal show' : 'modal'">
        <p>your booking has been cancelled</p>
      </div>
    </template>
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
  computed: mapGetters([
    "userInfo",
    "picker",
    "showModal",
    "hasActiveBooking",
    "bookingIsCancelled"
  ]),
  methods: {
    ...mapActions(["bookDates", "cancelBooking"])
  }
};
</script>

<style scoped>
.BookingForm {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow: auto;
  font-size: 1rem;
}
.BookingForm > p {
  margin: 1rem;
  text-align: center;
}

.main-btn {
  margin-top: 1rem;
}

.modal {
  visibility: hidden;
  opacity: 0;
  position: absolute;
  top: 30%;
  padding: 1rem;
  background: #3c3c3c;
  border-radius: 10px;
  box-shadow: 12px 7px 20px rgba(0, 0, 0, 0.2);
  transition: ease-in 1.5s;
}
.modal > h4 {
  padding-bottom: 1rem;
  text-align: center;
}
.modal > p {
  padding: 0.3rem;
}

.show {
  visibility: visible;
  opacity: 1;
  transition: ease-in 200ms;
}
</style>