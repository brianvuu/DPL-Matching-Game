$(document).ready( function() {

    var pokemon = [
        '<img src="img/Pikachu.png">', '<img src="img/Pikachu.png">',
        '<img src="img/Charmander.png">', '<img src="img/Charmander.png">',
        '<img src="img/Bulbasaur.png">', '<img src="img/Bulbasaur.png">',
        '<img src="img/Squirtle.png">', '<img src="img/Squirtle.png">',
    ]

    // Shuffles the pokemon array
    pokeMixed = []
    pokeMixed = pokemon.sort(function() { return 0.5 - Math.random() });

    // When clicked, remove card cover and display pokemon 
    $('.cards').click(function(){
        cardId = $(this).attr('id');
        $('div#'+cardId).removeClass('cover').html(pokeMixed[cardId]);
    })
})