const express = require('express');
const consign = require('consign');
const bodyParse = require('body-parser');

let app = express();

app.use(bodyParse.json());
app.use(bodyParse.urlencoded({ extended: false }));
consign().include('routes').include('utils').into(app);


app.listen(3000, '127.0.0.1',() =>{
console.log("servidor rodando");
})