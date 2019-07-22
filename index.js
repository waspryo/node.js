const fs = require('fs');
const http = require('http');

const json = fs.readFileSync(`${__dirname}/data/data.json`, 'utf-8');
const laptopData = JSON.parse(json);

const server = http.createServer((req, res) => {
    console.log('Someone did access the server!');
});

