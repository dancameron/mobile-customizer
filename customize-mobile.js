( function( $ ) {

	function initMobileCustomize() {

		$( '.collapse-sidebar .collapse-sidebar-label' ).text( wp_mobile_customizer.preview_string );

		// Preview link actions
		$( '.collapse-sidebar' ).on( 'click keydown', function( event ) {
			closeOpenPanels();
			closeAccoridians();
		} );

		// Expand/Collapse accordion sections on click.
		$( '.accordion-container' ).on( 'click keydown', '.accordion-section-title', function( e ) {
			// accessibility
			if ( e.type === 'keydown' && 13 !== e.which ) { // "return" key
				return;
			}

			// If not collapsed
			if ( ! $( this ).closest('.wp-full-overlay').hasClass('collapsed') ) {
				return;
			};

			e.preventDefault(); // Keep this AFTER the key filter above
			mobileExpandPanel( $( this ) );
		});
	}

	/**
	 * Trigger the collapse link
	 * @param  {} el 
	 * @return {null}    
	 */
	function mobileExpandPanel ( el ) {
		$( '.collapse-sidebar' ).trigger( 'click' );
	}

	/**
	 * Trigger the collapse link
	 * @param  {} el 
	 * @return {null}    
	 */
	function closeOpenPanels ( el ) {
		$( '.control-panel-back' ).trigger( 'click' );
	}

	/**
	 * Find the open section and close the content.
	 * @param  {} el 
	 * @return {null}    
	 */
	function closeAccoridians ( el ) {
		var openSection = $('.accordion-section.open');

		openSection.removeClass( 'open' );
		openSection.find( '.accordion-section-content' ).slideUp( 150 );
		
	}

	$( document ).ready( function() { initMobileCustomize(); } );

})( jQuery );