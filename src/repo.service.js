import Vue from 'vue';
import db from './db';
import { loadStargazers, loadRepo, loadUser } from './loader';

export default class {
  constructor() {
    this.name = '';
    this.data = {};
    this.users = [];
    Vue.observable(this)
  }

  async setRepo(name) {
    this.name = name;
    this.users = await db.stargazers.where('repo').equals(this.name).toArray();
    this.data = await loadRepo(name);
  }

  async loadStars(resume) {
    let page = 1;
    if (resume) {
      const count = await db.stargazers.where('repo').equals(this.name).count();

      page = Math.floor(count / 30) + 1;
    } else {
      await db.stargazers.where('repo').equals(this.name).delete();
      this.users = [];
    }

    await loadStargazers(this.name, page, async (star) => {
      const data = { repo: this.name, login: star.login };

      if (!await db.stargazers.get(data)) {
        await db.stargazers.add(data);
        this.users.push(star);
      }
    })
  }
}
