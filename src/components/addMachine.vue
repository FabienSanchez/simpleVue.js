<template>
  <div>
    <form v-on:submit.prevent="onSubmit">
      <input v-model="nom" type="text" placeholder="Nom de la machine"/>
      <select v-model="status">
        <option :value="true">On</option>
        <option :value="false">Off</option>
      </select>
      <button type="submit">Ajouter</button>
    </form>
  </div>
</template>

<script>
  export default {
    name: "add-machine",
    props: ['newMachine'],
    data() {
      return {
        id: 3,
        nom: "",
        status: true
      }
    },
    methods: {
      onSubmit: function () {
        this.id += 1
        this.newMachine({id: this.id, nom: this.nom, status: this.status})
      }
    }
  }
</script>

<style scoped>

</style>
