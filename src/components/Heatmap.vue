<template lang="pug">
.heatmap
  .map(ref="map")
</template>


<script>
import * as L from 'leaflet'
import * as Heatmap from 'leaflet.heat'
import 'leaflet/dist/leaflet.css'
import Geo from '../geo.service';

const geoService = new Geo();

export default {
  props: ['locations'],
  data() {
    return {
      heat: null,
    }
  },
  watch: {
    async locations(list) {
      for(let loc of list) {
        try {
          const coord = await geoService.load(loc);
          
          if(coord)
            this.heat.addLatLng([+coord.lat, +coord.lon, 1]);
        } catch (e) { }
      }
    }
  },
  mounted() {
    var map = L.map(this.$refs.map).setView([0, 0], 4);
    
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    this.heat = L.heatLayer([], {
      radius: 20,
      minOpacity: 0.4,
      blur: 15
    }).addTo(map);
  }
}
</script>

<style lang="sass" scoped>
.heatmap
  .map
    width: 60vw
    height: 40vh
</style>
