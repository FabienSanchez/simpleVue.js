<template>
  <div>
    <div v-show="show">
      <div>
        <h1 v-bind:class="{ red: checked }">{{ titre }}</h1>
        <input v-model="edited" type="text" placeholder="changer le titre"/>
        <button v-on:click="editTitle()">Ok</button>
      </div>
      <br/>
      <div>
        <input v-model="input" type="text" placeholder="texte..."/>
        <h2 v-bind:class="{ red: checked }">input: {{ input }}</h2>
        <!--<button v-on:click="active = !active">Red mode</button>-->
        <label for="toggle">Red mode</label>
        <input id="toggle" v-model="checked" type="checkbox"/>
      </div>
      <br/>
    </div>
    <button v-html="show ? 'hide' : 'show'" v-on:click="show = !show"></button>
  </div>
</template>

<script>
  /* eslint-disable indent */
  export default {
    name: 'home',
    data() {
      return {
        titre: 'Home',
        edited: '',
        input: '',
        checked: false,
        show: true
      }
    },
    methods: {
      editTitle: function () {
        this.titre = this.edited
      }
    }
  }
</script>

<style scoped>
  .red {
    color: red;
  }
</style>
