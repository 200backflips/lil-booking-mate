<template>
  <div class="BookingForm">
    <p>choose a date to book to and from</p>
    <DatePicker />
    <template v-if="userInfo.timePeriod === ''">
      <Button class="main-btn" buttonText="book" :clickHandler="bookDate" />
      <p>you have no dates booked currently</p>
    </template>
    <template v-else>
      <Button class="main-btn" buttonText="cancel" :clickHandler="cancelBooking" />
      <p>you have booked {{ userInfo.timePeriod }}</p>
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
    ...mapActions(["bookDate", "cancelBooking"])
  }
};
</script>

<style scoped>
.BookingForm {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  overflow: auto;
  font-size: 1.2rem;
}
.BookingForm > p {
  margin: 1rem;
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