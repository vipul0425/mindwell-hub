<?php
/**
 * Renders the Accordion block on the frontend.
 *
 * @package Mindwell
 */

// Retrieve the URL of the post from the attributes, postUrl has a default value 'https://jsonplaceholder.typicode.com/posts?_limit=6' so it cannot be null.
$post_url = $attributes['postUrl'];

// Retrieve the custom accordions from the attributes.
$custom_accordions = $attributes['customAccordion'];

// Make an HTTP GET request to the specified URL.
$response = wp_remote_get( $post_url );


if ( ! function_exists( 'accordion_item' ) ) {
	/**
	 * Generates an accordion item for a FAQ section.
	 *
	 * @param mixed $title The title of the accordion item.
	 * @param mixed $body The content of the accordion item.
	 */
	function accordion_item( $title, $body ) {

		// Output the HTML structure for an accordion item.
		?>
	<li>
		<details class="faq__accordion--item">
			<summary>
				<span><?php echo esc_html( $title ); ?></span>
		</summary>
		</details>
		<p class="faq__accordion--item-content"><?php echo esc_html( $body ); ?></p>
	</li>

		<?php
	}
}

?>

<!-- Start of the Accordion block -->
<div class="faq__accordion">
	<ul class="faq__accordion--items" id="faq__accordion--items">
		<?php

		// Check if the HTTP request was successful and the response code is 200.
		if ( ! is_wp_error( $response ) && 200 === $response['response']['code'] ) {

			// Retrieve the dynamic posts from the response body.
			$dynamic_posts = json_decode( wp_remote_retrieve_body( $response ) );

			if ( null !== $dynamic_posts ) {
				// Iterate over each dynamic post and generate an accordion item.
				foreach ( $dynamic_posts as $accordion ) {
					accordion_item( $accordion->title, $accordion->body );
				}
			}
		} else {
			?>

			<!-- Display an error message if the data could not be fetched. -->
			<li><?php esc_html_e( 'Unable to fetch data', 'mindwell' ); ?></li>
			<?php
		}

		// Check if there are any custom accordions.
		if ( ! empty( $custom_accordions ) ) {

			// Iterate over each custom accordion and generate an accordion item.
			foreach ( $custom_accordions as $accordion ) {
				accordion_item( $accordion['title'], $accordion['body'] );
			}
		}
		?>
	</ul>
</div>
<!-- End of the Accordion block -->
