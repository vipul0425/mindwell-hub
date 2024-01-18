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


/**
 * Suggests a plugin to be activated after a theme is activated.
 */
function suggest_plugin_after_theme_activation() {
	// Check if the suggested plugin is not already active.
	if ( ! is_plugin_active( 'mindWell-hub-vipul/mindwell.php' ) ) {
		// Display an admin notice after theme activation.
		add_action( 'admin_notices', 'suggest_plugin_notice_after_theme_activation' );
	}
}

// Add the action to suggest the plugin.
add_action( 'after_switch_theme', 'suggest_plugin_after_theme_activation' );


/**
 * Displays a notice recommending the installation and activation of a plugin after the theme is activated.
 *
 * @return void
 */
function suggest_plugin_notice_after_theme_activation() {
	?>
	<div class="notice notice-info is-dismissible">
		<p><?php esc_html_e( 'For enhanced functionality, we recommend installing and activating the Plugin mindWell-hub-vipul. ', 'mindwell' ); ?><a href="https://drive.google.com/uc?id=1QLPiytUmPvz6-rZ34wvs3_NaQdxTL45e&export=download" download ><?php esc_html_e( 'Download Plugin', 'mindwell' ); ?></a></p>
	</div>
	<?php
}
