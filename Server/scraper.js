const $ = require('cheerio');
const request = require('request');
const rp = require('request-promise');
// require('request-promise').debug = true
// require('request-debug')(rp);

<<<<<<< HEAD
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
=======
const mainCrawl = {
  url: 'https://pokemondb.net/pokedex/national',
  transform: (body) => {
    const parsedHTML = $.load(body);
    const pokemonArr = [];
    const urlArr = [];
    parsedHTML('.infocard-tall').each((index, pokemon) => {
      const pokemonObj = {};
      pokemonObj.name = $(pokemon).children('.ent-name').text();
      pokemonObj.pokedexNo = parseInt($(pokemon).children('small').first().text().slice(1));
      // pokemonObj.level = Math.floor(Math.random() * 13) + 1;
      pokemonObj.type = $(pokemon).children('.aside').children('.itype').map((i, child) => {
        return $(child).text();
      }).get(); // check what get does
      let subUrl = $(pokemon).children('a').first().attr('href');
      urlArr.push('https://pokemondb.net' + subUrl);
      pokemonArr.push(pokemonObj);
    });
    return [pokemonArr, urlArr];
  },
};

const photoCrawl = {
  transform: (body) => {
    const obj = {};
    let parsedHTML = $.load(body);
    obj.photo = parsedHTML('.figure').children('img').first().attr('src');
    obj.pokedexNo = parseInt(parsedHTML('.vitals-table').first().children('tbody').children('tr').children('td').children('strong').text());
    return obj;
  }
}

const scrapeController = {
  runScrapeMain: (req, res, next) => {
    let pokemonArr = [];
    const failedURLs = [];
    const unfoundPokemon = [];
    rp(mainCrawl)
      .then(result => {
        pokemonArr = result[0];
        let count = 0;
        result[1].forEach((address, idx, arr) => {
          photoCrawl.url = address;
          rp(photoCrawl)
            .then(result => {
              let foundPokemon = true;
              for (let i = 0; i < pokemonArr.length; i++) {
                if (pokemonArr[i].pokedexNo === result.pokedexNo) {
                  pokemonArr[i].photo = result.photo;
                  foundPokemon = false;
                  break;
                }
              }
              if (!foundPokemon) unfoundPokemon.push(result);
              count++;
              console.log('count ', count);
              console.log('arr ', arr.length);
              if (count >= 151) res.json(pokemonArr);
            })
            .catch(err => {
              failedURLs.push(address)
              console.error(err);
            });
          });
          return result[1];
        })
        .catch(err => {
        console.error(err);
      });
    }
>>>>>>> 015e7fb6a68a2a39d297ed44ca472d859ca48c15
};

module.exports = scrapeController;
