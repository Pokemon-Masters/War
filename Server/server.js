const express = require('express');
const app = express();
// const scrapeController = require('./scraper');
const Sequelize = require('sequelize');
<<<<<<< HEAD
const scrapeController = require('./scraper3');
const dbController = require('./db');
=======
const uri = 'postgres://udeyhfsk:vgeewt-ITqXsidtAxEZd7rBqtkPT8CZ0@baasu.db.elephantsql.com:5432/udeyhfsk';
>>>>>>> 015e7fb6a68a2a39d297ed44ca472d859ca48c15

// const sequelize = new Sequelize(uri, 'udeyhfsk', 'vgeewt-ITqXsidtAxEZd7rBqtkPT8CZ0');

// sequelize
//   .authenticate()
//   .then(() => {
//     console.log('successful connection');
//   })
//   .catch((err) => {
//     console.error('error with connection: ', err);
//   });

<<<<<<< HEAD
  // app.use(...)
  
app.get('/', (req, res) => {
  // res.render('...index')
}); 

app.get('/scrape', scrapeController.getPokemon, scrapeController.getUrls);

app.get('/generate-deck', dbController.generateDeck);

// app.get('/', scrapeController.runScrapeMain, scrapeController.runScrapePhoto);
=======
app.get('/', scraper.runScrapeMain);
>>>>>>> 015e7fb6a68a2a39d297ed44ca472d859ca48c15

app.listen(3000, () => {console.log('server is running on port 3000')});

module.exports = app;