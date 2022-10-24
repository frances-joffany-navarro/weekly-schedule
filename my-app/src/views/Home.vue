<template>
  <div class="home text-left">
    <div class="container">
      <div class="row">
        <div class="col-sm">
          Create Schedule
          <Form></Form>
        </div>
        <div class="col-sm">One of three columns</div>
      </div>
    </div>
    
  </div>
</template>

<script>
// @ is an alias to /src
import Form from "@/components/Form.vue";

export default {
  name: "Home",
  components: { Form },
};
</script>
