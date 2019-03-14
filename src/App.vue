<template lang="pug">
.app
  .col.sidebar
    Steps(:current="step" direction="vertical")
      Step.step(title="Find" @click.native="step = 0")
      Step.step(title="View" @click.native="step = 1")
      Step.step(title="Analyze" @click.native="step = 2")
    Card.card
      p(slot="title") Access token
      Input(v-model="accessToken")
  .col.content
    Stargazers(v-if="step === 0")
    List(v-if="step === 1")
    Analyze(v-if="step === 2")
</template>

<script>
import Vue from 'vue';
import Analyze from './Analyze';
import List from './List';
import Stargazers from './Stargazers';
import RepoService from './repo.service';
import UsersService from './users.service';

export default {
  name: 'app',
  provide: {
    repoService: new RepoService(),
    usersService: new UsersService()
  },
  components: {
    Analyze,
    Stargazers,
    List
  },
  data() {
    return {
      accessToken: localStorage.getItem('accessToken') || '',
      step: 0
    }
  },
  watch: {
    accessToken(val) {
      localStorage.setItem('accessToken', val);
    }
  }
}
</script>

<style lang="sass">
.app
  display: flex
  .col
    margin: 1%
  .content
    display: flex
    flex: 1
    align-items: center
    justify-content: center
    min-height: 90vh
  .step
    cursor: pointer
</style>
