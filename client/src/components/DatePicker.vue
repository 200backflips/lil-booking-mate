<template>
  <datepicker :value="date" :inline="true" :language="sv" :monday-first="true" class="datepicker" />
</template>

<script>
import datepicker from "vuejs-datepicker";
import { sv } from "vuejs-datepicker/dist/locale";

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
  }
};
</script>

<style>
.datepicker {
  color: #000000;
}
</style>