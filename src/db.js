import Dexie from 'dexie';
let db = null;

export default async function openDB() {
    if(!db) {
        db = new Dexie("github-stars");

        db.version(1).stores({
            users: "&login,email",
            stargazers: "[login+repo],repo"
        });
    }
  
    return db;
}