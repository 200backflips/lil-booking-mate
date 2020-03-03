<template>
  <datepicker
    :value="date"
    :inline="true"
    :monday-first="true"
    :highlighted="highlighted"
    :disabled-dates="disabledDates"
    @selected="pickDates"
  />
</template>

<script>
import datepicker from "vuejs-datepicker";
// import { sv } from "vuejs-datepicker/dist/locale";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "DatePicker",
  components: {
    datepicker
  },
  computed: mapGetters(["fromDate", "toDate", "allUsers"]),
  data() {
    return {
      date: new Date(),
      // sv: sv,
      highlighted: { from: "", to: "" },
      disabledDates: { ranges: [] }
    };
  },
  mounted() {
    if (this.fromDate && this.toDate) {
      this.highlighted = {
        from: this.fromDate,
        to: this.toDate
      };
    }
    this.allUsers.map(user => {
      if (user.hasActiveBooking) {
        this.disabledDates.ranges.push({
          from: user.timePeriod.from,
          to: user.timePeriod.to
        });
        console.log(this.disabledDates.ranges);
      }
    });
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
.vdp-datepicker > .vdp-datepicker__calendar {
  background: #2b2b2b;
  border: none;
  padding: 0;
}
.vdp-datepicker > .vdp-datepicker__calendar .disabled {
  color: rgba(255, 255, 255, 0.2);
}
</style>