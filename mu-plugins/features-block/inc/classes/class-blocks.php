<?php
/**
 * Register blocks.
 *
 * @package Mindwell
 */

namespace Mindwell\Inc;

/**
 * Class Blocks
 */
class Blocks {

	/**
	 * Class instance.
	 *
	 * @var Blocks
	 */
	private static $instance;

	/**
	 * Get instance of class.
	 */
	public static function get_instance() {

		if ( null === self::$instance ) {
			self::$instance = new self();
		}

		return self::$instance;
	}

	/**
	 * Constructor.
	 */
	private function __construct() {

		// Actions and Filters.
		add_action( 'init', array( $this, 'register_blocks' ) );
		add_filter( 'block_categories_all', array( $this, 'register_block_categories' ) );
	}

	/**
	 * Register blocks.
	 */
	public function register_blocks() {

		$blocks = array(
			'faq'        => '/build/blocks/faq',
			'accordions' => '/build/blocks/accordions',
			'heading'    => '/build/blocks/heading',
		);

		foreach ( $blocks as $feature => $block ) {
			if ( is_dir( MINDWELL_PATH . $block ) ) {
				register_block_type( MINDWELL_PATH . $block );
			}
		}
	}


	/**
	 * Registers additional block categories.
	 *
	 * @param array $block_categories An array of existing block categories.
	 * @return array The modified array of block categories.
	 */
	public function register_block_categories( $block_categories ) {

		return array_merge(
			$block_categories,
			array(
				array(
					'slug'  => 'mindwell-blocks',
					'title' => esc_html__( 'Mindwell Blocks', 'mindwell' ),
					'icon'  => null,
				),
			)
		);
	}
}
