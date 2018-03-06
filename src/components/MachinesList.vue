<template>
  <div>
    <h1>liste</h1>
    <hr/>
    <div v-for="machine in machines">
      <machine v-bind="machine" :key="machine.id" class="machines"/>
      <hr/>
    </div>
  </div>
</template>

<script>
  import Machine from './Machine.vue'

  export default {
    name: "machines-list",
    data() {
      return {
        machines: [{
          id: 1,
          name: 'What else ?',
          status: true,
          checkedAt: new Date(),
        }, {
          id: 2,
          name: 'Broken',
          status: false,
          checkedAt: new Date(),
        }]
      }
    },
    components: {
      Machine
    }
  }
</script>

<style scoped>

  .machines {
    /*border: 1px solid #dee2e6;*/
    /*border-radius: .25rem;*/
    /*margin: 5px*/
  }

</style>