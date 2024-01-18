/**
 * WordPress dependencies
 */
import { useBlockProps, RichText } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

/**
 * Renders the Edit component.
 *
 * @param {Object}   props               - The properties object.
 * @param {Object}   props.attributes    - The attributes object.
 * @param {Function} props.setAttributes - The setAttributes function.
 * @return {JSX.Element} - The rendered React component.
 */
const Edit = ( { attributes, setAttributes } ) => {
	const { heading } = attributes;
	return (
		<RichText
			{ ...useBlockProps( { className: 'faq__title' } ) }
			tagName="h2"
			value={ heading }
			onChange={ ( content ) => setAttributes( { heading: content } ) }
			placeholder={ __( 'Heading…', 'mindwell' ) }
		/>
	);
};

export default Edit;
