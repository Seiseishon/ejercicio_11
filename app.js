let importar = require('./collectibles');
const hotToys = importar("Hot Toys");
const bandai = importar("Bandai");
const starWars = importar("Star Wars");

let unifiedCollectibles = [...hotToys,...bandai,...starWars]

let collectibles = {
    figuras: unifiedCollectibles,
    listFigures: unifiedCollectibles.forEach(function(figurita){
        //console.log(figurita);
    }),
    figuresByBrand:function(){
        let figuritas = unifiedCollectibles.filter(function(marca){
            return marca === hotToys
        })
    }}
console.log(collectibles.figuresByBrand(hotToys));
