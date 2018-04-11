const $ = require('cheerio');
const request = require('request');
const rp = require('request-promise');
// require('request-promise').debug = true
// require('request-debug')(rp);

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
};

module.exports = scrapeController;
