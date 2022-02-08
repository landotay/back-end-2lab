const express = require('express')
const cors = require('cors')
// const houses = require('./db.json')
const ctrl = require('./controller')

const app = express()

const port = 4004

app.use(express.json())
app.use(cors())

const {
    getHouses,
    deleteHouses,
    createHouses,
    updateHouse
} = require('./controller')

//ENDPOINTS
app.get('/api/houses', ctrl.getHouses)
app.delete('/api/houses/:id', ctrl.deleteHouses)
app.post('/api/houses', ctrl.createHouses)
app.put('/api/houses/:id', ctrl.updateHouse)

app.listen(port, () => console.log(`Port ${port} is running`))