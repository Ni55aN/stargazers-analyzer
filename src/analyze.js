const fs = require('fs');
const CsvReadableStream = require('csv-reader');
const header = require('./header');

function toObj(row) {
    return row.reduce((obj, item, i) => {
        obj[header[i].id] = item; 
        return obj;
    }, {});
}

const companies = new Map();

fs.createReadStream('users.csv', 'utf8')
    .pipe(CsvReadableStream({ parseNumbers: true, parseBooleans: true, trim: true }))
    .on('data', function (row) {
        let { company } = toObj(row);
        
        if(company) company = company.trim().toLowerCase().replace('@', '');

        if(companies.has(company))
            companies.get(company).entries++;
        else if(company)
            companies.set(company, {name: company, entries: 1})
    })
    .on('end', function (data) {
        console.log('Companies frequency:')
        let comps = Array.from(companies.values()).sort((a,b) => a.entries - b.entries);

        for(let {name, entries} of comps) {
            console.log(name+':\t'+entries)
        }
    });
 