<template>
  <form>
    <div class="form-group">
      <label for="scheduleName">Schedule Name</label>
      <input type="text" class="form-control" id="scheduleName" required />
    </div>
    <div class="form-group">
      <label for="date">Date</label>
      <input type="date" class="form-control" id="date" required />
    </div>
    <div class="form-group">
      <label for="time">From</label>
      <input type="time" class="form-control" id="time" required />
    </div>
    <div class="form-group">
      <label for="time">To</label>
      <input type="time" class="form-control" id="time" required />
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
</template>

<script>
export default {};
</script>

<style></style>
