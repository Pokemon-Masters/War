const $ = require('cheerio');
const request = require('request');
const url = 'https://pokemondb.net/pokedex/national';
const fs = require('fs');

const scrapeController = {
   getPokemon: (req, res, next) => {
    request(url, (error, response, html) => {
      if(error) return console.error(error);
      let parsedHTML = $.load(html);
      // const subUrlArr = [];
      const pokemonArr = [];
      // const pokemonUrlArr = [];
      parsedHTML('.infocard-tall').each((index, pokemon) => {
        const pokemonObj = {};
        pokemonObj.name = $(pokemon).children('.ent-name').text();
        pokemonObj.type = $(pokemon).children('.aside').children('.itype').map((i, child) => {
          return $(child).text();
        }).get();
        
        let subUrl = $(pokemon).children('a').first().attr('href');
        let pokemonUrl = 'https://pokemondb.net' + subUrl;
        pokemonObj.pokemonUrl = pokemonUrl;
        // subUrlArr.push('https://pokemondb.net' + subUrl);
        pokemonArr.push(pokemonObj);
      });
      fs.writeFile('pokemon.json', JSON.stringify(pokemonArr, null, 4), (err) => {
        console.log('pokemon saved in pokemon.json file');
      });
    });
    next();
  },

  getUrls: (req, res) => {
    fs.readFile('pokemon.json', "utf8", (err, data) => {
      console.log(data)
    });
  }
}

// function getPokemon(req, res, next) {
//   res.locals.pokemonArr = [];
//   res.locals.pokemonUrlArr = [];
//   let p1 = new Promise((resolve, reject) => {
//     request(url, (error, response, html) => {
//       if(error) return console.error(error);
//       let parsedHTML = $.load(html);
//       parsedHTML('.infocard-tall').each((index, pokemon) => {
//         const pokemonObj = {};
//         pokemonObj.name = $(pokemon).children('.ent-name').text();
//         // pokemonObj.level = Math.floor(Math.random() * 13) + 1;
//         pokemonObj.type = $(pokemon).children('.aside').children('.itype').map((i, child) => {
//           return $(child).text();
//         }).get();
//         let subUrl = $(pokemon).children('a').first().attr('href');
//         res.locals.pokemonUrlArr.push('https://pokemondb.net' + subUrl);
//         res.locals.pokemonArr.push(pokemonObj);
//       });
//     });
//     resolve(res.locals);
//   });
//   p1.then((resLocals) => {
//     console.log(resLocals);
//   })
// }

module.exports = scrapeController;
