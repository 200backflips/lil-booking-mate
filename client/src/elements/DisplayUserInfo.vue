<template>
  <div class="DisplayUserInfo">
    <template v-if="toggler">
      <button class="close" @click.prevent="toggleUserInfo(infoType)">
        <img src="../assets/cancel.svg" alt="close" />
      </button>
      <form autocomplete="off">
        <FormField
          :labelName="infoType"
          :inputType="infoType === 'password' ? 'password' : 'text'"
          :capture="captureInfo"
        />
        <Button buttonText="update" class="update-btn" :clickHandler="updateInfo" />
      </form>
      <div class="error-message">
        <p>{{error}}</p>
      </div>
    </template>
    <button v-else @click.prevent="toggleUserInfo(infoType)" class="text-btn">
      {{infoType}}:
      <template v-if="infoType === 'password'">
        <mark>{{userInfo}}</mark>
      </template>
      <template v-else>{{userInfo}}</template>
    </button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import FormField from "../elements/FormField";
import Button from "../elements/Button";

export default {
  name: "DisplayUserInfo",
  props: {
    infoType: String,
    toggler: Boolean,
    captureInfo: Function,
    updateInfo: Function,
    userInfo: String,
    error: String
  },
  components: {
    FormField,
    Button
  },
  methods: {
    ...mapActions(["toggleUserInfo"])
  }
};
</script>

<style scoped>
.DisplayUserInfo {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  font-size: 1rem;
}

.text-btn {
  /* width: 14rem; */
  margin: 0.7rem;
  padding: 0.8rem;
  font-size: 1.2rem;
  color: #ffffff;
  background: #3f4d80;
  outline: none;
  border: none;
  cursor: pointer;
}

mark {
  background: none;
  color: #ffffff;
  -webkit-text-security: disc;
}

.close {
  margin: 0.5rem 0.5rem 0.5rem 14rem;
  width: 1.8rem;
  background: #3d4e8a;
  border: none;
  outline: none;
  cursor: pointer;
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