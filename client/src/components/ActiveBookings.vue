<template>
  <div class="ActiveBookings">
    <div v-for="user in allUsers" :key="user.email">
      <p>{{ user.email }}</p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "ActiveBookings",
  components: {},
  computed: mapGetters(["allUsers"])
};
</script>

<style scoped>
.ActiveBookings {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 82%;
  overflow: auto;
}
</style>