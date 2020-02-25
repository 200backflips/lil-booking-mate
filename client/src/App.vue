<template>
  <div class="App" id="app">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    Footer
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Roboto&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Roboto", sans-serif;
}

.App {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
  height: 100vh;
  width: 100vw;
  margin: 0 auto;
  color: #ffffff;
  background: #1f1f1f;
}

/* @media screen and (min-width: 420px) {
  .content {
    margin-top: 4rem;
    height: 85vh;
    width: 600px;
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.3);
  }
} */
</style>
