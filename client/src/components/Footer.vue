<template>
  <div class="Footer" v-if="isLoggedIn">
    <router-link to="/">
      <img src="../assets/home.svg" alt="home" />
    </router-link>
    <router-link to="/bookings">
      <img src="../assets/newsfeed.svg" alt="booked-dates" />
    </router-link>
    <router-link to="/user">
      <img src="../assets/user.svg" alt="user" />
    </router-link>
  </div>
  <div class="Footer" v-else>
    <router-link to="/">
      <img src="../assets/home.svg" alt="home" />
    </router-link>
    <img src="../assets/newsfeed.svg" class="logged-out" alt="booked-dates" />
    <img src="../assets/user.svg" class="logged-out" alt="user" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Footer",
  computed: mapGetters(["isLoggedIn"])
};
</script>

<style scoped>
.Footer {
  flex: 1.3;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ce8365;
}

img {
  width: 2.2rem;
  margin: 0 1.2rem 0 1.2rem;
  filter: invert(100%);
}

a {
  outline: none;
}

.logged-out {
  filter: invert(70%);
}

@media screen and (min-width: 670px) {
  img:hover {
    filter: invert(70%);
  }

  .Footer {
    min-height: 45px;
    border-radius: 0 0 10px 10px;
  }
}
</style>
