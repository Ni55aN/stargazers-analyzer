import db from './db';

export default class {
    constructor() {

    }

    url(name) {
        const text = encodeURIComponent(name);

        return `https://nominatim.openstreetmap.org/?format=json&addressdetails=0&q=${text}&format=json&limit=1`
    }

    async load(name) {
        if(!name) return null;
        name = name.trim();
        const locs = await db.locations.where('name').equals(name).toArray();

        if(locs[0]) {
            return locs[0];
        }

        const resp = await fetch(this.url(name));
        const loc = (await resp.json())[0];

        if(loc) {
            await db.locations.add({ name, lat: +loc.lat, lon: +loc.lon });
        }

        return loc;
    }
}