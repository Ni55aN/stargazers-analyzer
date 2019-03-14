import Vue from 'vue';
import db from './db';
import { loadUser } from './loader';

export default class {
    constructor() {
        this.list = {}
    }

    async load(login, storageOnly = false) {
        let user = await db.users.get({ login });

        if(!user && !storageOnly) {
            try {
                user = await loadUser(login);
                db.users.add(user);
            } catch(e) {
                if(!e.response || e.response.status !== 404)
                    throw e
            }
        }
        if(user) {
            Vue.set(this.list, login, user);
        }
    }

    async loadAll(logins) {
        const users = await db.users.where('login').anyOf(logins).toArray();
        
        users.forEach(user => {
            Vue.set(this.list, user.login, user);
        })
    }
}