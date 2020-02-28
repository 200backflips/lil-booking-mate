<template>
  <div class="User">
    <img src="../assets/user.svg" alt="user" />
    <form class="user-details" autocomplete="off">
      <p>click any of the information that you wish to update</p>
      <template v-if="changeEmail">
        <FormField labelName="email" inputType="text" :capture="captureEmail" />
        <Button buttonText="update" class="update-btn" :clickHandler="updateEmail" />
        <div class="error-message">
          <p>{{errorMessage}}</p>
        </div>
      </template>
      <button v-else @click.prevent="toggleUserInfo('email')">email: {{ userInfo.email }}</button>
      <template v-if="changePassword">
        <FormField labelName="password" inputType="password" :capture="capturePassword" />
        <Button buttonText="update" class="update-btn" :clickHandler="updatePassword" />
        <div class="error-message">
          <p>{{errorMessage}}</p>
        </div>
      </template>
      <button
        v-else
        @click.prevent="toggleUserInfo('password')"
        class="password-text"
      >password: ••••••</button>
      <p
        v-if="userInfo.timePeriod.from === '' && userInfo.timePeriod.to === '' "
      >you have no dates booked currently</p>
      <template v-else>
        <p>active booking</p>
        <p>from: {{ userInfo.timePeriod.from }}</p>
        <p>to: {{ userInfo.timePeriod.to }}</p>
      </template>
    </form>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import FormField from "../elements/FormField";
import Button from "../elements/Button";

export default {
  name: "User",
  components: {
    FormField,
    Button
  },
  computed: mapGetters([
    "userInfo",
    "changeEmail",
    "changePassword",
    "errorMessage"
  ]),
  methods: {
    ...mapActions([
      "toggleUserInfo",
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

img {
  width: 4rem;
  filter: invert(100%);
  margin: 1rem;
}
.user-details {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.2rem;
}
.user-details > button {
  width: 14rem;
  margin: 0.8rem;
  padding: 0.7rem;
  font-size: 1.2rem;
  color: #ffffff;
  background: #1f1f1f;
  border: none;
}
.user-details > p {
  margin: 0.6rem;
  text-align: center;
}

.update-btn {
  margin: -1rem 0 2rem 0;
}

.error-message {
  width: 70%;
  text-align: center;
  font-style: italic;
}
</style>