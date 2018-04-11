const $ = require('cheerio');
const request = require('request');
const url = 'https://pokemondb.net/pokedex/national';

const scrapeController = {
  runScrapeMain: (req, res, next) => {

    // 1. request main url & get array of sub-urls
    // 2. request each sub-url as a promise (next one doesn't start until prev is finished)

    request(url, (error, response, html) => {
      if(error) return console.error(error);
      let parsedHTML = $.load(html);
      const subUrlArr = [];
      const pokemonArr = [];
      const pokemonUrlArr = [];
      parsedHTML('.infocard-tall').each((index, pokemon) => {
        const pokemonObj = {};
        pokemonObj.name = $(pokemon).children('.ent-name').text();
        // pokemonObj.level = Math.floor(Math.random() * 13) + 1;
        pokemonObj.type = $(pokemon).children('.aside').children('.itype').map((i, child) => {
          return $(child).text();
        }).get();
        let subUrl = $(pokemon).children('a').first().attr('href');
        subUrlArr.push('https://pokemondb.net' + subUrl);
        pokemonArr.push(pokemonObj);
      });
      for (let i = 0; i < subUrlArr.length; i++) {
        Promise.resolve().then(() => {
          new Promise((resolve) => {
            request(subUrlArr[i], (error, response, html) => {
              
            })
          })
        })
      }
      // res.locals.urlArr = urlArr;
      // res.locals.pokemonArr = pokemonArr;
      // next();
    });
  }
  // runScrapePhoto: (req, res) => {
  //   res.locals.urlArr.forEach((x, i) => { 
  //     res.locals.index = i;
  //     request(x, (error, response, html) => {
  //       if(!error) {
  //         let parsedHTML = $.load(html);
  //         res.locals.pokemonArr[res.locals.index].photo = parsedHTML('.figure').children('img').first().attr('src');
  //       }
  //       if(error) console.error(error);
  //     });
  //   });
  //   res.json(res.locals.pokemonArr);
  // }
};

module.exports = scrapeController;
