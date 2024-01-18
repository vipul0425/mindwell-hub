/**
 * WordPress dependencies
 */
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

/**
 * Renders the Save component.
 *
 * @return {JSX.Element} The rendered Save component.
 */
const Save = () => {
	return (
		<div { ...useBlockProps.save( { className: 'faq-container' } ) }>
			<InnerBlocks.Content />
		</div>
	);
};

export default Save;
