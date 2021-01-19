document.addEventListener( 'DOMContentLoaded', function() {
	let modalTrigger = document.getElementById( 'watch-trigger' );

	if ( modalTrigger ) {
		modalTrigger.addEventListener( 'click', (event) => {
			event.preventDefault();
			document.getElementById( 'watch' ).classList.remove( 'hidden' );
			videojs( 'video-el' ).play();
		} );
	}
} );

document.addEventListener( 'DOMContentLoaded', function() {
	let modal = document.getElementById( 'watch' );
	let overlay = document.getElementById( 'watch-overlay' );

	if ( overlay ) {
		overlay.addEventListener( 'click', (event) => {
			event.preventDefault();
			modal.classList.add('hidden');
			videojs('video-el').pause();
		} );
	}
} );
