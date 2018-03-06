<template>
  <div>
    <h1>liste</h1>
    <hr/>
    <div v-if="loading"><h1>Loading ...</h1></div>
    <div v-else-if="!loading" v-for="machine in machines">
      <machine v-bind="machine" :key="machine.id" class="machines"/>
      <hr/>
    </div>
    <div v-if="error">
      <h1 class="text-danger">error :</h1>
      <p>{{ error }}</p><
    </div>
  </div>
</template>

<script>
  import Machine from './Machine.vue'
  import Axios from 'axios'

  export default {
    name: "machines-list",
    data() {
      return {
        machines: [],
        loading: false,
        error: null
      }
    },
    created() {
      let self = this;
      Axios.get('https://machine-api-campus.herokuapp.com/api/machines', {
        onDownloadProgress: function (progressEvent) {
          self.loading = true;
        }
      })
        .then(function (response) {
          if (response.status == 200) {
            self.machines = response.data;
          }
          self.loading = false;
        })
        .catch(function (error) {
          self.error = error;
        });
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
