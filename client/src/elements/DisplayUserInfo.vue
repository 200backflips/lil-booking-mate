<template>
  <div class="DisplayUserInfo">
    <template v-if="toggler">
      <button class="close" @click.prevent="toggleUserInfo(infoType)">
        <img src="../assets/cancel.svg" alt="close" />
      </button>
      <form autocomplete="off">
        <FormField :labelName="infoType" inputType="text" :capture="captureInfo" />
        <Button buttonText="update" class="update-btn" :clickHandler="updateInfo" />
      </form>
      <div class="error-message">
        <p>{{errorMessage}}</p>
      </div>
    </template>
    <button
      v-else
      @click.prevent="toggleUserInfo(infoType)"
      class="text-btn"
    >{{infoType}}: {{ infoType === 'password' ? '••••••' : userInfo }}</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import FormField from "../elements/FormField";
import Button from "../elements/Button";

export default {
  name: "DisplayUserInfo",
  props: {
    infoType: String,
    toggler: Boolean,
    captureInfo: Function,
    updateInfo: Function,
    userInfo: String
  },
  components: {
    FormField,
    Button
  },
  computed: mapGetters(["errorMessage"]),
  methods: {
    ...mapActions(["toggleUserInfo"])
  }
};
</script>

<style>
.DisplayUserInfo {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.text-btn {
  width: 14rem;
  margin: 0.7rem;
  padding: 0.8rem;
  font-size: 1.2rem;
  color: #ffffff;
  background: #1f1f1f;
  outline: none;
  border: none;
}

.close {
  align-self: flex-end;
  margin: 0.5rem 4rem 0.5rem 0.5rem;
  width: 1.8rem;
  outline: none;
}
.close > img {
  filter: invert(100%);
}

.update-btn {
  margin: -1rem 0 2rem 0;
}

.error-message {
  margin-bottom: 2rem;
  font-size: 1.2rem;
  font-style: italic;
}
</style>