<template lang="pug">
.list
  Card.card(title="Users")
    Button(@click="loadUsersDetail" type="primary") Load details
  Progress(:percent="detailUsers.length/users.length*100" hide-info :stroke-width="5")
  .badges
    Badge(:count="users.length") Users
    Badge(:count="detailUsers.length") Stored users
  i-switch.switch(v-model="detailTable" size="large")
    span(slot="open") All
    span(slot="close") Details
  Table.table(
    :columns="detailTable?columns:[columns[0]]"
    :data="pageTableData"
    no-data-text="No stars"
    @on-sort-change="onSort"
  )
  .pagination
    Page(:total="this.tableData.length" :page-size="amount" :current="page" @on-change="changePage")
</template>

<script>
import Badge from './components/Badge';

export default {
  inject: ['repoService', 'usersService'],
  components: {
    Badge
  },
  data() {
    return {
      page: 1,
      amount: 10,
      max: 10000,
      sort: null,
      columns: [
        {
          title: 'Login',
          key: 'login',
          minWidth: 120,
          sortable: true
        },
        {
          title: 'Name',
          key: 'name',
          minWidth: 80
        },
        {
          title: 'Email',
          key: 'email',
          minWidth: 90
        },
        {
          title: 'Location',
          key: 'location',
          minWidth: 100
        },
        {
          title: 'Company',
          key: 'company',
          minWidth: 120
        },
        {
          title: 'Bio',
          key: 'bio',
          minWidth: 180
        },
        {
          title: 'Public repos',
          key: 'public_repos',
          minWidth: 120,
          sortable: true
        },
        {
          title: 'Followers',
          key: 'followers',
          minWidth: 100,
          sortable: true
        },
        {
          title: 'Following',
          key: 'following',
          minWidth: 100,
          sortable: true
        }
      ],
      detailTable: false
    }
  },
  computed: {
    users() { return this.repoService.users; },
    detailUsers() { return this.repoService.users.map(u => this.usersService.list[u.login]).filter(u => u) },
    incompleteUsers() { return this.repoService.users.filter(u => !this.usersService.list[u.login]) },
    tableData() {
      return this.detailTable ? this.detailUsers : this.users;
    },
    pageTableData() {
      const { page, amount, sort } = this;
      let list = [...this.tableData];

      if(sort && sort.order !== 'normal') {
        list.sort((a, b) => (sort.order === 'asc' ? 1 : -1) * (+a[sort.key] - +b[sort.key]));
      }

      return list.slice((page-1)*amount, page*amount);
    }
  },
  methods: {
    onSort({ column, key, order }) {
      this.sort = {
        column,
        key,
        order
      }
    },
    changePage(num) {
      this.page = num;
    },
    async loadUsersDetail() {
      for(let user of this.incompleteUsers) {
        await this.usersService.load(user.login);
      }
    }
  },
  async mounted() {
    for(let user of this.repoService.users) {
      await this.usersService.load(user.login, true);
    }
  }
}
</script>

<style lang="sass" scoped>
.list
  .card
    margin-bottom: 1em
  .switch
    margin: 1em
  .table
    min-width: 70vw
.pagination
  margin: 1em
  margin-left: auto
  display: table
</style>