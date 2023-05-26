const express = require('express');
const mongoose = require('mongoose');
const dotenv = require("dotenv");
const path = require('path');

const sauceRoutes = require('./routes/sauce');
const userRoutes = require('./routes/user');

dotenv.config();

mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@piiquante.pdq4lma.mongodb.net/?retryWrites=true&w=majority`,
 { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log('MongoDB connected'))
.catch(() => console.log('MongoDB connexion failed'));


const app = express();

app.use(express.json());

//Ajout des entêtes
app.use((req, res, next) => {
   res.setHeader('Access-Control-Allow-Origin', '*');
   res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
   next();
});

//Import du chemin de stockage des images
app.use('/images', express.static(path.join(__dirname, 'images')));
//Imports des routes
app.use('/api/sauces', sauceRoutes);
app.use('/api/auth', userRoutes);


module.exports = app;