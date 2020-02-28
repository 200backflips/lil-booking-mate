<template>
  <div class="App" id="app">
    <div class="content">
      <Header />
      <router-view />
      <Footer />
    </div>
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";

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
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background: #1f1f1f;
  color: #ffffff;
}
.content {
  height: 100%;
  width: 100%;
}

@media screen and (min-width: 420px) {
  .App {
    justify-content: center;
  }
  .content {
    height: 650px;
    width: 600px;
    border: 2px solid rgba(255, 255, 255, 0.2);
    box-shadow: 5px 5px 25px rgba(0, 0, 0, 0.2);
  }
}
</style>
