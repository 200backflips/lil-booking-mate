<template>
  <div class="ActiveBookings">
    <Booking v-for="user in currentUser" :key="user.email" :user="user" :showCurrentUser="true" />
    <Booking v-for="user in bookings" :key="user.email" :user="user" :showCurrentUser="false" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Booking from "../elements/Booking";

export default {
  name: "ActiveBookings",
  components: {
    Booking
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
  computed: mapGetters(["allUsers", "userInfo"])
};
</script>

<style scoped>
.ActiveBookings {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 82%;
  overflow: scroll;
}
</style>