<template>
  <div class="Header">
    <h1>lil booking mate</h1>
    <div class="logout-btn">
      <button @click.prevent="logOut">
        <router-link to="/">
          <img src="../assets/logout.svg" alt="logout" />
        </router-link>
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Header",
  methods: {
    ...mapActions(["logOut"])
  }
};
</script>

<style scoped>
.Header {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 10%;
  color: rgba(255, 255, 255, 0.8);
}
.Header > h1 {
  font-size: 1.8rem;
}

.logout-btn {
  margin-left: 2rem;
}
.logout-btn > button {
  border: none;
  background: #1f1f1f;
  cursor: pointer;
}

img {
  width: 1.5rem;
  filter: invert(100%);
}

@media screen and (min-width: 420px) {
  img:hover {
    filter: invert(60%);
  }
}
</style>
