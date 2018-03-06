<template>
  <div>
    <div class="machinesCont" v-if="!filtre || machine.status=='false'" v-for="machine in machines">
      <machine v-bind="machine" :key="machine.id" class="machines"/>
    </div>
  </div>
</template>

<script>
  import Machine from './Machine.vue'

  export default {
    name: "machines-list",
    props: ['machines', 'filtre'],
    data() {
      return {}
    },
    components: {
      Machine
    }
  }
</script>

<style scoped>

  .machines {
    border: 1px solid #dee2e6;
    border-radius: .25rem;
  }

  .machinesCont {
    border-radius: .25rem;
    margin: 10px;
  }

  .machinesCont:nth-child(odd) {
    background: rgba(125, 125, 125, 0.1);
  }

</style>
