<template>
  <main class="container">
    <div>
      <a class="btn btn-success text-right" href="#" role="button"
        >Add Schedule</a
      >
    </div>
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
    <div class="my-2">
      <ul v-if="schedByDateData" class="list-group">
        <li
          v-for="schedule in schedByDateData"
          :key="schedule.id"
          class="list-group-item"
        >
          <p class="time-label">
            {{ `${schedule.schedTimeIn} - ${schedule.schedTimeOut}` }}
          </p>
          {{ schedule.schedName }}
        </li>
      </ul>
      <span v-else>No Schedule</span>
    </div>
  </main>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  data() {
    return {
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
  methods: {
    schedByDate(date) {
      this.schedByDateData = [];
      this.schedByDateData = this.schedules.filter(
        (sched) => sched.schedDate === date
      );
    },
  },
};
</script>
