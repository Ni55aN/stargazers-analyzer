import Vue from 'vue';
import db from './db';
import { loadStargazers, loadRepo, loadUser } from './loader';

export default class {
    constructor() {
        this._vue = new Vue({ data: {
            name: {},
            data: {},
            users: []
        }})
    }

    get name() { return this._vue.name }
    set name(v) { return this._vue.name = v }
    get data() { return this._vue.data }
    set data(v) { return this._vue.data = v }
    get users() { return this._vue.users }
    set users(v) { return this._vue.users = v }

    async setRepo(name) {
        this.name = name;
        this.data = await loadRepo(name);
        this.users = await db.stargazers.where('repo').equals(this.name).toArray();
    }

    async loadStars(resume) {
        let page = 1;
        if(resume) {
          const count = await db.stargazers.where('repo').equals(this.name).count();
  
          page = Math.floor(count/30) + 1;
        } else {
          await db.stargazers.where('repo').equals(this.name).delete();
          this._e.users = [];
        }

        await loadStargazers(this.name, page, async (star) => {
            const data = { repo: this.name, login: star.login };
      
            if(!await db.stargazers.get(data)) {
              await db.stargazers.add(data);
              this.users.push(star);
            }
        })
    }
}