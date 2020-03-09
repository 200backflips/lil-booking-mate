<template>
  <div class="Booking">
    <h4>{{ showCurrentUser ? 'you' : user.email }}</h4>
    <template v-if="user.hasActiveBooking">
      <p>active booking:</p>
      <p>from: {{ parseDate(user.timePeriod.from) }}</p>
      <p>to: {{ parseDate(user.timePeriod.to) }}</p>
    </template>
    <p v-else>no active bookings</p>
  </div>
</template>

<script>
export default {
  name: "Booking",
  props: {
    user: Object,
    showCurrentUser: Boolean
  },
  methods: {
    parseDate(date) {
      return date.toString().match(/^[a-z ]+[\d ]{7}/i)[0];
    }
  }
};
</script>

<style scoped>
.Booking {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 85%;
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