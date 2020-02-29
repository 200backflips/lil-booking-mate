<template>
  <datepicker
    :value="date"
    :inline="true"
    :language="sv"
    :monday-first="true"
    :highlighted="highlighted"
    @selected="pickDates"
    class="datepicker"
  />
</template>

<script>
import datepicker from "vuejs-datepicker";
import { sv } from "vuejs-datepicker/dist/locale";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "DatePicker",
  components: {
    datepicker
  },
  computed: mapGetters(["fromDate", "toDate"]),
  data() {
    return {
      date: new Date(),
      sv: sv,
      highlighted: { from: "", to: "" }
    };
  },
  mounted() {
    if (this.fromDate && this.toDate) {
      this.highlighted = {
        from: this.fromDate,
        to: this.toDate
      };
    }
  },
  methods: {
    ...mapActions(["pickDates"])
  },
  watch: {
    fromDate(newDate) {
      this.highlighted.from = newDate;
    },
    toDate(newDate) {
      this.highlighted.to = newDate;
    }
  }
};
</script>

<style>
.datepicker {
  color: #000000;
}
</style>