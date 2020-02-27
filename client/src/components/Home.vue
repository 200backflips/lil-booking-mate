<template>
  <div class="Home">
    <BookingForm v-if="isLoggedIn" />
    <Login v-else />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Login from "./Login";
import BookingForm from "./BookingForm";

export default {
  name: "Home",
  components: {
    Login,
    BookingForm
  },
  computed: mapGetters(["isLoggedIn"])
};
</script>

<style scoped>
.Home {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: nowrap;
  height: 75%;
  margin: 0 auto;
  font-size: 1rem;
}
</style>
