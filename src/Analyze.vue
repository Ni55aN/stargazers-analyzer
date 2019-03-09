<template lang="pug">
.analyze
  Card.card(title="Analyze")
    Button(@click="analyze" type="primary") Analyze
  .row
    .col
      Badge(:count="users.length") Users
      br
      Badge(:count="companies.length") Users with company
      Badge(:count="filtered(companies, companyFilter).length")
        span Companies
        Input.input(v-model="companyFilter" size="small")
      br
      Badge(:count="locations.length") Users with location
      Badge(:count="filtered(locations, locationFilter).length")
        span Locations
        Input.input(v-model="locationFilter" size="small")
      br
      Badge(:count="totalFollowers" :overflowCount="9999999") Total followers
      Badge(:count="totalFollowing" :overflowCount="9999999") Total following
    .col.large
      h3 Created profiles 
      TimeHistogram(:list="users.map(u => u.created_at)")
      h3 Updated profiles 
      TimeHistogram(:list="users.map(u => u.updated_at)")
      h3 Heatmap
      Heatmap(:locations="users.map(u => u.location).filter(l => l)")
</template>

<script>
import Badge from './components/Badge';
import TimeHistogram from './components/TimeHistogram';
import Heatmap from './components/Heatmap';

export default {
  inject: ['repoService', 'usersService'],
  components: {
    Badge,
    TimeHistogram,
    Heatmap
  },
  data() {
    return {
      users: [],
      companies: [],
      locations: [],
      totalFollowers: null,
      totalFollowing: null,
      columns: [{ key: 'name', title: 'Company' }],
      companyFilter: '',
      locationFilter: '',
    }
  },
  methods: {
    filtered(list, text) {
      const regex = new RegExp(text, 'i');

      return list.filter(name => name.match(regex));
    },
    analyze() {
      this.users = this.repoService.users.map(u => this.usersService.list[u.login]).filter(u => u);
      this.companies = this.users.map(u => u.company).filter(c => c);
      this.locations = this.users.map(u => u.location).filter(c => c);
      this.totalFollowers = this.users.reduce((acc, user) => acc + user.followers, 0);
      this.totalFollowing = this.users.reduce((acc, user) => acc + user.following, 0);
    }
  }
}
</script>

<style lang="sass" scoped>
.analyze
  width: 100%
  .row
    display: flex
    .col
      flex: 1
      &.large
        flex: 3
  .input
    margin-left: 1em
    width: auto
</style>
