/**
 * WordPress dependencies
 */
import domReady from '@wordpress/dom-ready';

domReady( () => {
	/**
	 * Closes all other accordions except the current one.
	 *
	 * @param {Element} currentAccordion - The current accordion element.
	 */
	function closeOtherAccordions( currentAccordion ) {
		currentAccordion
			.closest( '.faq__accordion--items' )
			.querySelectorAll( '.faq__accordion--item' )
			?.forEach( ( accordion ) => {
				if ( accordion !== currentAccordion && accordion.open ) {
					accordion.removeAttribute( 'open' );
					accordion.classList.remove( 'open' );
				}
			} );
	}

	// Add accordion toggle functionality after the accordion items are added
	document
		.querySelectorAll( '.faq__accordion--item' )
		?.forEach( ( accordion ) => {
			accordion?.addEventListener( 'toggle', function () {
				if ( this.open ) {
					this.classList.add( 'open' );
					closeOtherAccordions( this );
				} else {
					this.classList.remove( 'open' );
				}
			} );
		} );
} );
