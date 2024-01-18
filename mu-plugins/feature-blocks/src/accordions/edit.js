/**
 * WordPress dependencies
 */
import { useBlockProps } from '@wordpress/block-editor';
import TabsInspectorControls from './control';
import useFetch from './useFetch';
import { __ } from '@wordpress/i18n';
import AccordionElement from './accordionElement';
import { Spinner } from '@wordpress/components';

/**
 * Edit function for the Movies Gutenberg block.
 *
 * @param {Object} props               - The properties passed to the block.
 * @param {Object} props.attributes    - The block's attributes.
 * @param {Object} props.setAttributes - Function to set block attributes.
 * @return {Object} The rendered block editor UI.
 */
const Edit = ( { attributes, setAttributes } ) => {
	const { postUrl } = attributes;
	const { customAccordion } = attributes;

	const { data, loading, error } = useFetch( postUrl );

	/**
	 * Handles the removal of a custom accordion at the specified index.
	 *
	 * @param {number} index - The index of the custom accordion to be removed.
	 * @return {void} This function does not return a value.
	 */
	const handleRemoveCustomAccordion = ( index ) => {
		const newCustomAccordion = [ ...customAccordion ];
		newCustomAccordion.splice( index, 1 );
		setAttributes( { ...attributes, customAccordion: newCustomAccordion } );
	};

	return (
		<div { ...useBlockProps( { className: 'faq__accordion' } ) }>
			<ul className="faq__accordion--items" id="faq__accordion--items">
				{ error && <li>{ error }</li> }
				{ loading && <Spinner /> }
				{ data?.map( ( item, index ) => (
					<AccordionElement
						key={ index }
						index={ index }
						title={ item.title }
						body={ item.body }
						removable={ false }
					/>
				) ) }
				{ customAccordion?.length === 0 && (
					<li className="lead-text">
						{ __(
							'Custom Accordions will appear here..',
							'mindwell'
						) }
						.
					</li>
				) }
				{ customAccordion?.map( ( item, index ) => (
					<AccordionElement
						key={ index }
						index={ index }
						title={ item.title }
						body={ item.body }
						removable={ true }
						handleRemoveCustomAccordion={
							handleRemoveCustomAccordion
						}
					/>
				) ) }
			</ul>

			<TabsInspectorControls
				attributes={ attributes }
				setAttributes={ setAttributes }
			/>
		</div>
	);
};

export default Edit;
