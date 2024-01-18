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
import './editor.scss';
import './style.scss';

/**
 * Register block
 */
registerBlockType( blockMeta.name, {
	...blockMeta,
	edit: Edit,
	save: Save,
} );
