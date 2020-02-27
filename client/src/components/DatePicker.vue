<template>
  <datepicker
    :value="date"
    :inline="true"
    :language="sv"
    :monday-first="true"
    @selected="pickDate"
    class="datepicker"
  />
</template>

<script>
import datepicker from "vuejs-datepicker";
import { sv } from "vuejs-datepicker/dist/locale";
import { mapActions } from "vuex";

export default {
  name: "DatePicker",
  components: {
    datepicker
  },
  data() {
    return {
      date: new Date(),
      sv: sv
    };
  },
  methods: {
    ...mapActions(["pickDate"])
  }
};
</script>

<style>
.datepicker {
  color: #000000;
}
</style>