import Dexie from 'dexie';
let db = new Dexie("github-stars");

db.version(1).stores({
    users: "&login,email",
    stargazers: "[login+repo],repo"
});


export default db;