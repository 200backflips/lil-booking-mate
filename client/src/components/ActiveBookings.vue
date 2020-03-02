<template>
  <div class="ActiveBookings">
    <div v-for="user in allUsers" :key="user.email" class="user">
      <p>{{ user.email === userInfo.email ? 'you' : user.email }}</p>
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

export default {
  name: "ActiveBookings",
  components: {},
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
  overflow: auto;
  font-size: 1.1rem;
}

.user {
  width: 80%;
  margin: 0.5rem;
  padding: 0.5rem;
  background: #2b2b2b;
}
.user p {
  padding: 0.5rem;
}
</style>