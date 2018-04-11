const deckController = {
  generateDeck: (req, res) => {
    const deck = [];
    let count = 0;
    //each player will get 20 cards
    while (count < 20) {
      let num = Math.floor(Math.random() * 807) + 1;
      sequelize.query("SELECT * FROM Pokemon WHERE number = count").then(pokemon => {
        if (pokemon) {
          deck.push(pokemon);
          count++;
        }
      })
    }
    res.json(deck);
  }
}
module.exports = deck;Controller
