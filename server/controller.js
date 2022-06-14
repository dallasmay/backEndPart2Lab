const houses = require("./db.json");

let globalID = 4;

module.exports = {
    getHouses: (req, res) => {
        res.status(200).send(houses);
    },
    deleteHouse: (req, res) => {
        let index = houses.findIndex((element) => element.id === req.params.id);
        houses.splice(index, 1);
        res.status(200).send(houses);
    },
    createHouse: (req, res) => {
        const {address, price, imageURL} = req.body;
        let newHouse = {
            address: address,
            price: price,
            imageURL: imageURL,
            id: globalID
        };
        houses.push(newHouse);
        res.status(200).send(houses);
    },
    updateHouse: (req, res) => {
        
    }
};