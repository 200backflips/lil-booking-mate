<template>
  <div class="App" id="app">
    <div class="background-image" />
    <div class="content">
      <Header />
      <BookingForm />
      <Footer />
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import BookingForm from "./components/BookingForm.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    BookingForm,
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
  margin: 0 auto;
  color: #ffffff;
}
.background-image {
  position: fixed;
  display: block;
  background: url("./assets/29th.jpeg") center no-repeat;
  filter: blur(6px);
  z-index: 0;
  width: 1108px;
  height: 1108px;
  object-fit: cover;
}

.content {
  position: fixed;
  z-index: 1;
  width: 100vw;
  background: rgba(0, 0, 0, 0.3);
}

@media screen and (min-width: 600px) {
  .content {
    margin-top: 4rem;
    height: 85vh;
    width: 600px;
    box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.3);
  }
}
</style>
