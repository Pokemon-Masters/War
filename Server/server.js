const express = require('express');
const app = express();
const path = require('path');
// const scrapeController = require('./scraper');
const Sequelize = require('sequelize');
const scrapeController = require('./scraper');
const deckController = require('./deck');

const sequelize = new Sequelize('postgres://udeyhfsk:vgeewt-ITqXsidtAxEZd7rBqtkPT8CZ0@baasu.db.elephantsql.com:5432/udeyhfsk');

sequelize
 .authenticate()
 .then(() => {
   console.log('successful connection');
 })
 .catch((err) => {
   console.error('error with connection: ', err);
 });

  // app.use(...)
  
app.get('/', (req, res) => {
  // res.render('...index')
}); 

// app.get('/scrape', scrapeController.getPokemon, scrapeController.getUrls);

app.get('/generate-deck', deckController.generateDeck);

// app.get('/', scrapeController.runScrapeMain, scrapeController.runScrapePhoto);
// app.get('/', scraper.runScrapeMain);

app.listen(3000, () => {console.log('server is running on port 3000')});

module.exports = app;