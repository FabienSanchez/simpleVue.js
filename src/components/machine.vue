<template>
  <div>
    <h1>{{ name }}</h1>
    <div v-bind:class="etat ? 'text-success' : 'text-danger'">
      Status :
      <span v-html="etat ? 'OK' : 'KO'"></span>
    </div>
    <br/>
    <p>Last time checked : {{ checkedAt }} </p>
  </div>
</template>

<script>
  export default {
    name: "machine",
    props: ['name', 'status', 'checkedAt'],
    computed: {
      etat: function () {
        if (this.status == "true") {
          return true;
        } else {
          return false;
        }
      }
    },
  }
</script>

<style scoped>

</style>
