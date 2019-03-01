<template lang="pug">
.analyze
  button Analyze
  div Total followers: {{totalFollowers}}
  div Total following: {{totalFollowing}}
  table
    thead
      th(v-for="col in columns") {{col}}
    tbody
      tr(v-for="user in users")
        td(v-for="col in columns") {{user[col]}}
</template>

<script>
import { loadUser } from './loader';
import openDB from './db';

export default {
  props: ['stargazers'],
  data() {
    return {
      columns: ['login', 'email', 'name', 'followers', 'following', 'company', 'public_repos', 'created_at', 'updated_at'],
      users: []
    }
  },
  watch: {
    async stargazers() {
      this.users = [];

      this.stargazers.map(async s => {
        this.users.push(await this.trackUser(s.login));
      });
    }
  },
  computed: {
    totalFollowers() {
      return this.users.reduce((acc, u) => acc + u.followers, 0);
    },
    totalFollowing() {
      return this.users.reduce((acc, u) => acc + u.following, 0);
    },
  },
  methods: {
    async trackUser(login) {
      const db = await openDB();

      let user = await db.users.get({ login });

      if(!user) {
        user = await loadUser(login);

        await db.users.add(user)
      }

      return user;
    },
  }
}
</script>

<style lang="sass" scoped>
.analyze
</style>
