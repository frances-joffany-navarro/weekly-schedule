<template>
  <main class="container">
    <div class="text-right">
      <a class="btn btn-success" href="#" role="button">Add Schedule</a>
    </div>
    <h3 class="text-left">{{ month + " " + year }}</h3>
    <div class="btn-group mt-2 btn-block" role="group" aria-label="Schedule">
      <a
        @click="schedByDate('23/10/2022')"
        class="btn btn-secondary"
        href="#"
        role="button"
      >
        <p class="day-label">SUN</p>
        23
      </a>
      <a
        @click="schedByDate('24/10/2022')"
        class="btn btn-secondary"
        href="#"
        role="button"
        ><p class="day-label">MON</p>
        24</a
      >
      <a
        @click="schedByDate('25/10/2022')"
        class="btn btn-secondary"
        href="#"
        role="button"
        ><p class="day-label">TUE</p>
        25</a
      >
      <a
        @click="schedByDate('26/10/2022')"
        class="btn btn-secondary"
        href="#"
        role="button"
        ><p class="day-label">WED</p>
        26</a
      >
      <a
        @click="schedByDate('27/10/2022')"
        class="btn btn-secondary"
        href="#"
        role="button"
        ><p class="day-label">THU</p>
        27</a
      >
      <a
        @click="schedByDate('28/10/2022')"
        class="btn btn-secondary"
        href="#"
        role="button"
        ><p class="day-label">FRI</p>
        28</a
      >
      <a
        @click="schedByDate('29/10/2022')"
        class="btn btn-secondary"
        href="#"
        role="button"
        ><p class="day-label">SAT</p>
        29</a
      >
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
    {{ date }}
  </main>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  data() {
    return {
      year: "",
      month: "",
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
    };
  },
  mounted() {
    this.year = this.getCurrentYear();
    this.month = this.getCurrentMonth();
  },
  methods: {
    schedByDate(date) {
      this.schedByDateData = [];
      this.schedByDateData = this.schedules.filter(
        (sched) => sched.schedDate === date
      );
    },
    weeklyDate() {
      let current = new Date();
      return current;
    },
    getCurrentYear() {
      let current = new Date();
      return current.getFullYear();
    },
    getCurrentMonth() {
      let current = new Date();

      switch (current.getMonth()) {
        case 0:
          return "January";
        case 1:
          return "February";
        case 2:
          return "March";
        case 3:
          return "April";
        case 4:
          return "May";
        case 5:
          return "June";
        case 6:
          return "July";
        case 7:
          return "August";
        case 8:
          return "September";
        case 9:
          return "October";
        case 10:
          return "November";
        case 11:
          return "December";
      }
    },
  },
};
</script>
