<template>
  <div class="Header">
    <h1>lil booking mate</h1>
    <div class="logout-btn">
      <router-link to="/" v-if="isLoggedIn" @click.native="logOut">
        <img src="../assets/logout.svg" alt="logout" />
      </router-link>
      <img v-else src="../assets/logout.svg" alt="logout" class="logged-out" />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Header",
  methods: {
    ...mapActions(["logOut"])
  },
  computed: mapGetters(["isLoggedIn"])
};
</script>

<style scoped>
.Header {
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  color: #ffad6b;
}

h1 {
  font-size: 2.2rem;
}

.logout-btn {
  margin-left: 2rem;
}
.logout-btn > a {
  border: none;
  background: #3f4d80;
  cursor: pointer;
}

img {
  width: 1.8rem;
  filter: invert(100%);
}

.logged-out {
  filter: invert(60%);
}

@media screen and (min-width: 670px) {
  img:hover {
    filter: invert(60%);
  }

  .Header {
    min-height: 45px;
  }
}
</style>
