<?php
/**
 * Renders the Accordion block on the frontend.
 *
 * @package Mindwell
 */

// Include the helper functions file.
require_once MINDWELL_PATH . 'assets/blocks/accordions/helper.php';

// Retrieve the URL of the post from the attributes, postUrl has a default value 'https://jsonplaceholder.typicode.com/posts?_limit=6' so it cannot be null.
$post_url = $attributes['postUrl'];

// Retrieve the custom accordions from the attributes.
$custom_accordions = $attributes['customAccordion'];

// Make an HTTP GET request to the specified URL.
$accordion_data = fetch_accordion_data( $post_url );

?>

<!-- Start of the Accordion block -->
<div <?php echo wp_kses_data( get_block_wrapper_attributes( array( 'class' => 'faq__accordion' ) ) ); ?>>
	<ul class="faq__accordion--items" id="faq__accordion--items">
		<?php


		// Check if the accordion data is an array.
		if ( is_array( $accordion_data ) ) {
			// Iterate over each dynamic post and generate an accordion item.
			foreach ( $accordion_data as $accordion ) {
				mh_accordion_item( $accordion->title, $accordion->body );
			}
		} else {
			// Display an error message if the data could not be fetched.
			echo '<li>' . esc_html( $accordion_data ) . '</li>';
		}

		// Check if there are any custom accordions.
		if ( ! empty( $custom_accordions ) ) {

			// Iterate over each custom accordion and generate an accordion item.
			foreach ( $custom_accordions as $accordion ) {
				mh_accordion_item( $accordion['title'], $accordion['body'] );
			}
		}
		?>
	</ul>
</div>
<!-- End of the Accordion block -->
