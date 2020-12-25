const cors = require('cors')
const express = require('express')
const axios = require('axios')

const app = express()

app.use(cors())

app.get('/', async(req, res) => {

    try {
        //remove response e coloca data = response.data
        const {data} = await axios('https://jsonplaceholder.typicode.com/users')
        //console.log(data);
        return res.json(data)
    } catch (error) {
        console.log(error, 'Deu ruim');
    }
    
})

app.listen('4567')

/*
return res.json([
    { nome: 'Joiel'},
    { nome: 'Oliveira'}
])
*/


