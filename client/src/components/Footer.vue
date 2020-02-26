<template>
  <div class="Footer">
    <router-link to="/">
      <img src="../assets/home.svg" alt="home" />
    </router-link>
    <img src="../assets/newsfeed.svg" alt="booked-dates" />
    <img src="../assets/telegram.svg" alt="message" />
    <router-link to="/user">
      <img src="../assets/user.svg" alt="user" />
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style scoped>
.Footer {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #2f2fff;
  height: 13%;
}
img {
  width: 1.9rem;
  margin: 0 1.2rem 0 1.2rem;
  filter: invert(100%);
}

@media screen and (min-width: 420px) {
  img:hover {
    filter: invert(60%);
  }
}
</style>
