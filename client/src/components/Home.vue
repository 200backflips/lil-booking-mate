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

<style>
.Home {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
}
</style>