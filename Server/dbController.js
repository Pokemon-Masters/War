const $ = require('cheerio');
const request = require('request');
const rp = require('request-promise');
const db = require('./db')
const fs = require('fs');
const Promise = require('bluebird');

Promise.promisifyAll(fs);

const {Client} = require('pg')
const connectionString = 'postgres://sxjehgzp:xdjgcTnyYcd3kYuoNss9QfbO4P1SUVq3@stampy.db.elephantsql.com:5432/sxjehgzp'
const client = new Client({
  connectionString,
})

const dbController = {
  getData: (req, res) => {
    const randomNums = [];
    let queryString = '';
    for (let i = 0; i < 26; i++) {
      randomNums.push(Math.floor(Math.random() * 807) + 1);
      queryString += `(SELECT * FROM pokemons WHERE pokedex_no = ${randomNums[i]})`      
      if (i !== 25) queryString += 'UNION ';
    }
    client.connect((err) => {
      if (err) {
        console.error('connection error', err.stack)
      } else {
        console.log('connected')
        client.query(queryString, function(err, result) {
          if (err) console.log('query error: ', err);
          console.log(result.rows)
          res.send(result.rows);
          // client.end()
        })
      }
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
