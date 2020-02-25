<template>
  <div class="Footer">
    <router-link to="/">
      <img src="../assets/home.svg" alt="home" />
    </router-link>
    <img src="../assets/newsfeed.svg" alt="home" />
    <img src="../assets/telegram.svg" alt="home" />
    <img src="../assets/user.svg" alt="home" />
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
  background: #2f2fff;
  width: 100vw;
  padding: 0.5rem;
}
img {
  width: 2rem;
  height: 10vh;
  margin: 0 1.2rem 0 1.2rem;
  filter: invert(100%);
}
</style>
