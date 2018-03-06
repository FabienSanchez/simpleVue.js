<template>
  <div>
    <h1>map</h1>
    <hr/>
    <gmap-map
      class="map"
      :center="center"
      :zoom="13"
      map-type-id="hybrid"
    >
      <gmap-marker
        :key="machine.id"
        v-for="(machine) in machines"
        :position="{lat: machine.latitude, lng: machine.longitude }"
        :clickable="true"
        @click="center=machine.position"
      ></gmap-marker>
    </gmap-map>
  </div>
</template>

<script>
  export default {
    name: "machines-map",
    data() {
      return {
        center: {lat: 45.1666700, lng: 5.7166700},
        machines: [{
          id: 1,
          latitude: 45.1666700,
          longitude: 5.7166700,
        },
          {
            id: 2,
            latitude: 45,
            longitude: 5,
          }]
      }
    }
  }
</script>

<style scoped>
  .map {
    width: 100%;
    height: 800px;
  }

</style>
