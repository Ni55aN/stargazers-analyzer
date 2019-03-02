import Vue from 'vue';
import db from './db';
import { loadUser } from './loader';

export default class {
    constructor() {
        this._vue = new Vue({ data: {
            list: {}
        }})
    }

    get list() { return this._vue.list }
    set list(v) { return this._vue.list = v }

    async load(login, storageOnly = false) {
        let user = await db.users.get({ login });

        if(!user && !storageOnly) {
            user = await loadUser(login);
            db.users.add(user);
        }
        if(user) {
            Vue.set(this.list, login, user);
        }
    }
}