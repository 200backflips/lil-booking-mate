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
      <p>active booking:</p>
      <p>
        <strong>{{ parseDate(userInfo.timePeriod.from) }}</strong>
      </p>
      <p>to</p>
      <p>
        <strong>{{ parseDate(userInfo.timePeriod.to) }}</strong>
      </p>
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
  align-items: center;
}

p {
  width: 90%;
  margin: 0.5rem;
  padding: 0.3rem;
  text-align: center;
  font-size: 1rem;
}

a {
  padding: 0.5rem;
  text-align: center;
  font-size: 1rem;
  color: #ffffff;
  text-decoration: none;
}

strong {
  color: #f8ab59;
}

img {
  width: 4.5rem;
  filter: invert(100%);
  margin: 2.5rem 0 0.8rem 0;
}
</style>