import Dexie from 'dexie';
let db = new Dexie("github-stars");

db.version(3).stores({
    users: "&login,email",
    stargazers: "[id+repo],id,login,repo",
    locations: "name"
}).upgrade(async tx => {
    await tx.table('stargazers').clear()
})

db.version(2).stores({
    users: "&login,email",
    stargazers: "[login+repo],repo",
    locations: "name"
}).upgrade(tx => {

})


db.version(1).stores({
    users: "&login,email",
    stargazers: "[login+repo],repo"
});


export default db;
