<template>
  <main class="container">
    <div class="text-right">
      <a class="btn btn-success" href="#" role="button">Add Schedule</a>
    </div>
    <h3 class="text-left">{{ monthText + " " + year }}</h3>
    <div class="btn-group mt-2 btn-block" role="group" aria-label="Schedule">
      <a
        v-for="date in weeklyDates"
        :key="date.id"
        @click="getSchedByDate(date.year, date.month, date.date)"
        class="btn btn-secondary"
        href="#"
        role="button"
      >
        <p class="day-label">{{ date.day }}</p>
        {{ date.date }}
      </a>
    </div>
    <div v-if="schedByDateData.length > 0" class="my-2">
      <div
        v-for="schedule in schedByDateData"
        :key="schedule.id"
        class="alert alert-primary"
        role="alert"
      >
        <p class="time-label">
          {{ `${schedule.schedTimeIn} - ${schedule.schedTimeOut}` }}
        </p>
        {{ schedule.schedName }}
      </div>
    </div>
    <div v-else class="alert alert-info my-2" role="alert">No Schedule</div>
    <pre> {{ weeklyDates }}</pre>
  </main>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  data() {
    return {
      year: 0,
      month: 0,
      monthText: "",
      weeklyDates: [],
      count: 0,
      schedules: [
        {
          schedId: 1,
          schedName: "French Class",
          schedTimeIn: "18:30",
          schedTimeOut: "21:30",
          schedDate: "24/10/2022",
          schedDay: "Monday",
        },
        {
          schedId: 2,
          schedName: "Work",
          schedTimeIn: "06:00",
          schedTimeOut: "13:30",
          schedDate: "24/10/2022",
          schedDay: "Monday",
        },
        {
          schedId: 3,
          schedName: "Workout",
          schedTimeIn: "07:00",
          schedTimeOut: "08:00",
          schedDate: "25/10/2022",
          schedDay: "Tuesday",
        },
      ],
      schedByDateData: [],
      fullDate: [],
    };
  },
  mounted() {
    let currentDate = (this.fullDate = this.getFullDate());
    this.year = currentDate.year;
    this.month = currentDate.month;

    this.monthText = this.getMonthEquivalent;
    this.getWeeklyDates();
  },
  methods: {
    getSchedByDate(year, month, date) {
      this.schedByDateData = [];
      this.schedByDateData = this.schedules.filter(
        (sched) => sched.schedDate === `${date}/${month + 1}/${year}`
      );
      this.year = year;
      this.month = month;
      this.monthText = this.getMonth(month);
    },
    getFullDate(year, month, date) {
      var datum;
      if (year && month && date) {
        datum = new Date(year, month, date);
      } else {
        datum = new Date();
      }
      return { year: datum.getFullYear(), month: datum.getMonth() };
    },
    getWeeklyDates() {
      var today = new Date();

      var firstDate = today.getDate() - today.getDay();
      var lastDate = firstDate + 6;

      //iterate the range of the dates to create an array of the weeklydates
      for (let index = firstDate; index <= lastDate; index++) {
        var other = new Date(today.getFullYear(), today.getMonth(), index);

        this.weeklyDates.push({
          id: this.count++,
          date: other.getDate(),
          year: other.getFullYear(),
          month: other.getMonth(),
          day: this.getDay(
            other.getFullYear(),
            other.getMonth(),
            other.getDate()
          ),
        });
      }
    },
    getDay(year, month, date) {
      let days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
      let current = new Date(year, month, date);
      return days[current.getDay()];
    },
    getTotalNumberOfDays(year, month) {
      // month here accept 0 to 11
      // if date is 0 then it will get the previous month last date but since we want to get the current month last date we need to add plus 1 to the month
      return new Date(year, month, 0).getDate();
    },
    getMonth(month) {
      let months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      return months[month];
    },
  },
  computed: {
    getMonthEquivalent() {
      let months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      return months[this.month];
    },
  },
};
</script>
