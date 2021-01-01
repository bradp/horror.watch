document.addEventListener( 'DOMContentLoaded', function() {
	let modalTrigger = document.getElementById( 'watch-trigger' );

	modalTrigger.addEventListener( 'click', (event) => {
			event.preventDefault();
			document.getElementById('watch').classList.remove('hidden');
		} );
} );

document.addEventListener( 'DOMContentLoaded', function() {
	let modal = document.getElementById( 'watch' );
	let overlay = document.getElementById( 'watch-overlay' );

	overlay.addEventListener( 'click', function() {
		modal.classList.add( 'hidden' );
	} );
} );
