<template>
  <div v-if="hasActiveBooking" :class="showModal ? 'Modal show' : 'Modal'">
    <h4>booking successful!</h4>
    <p>active booking</p>
    <p>from: {{ parseDate(userInfo.timePeriod.from) }}</p>
    <p>to: {{ parseDate(userInfo.timePeriod.to) }}</p>
  </div>
  <div v-else-if="errorModal" :class="showModal ? 'Modal show' : 'Modal'">
    <p>the date is too close to another booking</p>
  </div>
  <div v-else :class="showModal ? 'Modal show' : 'Modal'">
    <p>your booking has been cancelled</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Modal",
  props: {
    heading: String,
    content: String
  },
  computed: mapGetters([
    "showModal",
    "hasActiveBooking",
    "errorModal",
    "userInfo"
  ]),
  methods: {
    parseDate(date) {
      return date.toString().match(/^[a-z ]+[\d ]{7}/i)[0];
    }
  }
};
</script>

<style scoped>
.Modal {
  visibility: hidden;
  position: absolute;
  top: 20%;
  /* max-width: 85%; */
  opacity: 0;
  padding: 1rem;
  background: #3c3c3c;
  border-radius: 10px;
  box-shadow: 12px 7px 20px rgba(0, 0, 0, 0.2);
  transition: ease-in 1.5s;
}
.Modal > h4 {
  padding-bottom: 1rem;
  text-align: center;
}
.Modal > p {
  padding: 0.3rem;
}

.show {
  visibility: visible;
  opacity: 1;
  transition: ease-in 200ms;
}
</style>