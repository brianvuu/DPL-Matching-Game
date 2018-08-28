$(document).ready( function() {



    var pokemon = [
        '<img src="img/Pikachu.png">', '<img src="img/Pikachu.png">',
        '<img src="img/Charmander.png">', '<img src="img/Charmander.png">',
        '<img src="img/Bulbasaur.png">', '<img src="img/Bulbasaur.png">',
        '<img src="img/Squirtle.png">', '<img src="img/Squirtle.png">',

    ]
    pokeMixed = []
    pokeMixed = pokemon.sort(function() { return 0.5 - Math.random() });

    //for(i=0;i<pokemon.length;i++) {}


    //When clicked, get card's ID
    $('.cards').click(function(){
        // $(this).removeClass('cover');
        cardId = $(this).attr('id');
        $('div#'+cardId).removeClass('cover').html(pokeMixed[cardId]); 
        // DEBUG
    })





//     // var test = {}

//     // Shuffles the pokemons in array

//     //Assign random numbers 1-8 to each pokemon in array
//     // $(function(){
//     //     for (var i = 0; i < pokemon.length; i++) {
//     //     vars["test" + i] = pokemon[i]
//     //         // DEBUG
//     //     console.log("random: "+test);  
//     // }})

//     // Generate an array of random numbers 1-8
//         // var randomCards = Math.floor((Math.random() * 8) + 1);
//         // DEBUG
//         // console.log("random number: "+randomCards);        



})