const fs = require('fs');
const hotToys = fs.readFileSync('./figuras1.json', 'utf-8');
const bandai = fs.readFileSync('./figuras2.json', 'utf-8');
const starWars = fs.readFileSync('./figuras3.json', 'utf-8');

const importar = function(marca){

    if(marca === "Hot Toys" ){ 
      marca = hotToys
 }else if(marca === "Bandai"){
    marca = bandai 
 }else if(marca === "Star Wars"){
   marca = starWars
 }
return JSON.parse(marca);
}
//console.log(importar("Hot Toys"))
module.exports = importar