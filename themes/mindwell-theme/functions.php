<?php
/**
 * Theme functions and definitions
 *
 * @package mindwell
 */

define( 'MW_VERSION', wp_get_theme()->get( 'Version' ) );
define( 'MW_DIR_URI', get_stylesheet_directory_uri() );
require_once ABSPATH . 'wp-admin/includes/plugin.php';

/**
 * Enqueue scripts and styles.
 */
function mw_scripts() {
	wp_enqueue_style( 'mw-style', get_stylesheet_uri(), array(), MW_VERSION );
}

add_action( 'wp_enqueue_scripts', 'mw_scripts' );
