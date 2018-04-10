const $ = require('cheerio');
const request = require('request');
const url = 'https://pokemondb.net/pokedex/national';

const scrapeController = {
  runScrape: (req, res) => {
    request(url, (error, response, html) => {
      if(error) return console.error(error);
      let parsedHTML = $.load(html);
      let pokemonArr = [];
      parsedHTML('.infocard-tall').each((index, pokemon) => {
        let name = $(pokemon).children('.ent-name').text();
        let level = Math.floor(Math.random() * 13) + 1;
        let type = $(pokemon).children('.aside').children('.itype').map((i, child) => {
          return $(child).text();
        }).get();
        let subUrl = $(pokemon).children('a').first().attr('href');
        let photoUrl = 'https://pokemondb.net' + subUrl;
        // let photo = '';
        request(photoUrl, (error, response, html) => {
          //we lose context of outside variables when in this request
          if(!error) {
            let parsedHTMLTwo = $.load(html);
            let photo = parsedHTMLTwo('.figure').children('img').first().attr('src');
            let pokemonObj = {
              name: name,
              level: level,
              type: type,
              photo: photo
            }
            pokemonArr.push(pokemonObj);
          }
          if(error) console.error(error);
        });
        // let pokemonObj = {
        //   name: name,
        //   level: level,
        //   type: type,
        //   photo: photo
        // }
        // pokemonArr.push(pokemonObj);
      });
      res.json(pokemonArr);
    });
  }
};

module.exports = scrapeController.runScrape;
