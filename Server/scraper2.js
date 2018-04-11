const $ = require('cheerio');
const request = require('request');

var options = {
  url: 'https://pokemondb.net/pokedex/national',
  headers: {
    'Connection': 'keep-alive'
  }
};
// const url = 'https://pokemondb.net/pokedex/national';

const scrapeController = {
  runScrapeMain: (req, res, next) => {
    
    function scrapeMain (url) {
      return new Promise((resolve, reject) => {
        request(url, (error, response, html) => {
          if (error) console.error('Promise 1 err: ', error);
          const parsedHTML = $.load(html);
          const pokemonArr = [];
          const urlArr = [];
          parsedHTML('.infocard-tall').each((index, pokemon) => {
            const pokemonObj = {};
            pokemonObj.name = $(pokemon).children('.ent-name').text();
            pokemonObj.pokedexNo = $(pokemon).children('small').first().text();
            // pokemonObj.level = Math.floor(Math.random() * 13) + 1;
            pokemonObj.type = $(pokemon).children('.aside').children('.itype').map((i, child) => {
              return $(child).text();
            }).get(); // check what get does
            let subUrl = $(pokemon).children('a').first().attr('href');
            urlArr.push('https://pokemondb.net' + subUrl);
            pokemonArr.push(pokemonObj);
          });
          res.locals.pokemonArr = pokemonArr;
          resolve(urlArr);
        });        
      });
    }

    function scrapePhoto (url) {
      return new Promise((resolve, reject) => {
        request(url, (error, response, html) => {
          if(error) console.error(error);
          // const pokemonArr = res.locals.pokemonArr;
          if(!error) {
            let parsedHTML = $.load(html);
            const photo = parsedHTML('.figure').children('img').first().attr('src');
            resolve(photo);
          }
        });
      })
    }

    // const keys = Object.keys()
    const promise = scrapeMain(options)
    const promises = []

    promise.then((result) => {
      result.forEach(url => promises.push(scrapePhoto(url)));
    });

    Promise.all(promises)
      .then((iterable) => {

      })

    res.json(res.locals.pokemonArr);
  },
  runScrapePhoto: (req, res) => {
    
  }
};

module.exports = scrapeController;