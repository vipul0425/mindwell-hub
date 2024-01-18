<?php
/**
 * Helper functions for the Accordion block.
 *
 * @package Mindwell
 */

/**
 * Fetches accordion data from the specified URL.
 *
 * @param string $post_url The URL to fetch data from.
 * @return mixed The dynamic posts retrieved from the response body, or an error message if unable to fetch data.
 */
function fetch_accordion_data( $post_url ) {
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
