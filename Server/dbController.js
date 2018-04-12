const $ = require('cheerio');
const request = require('request');
const rp = require('request-promise');
const db = require('./db')
const fs = require('fs');
const Promise = require('bluebird');

Promise.promisifyAll(fs);

const {Client} = require('pg')
const connectionString = 'postgres://udeyhfsk:vgeewt-ITqXsidtAxEZd7rBqtkPT8CZ0@baasu.db.elephantsql.com:5432/udeyhfsk'
const client = new Client({
  connectionString: connectionString,
})
client.connect()

const dbController = {
  getData: (req, res) => {
    const randomNums = [];
    let queryString = '';
    for (let i = 0; i < 20; i++) {
      randomNums.push(Math.floor(Math.random() * 807) + 1);
      queryString += `(SELECT * FROM pokemons WHERE pokedex_no = ${randomNums[i]}) `;
      if (i !== 19) queryString += 'UNION ';
    }
    client.query(queryString, (err, result) => {
      if (err) console.log(err);
      res.send(result.rows);
      client.end()
    })
  },
  dbStore: (req, res) => {
    fs.readFileAsync('pokemon.json')
      .then(result => JSON.parse(result))
      .then((result) => {
        db.store(result);
      })
      .catch(err => {
        console.error(err);
      })
  }
};

module.exports = dbController;
