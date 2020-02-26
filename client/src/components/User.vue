<template>
  <div class="User">
    <img src="../assets/user.svg" alt="user" />
    <p>email</p>
    <p>password</p>
    <p>booking</p>
  </div>
</template>

<script>
// import { mapGetters } from "vuex";

export default {
  name: "User"
};
</script>

<style scoped>
.User {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 67%;
}

img {
  width: 5rem;
  margin: 0 1.2rem 0 1.2rem;
  filter: invert(100%);
  margin: 1rem;
}

p {
  margin: 1rem;
}
/* @media screen and (min-width: 420px) {
} */
</style>