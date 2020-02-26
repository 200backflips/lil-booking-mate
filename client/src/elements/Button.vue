<template>
  <div class="Button">
    <button v-on:click.prevent="clickHandler">{{ buttonText }}</button>
  </div>
</template>

<script>
export default {
  name: "Button",
  props: {
    buttonText: String,
    clickHandler: Function
  }
};
</script>

<style scoped>
.Button button {
  width: 15rem;
  height: 3.2rem;
  font-size: 1.4rem;
  color: #ffffff;
  background: #2f2fff;
  border: none;
  border-radius: 30px;
  outline: none;
}

@media screen and (min-width: 420px) {
  .Button button:hover {
    color: #c2c2c2;
    cursor: pointer;
  }
}
</style>
