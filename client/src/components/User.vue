<template>
  <div class="User">
    <img src="../assets/user.svg" alt="user" />
    <p>click any of the information that you wish to update</p>
    <DisplayUserInfo
      infoType="email"
      :toggler="changeEmail"
      :captureInfo="captureEmail"
      :updateInfo="updateEmail"
      :userInfo="userInfo.email"
      :error="errorMessage"
    />
    <DisplayUserInfo
      infoType="password"
      :toggler="changePassword"
      :captureInfo="capturePassword"
      :updateInfo="updatePassword"
      :userInfo="userInfo.password"
      :error="errorMessage"
    />
    <template v-if="hasActiveBooking">
      <p>active booking</p>
      <p>from: {{ parseDate(userInfo.timePeriod.from) }}</p>
      <p>to: {{ parseDate(userInfo.timePeriod.to) }}</p>
    </template>
    <p v-else>you have no dates booked currently</p>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import DisplayUserInfo from "../elements/DisplayUserInfo";

export default {
  name: "User",
  components: {
    DisplayUserInfo
  },
  computed: mapGetters([
    "userInfo",
    "hasActiveBooking",
    "changeEmail",
    "changePassword",
    "errorMessage"
  ]),
  methods: {
    ...mapActions([
      "captureEmail",
      "capturePassword",
      "updateEmail",
      "updatePassword"
    ]),
    parseDate(date) {
      return date.toString().match(/^[a-z ]+[\d ]{7}/i)[0];
    }
  }
};
</script>

<style scoped>
.User {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 82%;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
}
.User > p {
  margin: 0.5rem;
  text-align: center;
  font-size: 1rem;
  width: 82%;
}

img {
  width: 4rem;
  filter: invert(100%);
  margin: 1rem;
}
</style>