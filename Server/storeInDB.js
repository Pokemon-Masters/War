const Sequelize = require('sequelize');

const sequelize = new Sequelize('database', 'udeyhfsk', 'vgeewt-ITqXsidtAxEZd7rBqtkPT8CZ0', {
  host: 'localhost',
  dialect: 'postgres'
})

//data is array of objects

//use Insert
module.exports = function(data) {
  //place code here
  const Pokemon = sequelize.define('pokemon', {
    name: {
      type: Sequelize.STRING,
      primaryKey: true // ?
    },
    type: Sequelize.ARRAY,
    number: Sequelize.INTEGER,
    url: Sequelize.STRING
  });

  let arr = [];
  for (let i = 0; i < data.length;i++) {
    let obj = {};
    obj[name] = data[i].name;
    obj[type] = data[i].type;
    obj[number] = data[i].number;
    obj[url] = data[i].url;
    arr.push(obj);
  }
  sequelize.sync({}).then(() => {
    Pokemon.bulkCreate(arr);
  });
};