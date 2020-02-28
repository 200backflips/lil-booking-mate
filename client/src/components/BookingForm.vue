<template>
  <div class="BookingForm">
    <p>choose a date to book to and from</p>
    <DatePicker />
    <template v-if="userInfo.timePeriod.from === '' && userInfo.timePeriod.to === ''">
      <Button class="main-btn" buttonText="book" :clickHandler="bookDates" />
      <p>you have no dates booked currently</p>
    </template>
    <template v-else>
      <Button class="main-btn" buttonText="cancel" :clickHandler="cancelBooking" />
      <p>you have booked {{ userInfo.timePeriod.from }} to {{ userInfo.timePeriod.to }}</p>
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
  computed: mapGetters(["userInfo"]),
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
  font-size: 1.2rem;
}
.BookingForm > p {
  margin: 1rem;
  text-align: center;
}

.main-btn {
  position: absolute;
  top: 84%;
}
</style>