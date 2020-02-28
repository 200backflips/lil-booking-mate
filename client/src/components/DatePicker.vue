<template>
  <datepicker
    :value="date"
    :inline="true"
    :language="sv"
    :monday-first="true"
    :highlighted="highlighted"
    @selected="pickDates"
    :key="datesPicked"
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
  computed: mapGetters(["datesPicked"]),
  data() {
    return {
      date: new Date(),
      sv: sv,
      highlighted: {}
    };
  },
  mounted() {
    if (this.fromDate && this.toDate) {
      this.highlighted = {
        from: this.datesPicked.from,
        to: this.datesPicked.to
      };
    }
  },
  methods: {
    ...mapActions(["pickDates"])
  }
};
</script>

<style>
.datepicker {
  color: #000000;
}
</style>