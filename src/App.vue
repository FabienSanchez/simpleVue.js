<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <img src="/src/assets/coffe-cup.jpg">
          <h1>{{ msg }}</h1>
          <h2>que faire ?</h2>
          <div>
            <label for="filter">Filtre</label>
            <toggle-button id="filter" :labels="true" @change="filtre = !filtre"/>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-12">
          <ul class="nav nav-tabs nav-fill">
            <li class="nav-item">
              <router-link to="/machines" class="nav-link">Liste</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/map" class="nav-link">Map</router-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-12">
          <div v-if="loading"><h1>Loading ...</h1></div>
          <div v-else-if="error">
            <h1 class="text-danger">error :</h1>
            <p>{{ error }}</p><
          </div>
          <router-view v-else-if="responseStatus" :machines="machines" :filtre="filtre"
                       class="tabs-container"></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Axios from 'axios'

  export default {
    name: 'app',
    data() {
      return {
        msg: 'Coffee Machine Vader',
        machines: [],
        loading: false,
        error: null,
        responseStatus: false,
        filtre: false
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
            self.responseStatus = true;
          }
          self.loading = false;
        })
        .catch(function (error) {
          self.error = error;
        });
    },
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
    margin-bottom: 60px;
  }

  img {
    width: 200px;
    height: 200px;
  }

  .tabs-container {
    border-bottom-left-radius: .25rem;
    border-bottom-right-radius: .25rem;
    border: 1px solid transparent;
    border-color: transparent #dee2e6 #dee2e6 #dee2e6;
  }

  h1, h2 {
    font-weight: normal;
    padding-bottom: 15px;
    padding-top: 15px;
  }

  .nav-link {
    background: rgba(200, 200, 200, 0.1);

  }

  h1 {
    color: #53240f;
  }

  a, a:hover {
    font-size: 1.5em;
    color: inherit;
  }

  h2 {
    color: chocolate;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }
</style>
