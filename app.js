'use-strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

//Cargar rutas
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// Configurar cabeceras http

// rutas base
 app.get('/pruebas',function(req, res){
 	res.status(200).send({message: 'Bienvenido al curso de victorrobles.web/es'});
 });
module.exports = app;