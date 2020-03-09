<template>
  <div class="ActiveBookings">
    <!-- <Booking v-for="user in currentUser" :key="user.email" :user="user" :showCurrentUser="true" />
    <Booking v-for="user in bookings" :key="user.email" :user="user" :showCurrentUser="false" />-->
    <div v-for="user in currentUser" :key="user.email" class="Booking">
      <h4>you</h4>
      <template v-if="user.hasActiveBooking">
        <p>active booking:</p>
        <p>from: {{ parseDate(user.timePeriod.from) }}</p>
        <p>to: {{ parseDate(user.timePeriod.to) }}</p>
      </template>
      <p v-else>no active bookings</p>
    </div>
    <div v-for="user in bookings" :key="user.email" class="Booking">
      <h4>{{ user.email }}</h4>
      <template v-if="user.hasActiveBooking">
        <p>active booking:</p>
        <p>from: {{ parseDate(user.timePeriod.from) }}</p>
        <p>to: {{ parseDate(user.timePeriod.to) }}</p>
      </template>
      <p v-else>no active bookings</p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
// import Booking from "../elements/Booking";

export default {
  name: "ActiveBookings",
  components: {
    // Booking
  },
  data() {
    return {
      bookings: [],
      currentUser: []
    };
  },
  mounted() {
    this.bookings = this.allUsers.filter(
      user => user.email !== this.userInfo.email
    );
    this.currentUser = this.allUsers.filter(
      user => user.email === this.userInfo.email
    );
  },
  computed: mapGetters(["allUsers", "userInfo"]),
  methods: {
    parseDate(date) {
      return date.toString().match(/^[a-z ]+[\d ]{7}/i)[0];
    }
  }
};
</script>

<style scoped>
.ActiveBookings {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 82%;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
}

.Booking {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  height: 100%;
  margin: 0.5rem;
  padding: 0.7rem;
  background: #2b2b2b;
  font-size: 1.1rem;
}
.Booking p {
  padding: 0.5rem;
}
.Booking h4 {
  padding: 1rem;
}
</style>