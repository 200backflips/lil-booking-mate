<template>
  <datepicker
    :value="date"
    :inline="true"
    :monday-first="true"
    :highlighted="highlighted"
    :disabled-dates="disabledDates"
    :open-date="openDate"
    @selected="pickDates"
  />
</template>

<script>
import datepicker from "vuejs-datepicker";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "DatePicker",
  components: {
    datepicker
  },
  computed: mapGetters([
    "fromDate",
    "toDate",
    "allUsers",
    "userInfo",
    "hasActiveBooking"
  ]),
  data() {
    return {
      date: new Date(),
      openDate: new Date(),
      highlighted: { from: "", to: "" },
      disabledDates: { ranges: [] }
    };
  },
  mounted() {
    this.openDate = this.hasActiveBooking
      ? this.userInfo.timePeriod.from
      : new Date();
    this.highlighted = {
      from: this.userInfo.timePeriod.from,
      to: this.userInfo.timePeriod.to
    };
    this.allUsers.map(user => {
      if (user.hasActiveBooking && user.email !== this.userInfo.email) {
        this.disabledDates.ranges.push({
          from: user.timePeriod.from,
          to: user.timePeriod.to
        });
      }
    });
  },
  methods: {
    ...mapActions(["pickDates"])
  },
  watch: {
    fromDate(newDate) {
      if (!this.hasActiveBooking) {
        this.highlighted.from = newDate;
      }
    },
    toDate(newDate) {
      if (!this.hasActiveBooking) {
        this.highlighted.to = newDate;
      }
    }
  }
};
</script>

<style>
.vdp-datepicker > .vdp-datepicker__calendar {
  background: #3a487b;
  border: none;
  padding: 0;
}
.vdp-datepicker > .vdp-datepicker__calendar .disabled {
  color: rgba(255, 255, 255, 0.1);
}
</style>