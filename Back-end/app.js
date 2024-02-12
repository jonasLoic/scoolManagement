
const express = require('express');
const cors = require('cors');
const Thing = require('./models/thing');
const mongoose = require('mongoose');
const stuffRoutes = require('./routes/stuff');
const userRoutes = require('./routes/user'); 
const path = require('path');

//const User = require('./models/user')

const app = express();

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
 next();
});

app.use(express.json());

mongoose.connect('mongodb+srv://NabiAbi:felix2000@cluster0.spya21n.mongodb.net/?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));


  app.use('/api/auth', userRoutes);
  app.use('/api/stuff', stuffRoutes);

  //app.use('/images', express.static(path.join(__dirname, 'images')));


module.exports = app;