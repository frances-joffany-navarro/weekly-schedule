<template>
  <div>
    <a class="btn btn-success" href="#" role="button">Add Schedule</a>

    <div class="btn-group mt-2" role="group" aria-label="Schedule">
      <a class="btn btn-secondary" href="#" role="button"
        ><p class="day-label">SUN</p>
        23</a
      >
      <a class="btn btn-secondary" href="#" role="button"
        ><p class="day-label">MON</p>
        24</a
      >
      <a class="btn btn-secondary" href="#" role="button"
        ><p class="day-label">TUE</p>
        25</a
      >
      <a class="btn btn-secondary" href="#" role="button"
        ><p class="day-label">WED</p>
        26</a
      >
      <a class="btn btn-secondary" href="#" role="button"
        ><p class="day-label">THU</p>
        27</a
      >
      <a class="btn btn-secondary" href="#" role="button"
        ><p class="day-label">FRI</p>
        28</a
      >
      <a class="btn btn-secondary" href="#" role="button"
        ><p class="day-label">SAT</p>
        30</a
      >
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  data() {
    return {
      schedules: [
        {
          scheduleName: "French Class",
          scheduleTimeIn: "18:30",
          scheduleTimeOut: "21:30",
          scheduleDate: "24/10/2022",
          scheduleDay: "Monday",
        },
      ],
    };
  },
};
</script>
