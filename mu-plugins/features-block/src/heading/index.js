/**
 * WordPress dependencies
 */
import { registerBlockType } from '@wordpress/blocks';

/**
 * Internal dependencies
 */
import Edit from './edit';
import Save from './save';
import blockMeta from './block.json';

/**
 * Register block
 */
registerBlockType( blockMeta.name, {
	...blockMeta,
	edit: Edit,
	save: Save,
} );
