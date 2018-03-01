<template>
  <div>
    {{ machine.nom }}
    <toggle-button :labels="true" :value="machine.status" @change="machine.status = !machine.status"/>
    <br/>
    <br/>
  </div>
</template>

<script>
  export default {
    name: "machine",
    props: ['machine']
  }
</script>

<style scoped>

</style>
