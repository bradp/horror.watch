/* Place your JS here */
function view() {
	let modalTrigger = document.querySelectorAll( '.watch-trigger' );
	modalTrigger.forEach( function( trigger ) {
		trigger.addEventListener( 'click', function( event ) {
			event.preventDefault();
			document.getElementById( 'watch' ).classList.remove( 'hidden' );
		} );
	} );
}

function unview() {
	let modal = document.getElementById( 'watch' );
	let overlay = document.getElementById( 'watch-overlay' );

	overlay.addEventListener( 'click', function() {
		modal.classList.add( 'hidden' );
	} );
}

function init( f ) {
	document.addEventListener( 'DOMContentLoaded', f );
}

init( view );
init( unview );
