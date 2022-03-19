// creation d'une class="open" sur mon body lors du click

let toggle = document.querySelector('.toggle');
let body = document.querySelector('body');

toggle.addEventListener('click', function() {
    body.classList.toggle('open');
})



// Animation des textCard lors de l'affichage

$( function () {
    
    var contents = $( ".textCard" );
    
    /* FUNCTIONS */
    
    // Return boolean when an element is wholly visible on screen
    function isWholeVisible( card ) { 
        var 
            viewPortHeight = $( window ).height(), // Viewport Height
            scrollTop = $( window ).scrollTop(), // Scroll Top
            currcCardPosY = $( card ).offset().top,
            cardHeight = $( card ).height();
        
        return ( currCardPosY > scrollTop && currCardPosY + cardHeight < ( viewPortHeight + scrollTop ) );
    }
    
    // Animate chart only when you see it
    function animateChartWhenVisible ( textCard ) {
        for ( var i = 0, count = textCard.length; i < count; i++ ) {
            if ( isWholeVisible( textCard[ i ] )  ) {
                $( textCard[ i ] ).addClass("cardAnimation");
            }
        }
    }
    
    /* FUNCTIONS END */
    
    // On scroll
    $( window ).scroll( function () {  
        animateChartWhenVisible( contents );
    } );
    
    /* On load */    
    animateChartWhenVisible( contents );