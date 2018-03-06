<template>
  <div>
    <h1>map</h1>
    <gmap-map
      :center="{lat:45.1666700, lng:5.7166700}"
      :zoom="13"
      map-type-id="hybrid"
      style="width: 100%; height: 800px"
    >
    </gmap-map>
  </div>
</template>

<script>
  export default {
    name: "machines-map"
  }
</script>

<style scoped>

</style>
