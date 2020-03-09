<template>
  <div class="App" id="app">
    <div class="container">
      <Header />
      <div class="content">
        <router-view />
      </div>
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
html,
body {
  height: 100%;
  width: 100%;
  font-family: "Roboto", sans-serif;
  font-size: 100%;
  background: #1f1f1f;
  color: #ffffff;
}

.App {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
}

.container {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
}

.content {
  flex: 10;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
}

@media screen and (min-width: 500px) {
  .container {
    width: calc(100vw / 1.25);
    max-height: 650px;
    border: 2px solid rgba(255, 255, 255, 0.2);
    box-shadow: 10px 5px 25px rgba(0, 0, 0, 0.2);
  }
}
@media screen and (min-width: 870px) {
  .container {
    width: 690px;
  }
}
</style>
