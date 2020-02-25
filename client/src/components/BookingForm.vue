<template>
  <div class="BookingForm">
    <form class="BookingForm">
      <label>name</label>
      <input list="users" type="none" />
      <datalist id="users">
        <option value="dis guy" />
        <option value="dat guy" />
        <option value="other guy" />
      </datalist>
      <label>time period</label>
      <input type="date" />
      <BookingButton />
    </form>
  </div>
</template>

<script>
import BookingButton from "../elements/BookingButton.vue";

export default {
  name: "BookingForm",
  components: {
    BookingButton
  }
};
</script>

<style scoped>
.BookingForm {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
  height: 80vh;
  margin: 0 auto;
  font-size: 1.5rem;
}
.BookingForm > form label {
  margin: 0.5rem;
}
.BookingForm > form input[list] {
  margin: 0.5rem 0.5rem 2rem 0.5rem;
  font-size: 1.5rem;
}
.BookingForm > form input[type="date"] {
  margin: 0.5rem 0.5rem 2rem 0.5rem;
  font-size: 1.5rem;
}

/* @media screen and (min-width: 600px) {
  } */
</style>
