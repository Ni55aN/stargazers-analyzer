<template lang="pug">
GChart(
  type="ColumnChart"
  :data="chartData"
  :options="chartOptions"
)
</template>

<script>
import { GChart } from "vue-google-charts";

export default {
  props: ['list'],
  components: {
    GChart
  },
  data() {
    return {
      chartOptions: {
        chart: {
          legend: {position: 'none'}
        }
      }
    }
  },
  computed: {
    chartData() {
      const dates = this.list.map(d => new Date(d));
      const years = dates.map(d => String(d.getFullYear()))
      const distrib = new Map();

      years.forEach(y => {
        if(distrib.has(y))
          distrib.set(y, distrib.get(y) + 1)
        else
          distrib.set(y, 1)
      })

      return [
        ["Year", "Amount"],
        ...Array.from(distrib.entries()).sort((a, b) => +a[0] - +b[0])
      ];
    }
  }
}
</script>

<style lang="sass" scoped>

</style>
