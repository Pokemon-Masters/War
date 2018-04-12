const Sequelize = require('sequelize');

const sequelize = new Sequelize('postgres://udeyhfsk:vgeewt-ITqXsidtAxEZd7rBqtkPT8CZ0@baasu.db.elephantsql.com:5432/udeyhfsk');

const Pokemon = sequelize.define('pokemon', {
  name: Sequelize.STRING,
  pokedex_no: Sequelize.INTEGER,
  type: Sequelize.ARRAY(Sequelize.STRING),
  photo: Sequelize.STRING,
});

const db = {
  store: (data) => {
    let arr = [];
    for (let i = 0; i < data.length;i++) {
      let obj = {};
      obj.name = data[i].name;
      obj.pokedex_no = data[i].pokedexNo;
      obj.type = data[i].type;
      obj.photo = data[i].photo;
      arr.push(obj);
    }
    sequelize.sync({force: true}).then(() => {
      Pokemon.bulkCreate(arr)
      .catch((err) => {console.log(err)});
    });
  }
}

module.exports = db;