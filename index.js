const express = require('express')
const app = express()
const { Sequelize } = require('sequelize')

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'my-database.bd'
});

app.set('view engine', 'ejs')

app.get('/fotos', (req, res) => {
    res.send('')
})



app.listen(8080, () => {
    console.log('Servidor iniciado na porta 8080')
})