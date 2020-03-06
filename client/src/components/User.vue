<template>
  <div class="User">
    <img src="../assets/user.svg" alt="user" />
    <p>click on the information that you would like to update</p>
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
    <router-link to="/" v-if="hasActiveBooking">
      <p>active booking</p>
      <p>from: {{ parseDate(userInfo.timePeriod.from) }}</p>
      <p>to: {{ parseDate(userInfo.timePeriod.to) }}</p>
    </router-link>
    <router-link to="/" v-else>
      <p>you have no dates booked currently</p>
    </router-link>
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
  justify-content: center;
  align-items: center;
  height: 82%;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
}
.User > p {
  margin: 0.5rem;
  text-align: center;
  font-size: 1rem;
  /* width: 82%; */
}
.User > a {
  padding: 0.5rem;
  text-align: center;
  font-size: 1rem;
  color: #ffffff;
  text-decoration: none;
}

img {
  width: 5rem;
  filter: invert(100%);
  margin: 1rem;
}
</style>