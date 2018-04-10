const $ = require('cheerio');
const request = require('request');
const url = 'https://pokemondb.net/pokedex/national';

const scrapeController = {
  runScrapeMain: (req, res, next) => {
    request(url, (error, response, html) => {
      if(error) return console.error(error);
      let parsedHTML = $.load(html);
      let pokemonArr = [];
      const urlArr = [];
      parsedHTML('.infocard-tall').each((index, pokemon) => {
        const pokemonObj = {}
        pokemonObj.name = $(pokemon).children('.ent-name').text();
        // pokemonObj.level = Math.floor(Math.random() * 13) + 1;
        pokemonObj.type = $(pokemon).children('.aside').children('.itype').map((i, child) => {
          return $(child).text();
        }).get();
        let subUrl = $(pokemon).children('a').first().attr('href');
        urlArr.push('https://pokemondb.net' + subUrl);
        pokemonArr.push(pokemonObj);
      });
      res.locals.urlArr = urlArr;
      res.locals.pokemonArr = pokemonArr;
      next()
    });
  },
  runScrapePhoto: (req, res) => {
    const pokemonArr = res.locals.pokemonArr;
    res.locals.urlArr.forEach((x, i) => { 
      console.log('url is: ', x)
      console.log('index is: ', i)
      request(x, (error, response, html) => {
        if(!error) {
          let parsedHTML = $.load(html);
          pokemonArr[i].photo = parsedHTML('.figure').children('img').first().attr('src');
        }
        if(error) console.error(error);
      });
    });
    res.json(pokemonArr);
  }
};

module.exports = scrapeController;
