let pokeImgURL, pokemonURL;
let pokemonProperites = {};

for (let pokeID = 1; pokeID < 152; pokeID++){
    
    pokeImgURL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + pokeID + ".png";

    pokemonURL = "https://pokeapi.co/api/v2/pokemon/" + pokeID

    $.getJSON(pokemonURL, function(data){
        // data is an object, need an object to store the info of data
        pokemonProperites[pokeID] = {
            name: data.forms[0].name,
            type: data.types,
            height: data.height,
            weight: data.weight
        };
    });

    $('#left').append("<img id='"+ pokeID + "'src = '" + pokeImgURL + "' alt='poke_img'>");
};

$('#right').hide();

$('#left img').click(function(){

    $('#right').show();
    // capitalize the first letter of name
    var capitalName = pokemonProperites[this.id].name.charAt(0).toUpperCase() + pokemonProperites[this.id].name.slice(1);
    // console.log(capitalName);

    let pokeType = [];
    var li = "";
        for (let i = 0; i<pokemonProperites[this.id].type.length; i++){
            pokeType.push(pokemonProperites[this.id].type[i].type.name);
            li += ("<li>" + pokeType[i] + "</li>");
            // console.log(li);
    }

    $('#right').html([
        "<h1>" +capitalName +"</h1>", 
        "<img src = '" + this.src + "' alt='poke_img'>",
        "<h3>Types</h3>",
        "<ul>" + li + "</ul>",
        "<h3>Height</h3>",
        "<p>" + pokemonProperites[this.id].height + "</p>",
        "<h3>Weight</h3>",
        "<p>" + pokemonProperites[this.id].weight + "</p>"
    ]);

});






