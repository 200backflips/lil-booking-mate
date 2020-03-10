<template>
  <div class="Booking">
    <h3>{{ showCurrentUser ? 'you' : user.email }}</h3>
    <template v-if="user.hasActiveBooking">
      <p>active booking:</p>
      <p>
        <strong>{{ parseDate(user.timePeriod.from) }}</strong>
      </p>
      <p>to</p>
      <p>
        <strong>{{ parseDate(user.timePeriod.to) }}</strong>
      </p>
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
  background: #3a487b;
  font-size: 1.1rem;
}

p {
  padding: 0.3rem;
}

h3 {
  padding: 0.8rem;
  text-decoration: underline;
}

strong {
  color: #f8ab59;
}
</style>