const express = require('express');
const app = express();
const path = require('path');
const Sequelize = require('sequelize');
const scrapeController = require('./scraper');
const dbController = require('./dbController');

const sequelize = new Sequelize('postgres://sxjehgzp:xdjgcTnyYcd3kYuoNss9QfbO4P1SUVq3@stampy.db.elephantsql.com:5432/sxjehgzp');

sequelize
 .authenticate()
 .then(() => {
   console.log('successful connection');
 })
 .catch((err) => {
   console.error('error with connection: ', err);
 });

app.use(express.static(path.resolve(__dirname, '../dist')))
 
app.get('/', (req, res) => {
    res.render('index.html');
});

app.get('/get-data', dbController.getData);

app.get('/scrape', scrapeController.runScrapeMain);

app.get('/db-store', dbController.dbStore);

// app.get('/generate-deck', dbController.generateDeck);

// app.get('/', scrapeController.runScrapeMain, scrapeController.runScrapePhoto);

app.listen(3000, () => {console.log('server is running on port 3000')});

module.exports = app;