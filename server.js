//helpers
require('./hbs/helpers');
const express = require('express')
const app = express()
    //middlelware
app.use(express.static(__dirname + '/public'));

const port = process.env.PORT || 3000;
const hbs = require('hbs');
//express hbs
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    //renderiza el archivo home.hbs
    res.render('Home', {
        nombre: 'Diego'
    })
});

app.get('/about', (req, res) => {
    //renderiza el archivo home.hbs
    res.render('about', {})
})

app.get('/hello', (req, res) => {
    let salida = {
        nombre: 'Diego',
        edad: 32,
        url: req.url
    }
    res.send(salida);
    //res.send('Hello World')
})

app.get('/data', (req, res) => {
    res.send('Hello data')
})

app.listen(3000, () => {
    console.log(`Escuchando peticiones en el puuerto ${ port }`)
})