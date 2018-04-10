const express = require('express');
const app = express();
const scraper = require('./scraper');
const Sequelize = require('sequelize');

const sequelize = new Sequelize('postgres://udeyhfsk:vgeewt-ITqXsidtAxEZd7rBqtkPT8CZ0@baasu.db.elephantsql.com:5432/udeyhfsk');

sequelize
  .authenticate()
  .then(() => {
    console.log('successful connection');
  })
  .catch((err) => {
    console.error('error with connection: ', err);
  });

app.get('/', scraper);

app.listen(3000, () => {console.log('server is running on port 3000')});

module.exports = app;