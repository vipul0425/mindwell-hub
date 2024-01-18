/**
 * WordPress dependencies
 */
import { useBlockProps, RichText } from '@wordpress/block-editor';

/**
 * Renders the "Save" component.
 *
 * @param {Object} props            - The properties object.
 * @param {Object} props.attributes - The attributes object.
 * @return {JSX.Element} The rendered component.
 */
const Save = ( { attributes } ) => {
	const { heading } = attributes;
	return (
		<RichText.Content
			{ ...useBlockProps.save( { className: 'faq__title' } ) }
			tagName="h2"
			value={ heading }
		/>
	);
};

export default Save;
