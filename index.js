const express = require('express');
const hbs = require('hbs');
const mongoose = require('mongoose');

const PUERTO = process.env.PORT || 3000;

let pintoresRouter = require('./routes/pintor');

const app = express();
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');
app.use(express.static(__dirname +'/public'));


app.use('/', pintoresRouter);

mongoose.Promise = global.Promise;
const cadena = 'mongodb+srv://examen:1220348@cluster0-w3ixn.mongodb.net/curso?retryWrites=true&w=majority'
mongoose.connect(cadena, {useNewUrlParser:true,
useUnifiedTopology: true})
.then(()=>{
    console.log('Conexíon establecida');
}).catch(err=> console.log(err));


app.listen(PUERTO, ()=>{
    console.log('Escuchando el puerto..');
});