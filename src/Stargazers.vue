<template lang="pug">
.stargazers
  Card
    p(slot="title") Find stargazers
    Input.field(v-model="repoName")
    Tooltip(content="Continue loading stargazers (don't delete already loaded)" :max-width="200" placement="top")
      Checkbox.field(v-model="resume") Resume
    Button.field(@click="repoService.loadStars(resume)" type="primary") Load
  Progress(:percent="users.length/repo.stargazers_count*100" hide-info :stroke-width="5")
  .badges
    Badge(:count="users.length") Loaded stargazers
    Badge(:count="repo.stargazers_count") Total stargazers
    Badge(:count="repo.open_issues_count") Open issues
    Badge(:count="repo.forks_count") Forks
    Badge(:count="repo.subscribers_count") Subscribers
</template>

<script>
import debounce from 'debounce';
import Badge from './components/Badge';

export default {
  inject: ['repoService'],
  components: {
    Badge
  },
  data() {
    return {
      max: 200000,
      repoName: '',
      resume: true
    }
  },
  computed: {
    repo() { return this.repoService.data },
    users() { return this.repoService.users },
  },
  watch: {
    repoName: debounce(async function (val) {
      localStorage.setItem('lastRepo', val);

      await this.repoService.setRepo(this.repoName);
    },500)
  },
  async mounted() {
    this.repoName = localStorage.getItem('lastRepo') || '';
  }
}
</script>

<style lang="sass" scoped>
.field
  width: auto
  margin-right: 1em
</style>
