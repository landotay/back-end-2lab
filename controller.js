const houses = require ('./db.json')
let globalId = 4

module.exports = {
    getHouses: (req, res) => res.status(200).send(houses),

    deleteHouses: (req, res) => {
        let index = houses.findIndex(elem => elem.id === +req.params.id)
        houses.splice(index, 1)
        res.status(200).send(houses) 
    },

     createHouses: (req, res) => {
            let {id, address, price, imageURL} = req.body
            let newhouse = {
                id: globalId,
                address,
                price: +price,
                imageURL
             };
                houses.push(newhouse)
                res.status(200).send(houses)
                globalId++
},
    updateHouse: (req, res) => {
        let {id} = req.params
        let {type} = req.body
        let index = houses.findIndex(elem => elem.id === +id)
        if(type === 'plus'){
            houses[index].price +=  10000
            res.status(200).send(houses)
        }else if (type === 'minus'){
            houses[index].price -= 10000
            res.status(200).send(houses)
        }else{
            res.status(400).send('something went wrong')
        }
    }
}
        
     
     
