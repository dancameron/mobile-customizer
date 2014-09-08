// This can be implemented much more simply & elegantly as a core patch.
( function( wp, $ ) {

	if ( ! wp || ! wp.customize ) { return; }

	// Set up our namespace.
	var api = wp.customize;
	
	function initMobileCustomize() {
		$( '.collapse-sidebar .collapse-sidebar-label' ).text( 'Preview' );

		/**
		 * Toggle preview/controls button.
		 */
		$( '.collapse-sidebar' ).on( 'click keydown', function( event ) {
			if ( event.type === 'keydown' &&  13 !== event.which ) // enter
				return;

			var label = $( this ).find( '.collapse-sidebar-label' );
			if ( 'Preview' === label.text() ) {
				label.text( 'Controls' );
			} else {
				label.text( 'Preview' );				
			}

			event.preventDefault();
		} );

		/**
		 * Toggle the preview/controls by swiping.
		 */
		$( window ).on( 'swipeleft', function( e ) {
			if ( $( '.wp-full-overlay' ).hasClass( 'expanded' ) ) {
				// Show the preview.
				$( '.collapse-sidebar' ).trigger( 'click' );
			}
		} );

		$( 'body' ).on( 'swiperight', function( e ) {
			if ( $( '.wp-full-overlay' ).hasClass( 'collapsed' ) ) {
				// Show the controls.
				$( '.collapse-sidebar' ).trigger( 'click' );
				e.stopPropagation();
				e.preventDefault();
			}
		} );

	}

	$( document ).ready( function() { initMobileCustomize(); } );

})( window.wp, jQuery );