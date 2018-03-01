<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>
    <div v-for="machine in machines">
      <machine v-bind:machine="machine"></machine>
    </div>

    <home></home>
    <machine :machine="{id: 1, nom: 'Chewbi', status: false}"></machine>
  </div>
</template>

<script>
  import home from './components/home.vue'
  import machine from './components/machine.vue'

  export default {
    name: 'app',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
        machines: [
          {
            id: 1,
            nom: 'Vader',
            status: true
          },
          {
            id: 2,
            nom: 'Luke',
            status: false
          },
          {
            id: 3,
            nom: 'Yoda',
            status: true
          }
        ]
      }
    },
    components: {
      home,
      machine,
    }
  }
</script>

<style lang="scss">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
