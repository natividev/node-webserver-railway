const express = require('express')
const hbs = require('hbs');
require('dotenv').config();

const app = express()
const port = process.env.PORT;

//TODO require('hbs')
app.set('view engine', 'hbs');

// Handlebars
hbs.registerPartials(__dirname + '/views/partials');

// middleware

// Servir contenido estatico
app.use(express.static('public'));


app.get('/', (req, res) => {
  res.render('home', {
    nombre: 'Natividad Chávez',
    titulo: 'Curso de Node',
  });
})

app.get('/generic', (req, res) => {
  res.render('generic', {
    nombre: 'Natividad Chávez',
    titulo: 'Curso de Node',
  });
})

app.get('/elements', (req, res) => {
  res.render('elements', {
    nombre: 'Natividad Chávez',
    titulo: 'Curso de Node',
  });
})


app.get('*', (req, res) => {
  res.render('404', {
    nombre: 'Natividad Chávez',
    titulo: 'Curso de Node',
  });
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})