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
    />
    <DisplayUserInfo
      infoType="password"
      :toggler="changePassword"
      :captureInfo="capturePassword"
      :updateInfo="updatePassword"
      :userInfo="userInfo.password"
    />
    <p
      v-if="userInfo.timePeriod.from === '' && userInfo.timePeriod.to === '' "
    >you have no dates booked currently</p>
    <template v-else>
      <p>active booking</p>
      <p>from: {{ userInfo.timePeriod.from }}</p>
      <p>to: {{ userInfo.timePeriod.to }}</p>
    </template>
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
    ])
  }
};
</script>

<style scoped>
.User {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 75%;
  overflow: auto;
}
.User > p {
  margin: 0.5rem;
  text-align: center;
  font-size: 1.2rem;
  width: 80%;
}

img {
  width: 4rem;
  filter: invert(100%);
  margin: 1rem;
}
</style>