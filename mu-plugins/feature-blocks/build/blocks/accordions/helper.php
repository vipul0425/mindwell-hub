<?php
/**
 * Helper functions for the Accordion block.
 *
 * @package Mindwell
 */

if ( ! function_exists( 'mh_accordion_item' ) ) {
	/**
	 * Generates an accordion item for a FAQ section.
	 *
	 * @param mixed $title The title of the accordion item.
	 * @param mixed $body The content of the accordion item.
	 */
	function mh_accordion_item( $title, $body ) {

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

/**
 * Fetches accordion data from the specified URL.
 *
 * @param string $post_url The URL to fetch data from.
 * @return mixed The dynamic posts retrieved from the response body, or an error message if unable to fetch data.
 */
function mh_fetch_accordion_data( $post_url ) {
	// Make an HTTP GET request to the specified URL.
	$response = wp_remote_get( $post_url );

	// Check if the HTTP request was successful and the response code is 200.
	if ( ! is_wp_error( $response ) && 200 === $response['response']['code'] ) {
		// Retrieve the dynamic posts from the response body.
		$dynamic_posts = json_decode( wp_remote_retrieve_body( $response ) );

		// Return the dynamic posts.
		return $dynamic_posts;
	} else {
		// Return an error message.
		return __( 'Unable to fetch data', 'mindwell' );
	}
}
