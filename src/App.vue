<template lang="pug">
.app
  .stargazers
    div
      input(v-model="accessToken")
      | access token
    input(v-model="repo")
    button(@click="load") Load
    input(type="checkbox" v-model="resume")
    label Resume
    .count Count: {{users.length}}
    div(v-for="user in users")
      div {{user.login}}
  Analyze.analyze(:stargazers="users")
</template>

<script>
import Analyze from './Analyze';
import { loadStargazers } from './loader';
import openDB from './db';

export default {
  name: 'app',
  components: {
    Analyze
  },
  data() {
    return {
      accessToken: localStorage.getItem('accessToken') || '',
      repo: '',
      resume: true,
      users: [],
    }
  },
  watch: {
    accessToken(val) {
      localStorage.setItem('accessToken', val);
    },
    async repo(val) {
      localStorage.setItem('lastRepo', val);
      const db = await openDB();

      this.users = await db.stargazers.where('repo').equals(this.repo).toArray();
    }
  },
  methods: {
    async load() {
      const db = await openDB();
      let page = 1;
      if(this.resume) {
        const count = await db.stargazers.where('repo').equals(this.repo).count();

        page = Math.floor(count/30) + 1;
      } else {
        await db.stargazers.where('repo').equals(this.repo).delete();
        this.users = [];
      }
      
      await loadStargazers(this.repo, page, async starg => {
        if(!await db.stargazers.get({ repo: this.repo, login: starg.login })) {
          await db.stargazers.add({ repo: this.repo, ...starg });
          this.users.push(starg);
        }
      })
    }
  },
  mounted() {
    this.repo = localStorage.getItem('lastRepo') || '';
  }
}
</script>

<style lang="sass">
.app
  display: flex
  .stargazers
    flex: 1
  .analyze
    flex: 2
</style>
