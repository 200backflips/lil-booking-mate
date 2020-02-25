<template>
  <div class="BookingButton">
    <button v-on:click.prevent="toggleBooking">{{ this.isBooked ? 'cancel' : 'book' }}</button>
  </div>
</template>

<script>
export default {
  name: "BookingButton",
  data() {
    return {
      isBooked: false
    };
  },
  methods: {
    toggleBooking() {
      this.isBooked = !this.isBooked;
    }
  }
};
</script>

<style scoped>
.BookingButton button {
  width: 14rem;
  height: 3.2rem;
  font-size: 1.4rem;
  color: #ffffff;
  background: #2f2fff;
  border: none;
  border-radius: 30px;
  outline: none;
}
</style>
