<template>
  <div :class="className">
    <button @click.prevent="clickHandler">{{ buttonText }}</button>
  </div>
</template>

<script>
export default {
  name: "Button",
  props: {
    className: String,
    buttonText: String,
    clickHandler: Function
  }
};
</script>

<style scoped>
button {
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
  button:hover {
    color: #c2c2c2;
    cursor: pointer;
  }
}
</style>
