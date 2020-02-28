<template>
  <div class="Header">
    <div class="logout-btn">
      <button @click.prevent="logOut">
        <router-link to="/">
          <img src="../assets/logout.svg" alt="logout" />
        </router-link>
      </button>
    </div>
    <h1>lil booking mate</h1>
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
  position: relative;
  display: flex;
  flex-direction: column;
  height: 12%;
  color: rgba(255, 255, 255, 0.8);
}
.Header > h1 {
  position: absolute;
  padding: 1rem;
  align-self: center;
  font-size: 1.8rem;
}

.logout-btn {
  margin: 1rem;
  align-self: flex-end;
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
