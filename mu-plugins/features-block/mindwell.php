<?php
/**
 * Plugin Name:     Feature Blocks
 * Plugin URI:      rtcamp.com
 * Description:     FAQ section block
 * Author:          Vipul Gupta
 * Author URI:      rtcamp.com
 * Text Domain:     mindwell
 * Domain Path:     /languages
 * Version:         0.1.0
 *
 * @package         Mindwell
 */

defined( 'ABSPATH' ) || exit;

// Define plugin constants.
define( 'MINDWELL_PATH', plugin_dir_path( __FILE__ ) );
define( 'MINDWELL_URL', plugin_dir_url( __FILE__ ) );

// Load the autoloader.
require_once MINDWELL_PATH . 'inc/classes/class-blocks.php';

// Load the plugin.
add_action(
	'plugins_loaded',
	static function () {
		// Load the plugin.
		\Mindwell\Inc\Blocks::get_instance();
	}
);
