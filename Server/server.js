const express = require('express');
const app = express();
const scraper = require('./scraper');
const Sequelize = require('sequelize');
const uri = 'postgres://udeyhfsk:vgeewt-ITqXsidtAxEZd7rBqtkPT8CZ0@baasu.db.elephantsql.com:5432/udeyhfsk';

// const sequelize = new Sequelize(uri, 'udeyhfsk', 'vgeewt-ITqXsidtAxEZd7rBqtkPT8CZ0');

// sequelize
//   .authenticate()
//   .then(() => {
//     console.log('successful connection');
//   })
//   .catch((err) => {
//     console.error('error with connection: ', err);
//   });

app.get('/', scraper.runScrapeMain);

app.listen(3000, () => {console.log('server is running on port 3000')});

module.exports = app;