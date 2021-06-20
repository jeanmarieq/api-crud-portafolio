const express = require('express')
const app = express()
const { Sequelize, DataTypes } = require('sequelize')
const ContactoModel = require('./models/contacto')

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'my-database.bd'
});

// agregar dependencia cors para que acepte conexiones con el front 

const contactos = ContactoModel(sequelize, DataTypes)

app.set('view engine', 'ejs')

// agregar las consultas o metodos post
// 

app.get('/fotos', (req, res) => {
    res.send('')
})



app.listen(8080, () => {
    console.log('Servidor iniciado na porta 8080')
})