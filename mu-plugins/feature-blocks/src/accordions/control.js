/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';
import {
	PanelBody,
	Button,
	ButtonGroup,
	TextControl,
	TextareaControl,
	Notice,
} from '@wordpress/components';
import { useState } from '@wordpress/element';

/**
 * Tabs block inspector controls
 *
 * @param {Object}   props               - Component props.
 * @param {Object}   props.attributes    - Block attributes.
 * @param {Function} props.setAttributes - Block attributes setter.
 */
export default function TabsInspectorControls( { attributes, setAttributes } ) {
	const { postUrl, customAccordion = [] } = attributes;

	const [ errors, setErrors ] = useState( {} );
	const [ apiUrl, setApiUrl ] = useState( postUrl || '' );
	const [ newAccordionItem, setNewAccordionItem ] = useState( {
		title: '',
		body: '',
	} );

	/**
	 * Updates the API URL and handles any errors.
	 *
	 * @param {string} value - The new API URL value.
	 * @return {void}
	 */
	const handleUrlChange = ( value ) => {
		if ( ! isValidUrl( value ) ) {
			setErrors( {
				...errors,
				apiUrl: __( 'Please enter a valid URL', 'mindwell' ),
			} );
		} else {
			setErrors( {
				...errors,
				apiUrl: '',
			} );
			setApiUrl( value );
		}
	};

	/**
	 * Handle setting the attribute.
	 *
	 * @return {void} The function does not return a value.
	 */
	const handleSetPosturlAttribute = () => {
		if ( isValidUrl( apiUrl ) && apiUrl ) {
			setAttributes( {
				...attributes,
				postUrl: apiUrl,
			} );
		}
	};

	/**
	 * Checks if a given URL is valid.
	 *
	 * @param {string} url - The URL to be validated.
	 * @return {boolean} Returns true if the URL is valid, false otherwise.
	 */
	const isValidUrl = ( url ) => {
		try {
			new URL( url );
			return true;
		} catch {
			return false;
		}
	};

	/**
	 * Handles adding an accordion item.
	 *
	 * @return {void}
	 */
	const handleAddAccordionItem = () => {
		if ( newAccordionItem.title && newAccordionItem.body ) {
			setAttributes( {
				...attributes,
				customAccordion: [ ...customAccordion, newAccordionItem ],
			} );
			setNewAccordionItem( { title: '', body: '' } );
			setErrors( {
				...errors,
				newAccordionItem: '',
			} );
		} else {
			setErrors( {
				...errors,
				newAccordionItem: __(
					'Please enter both title and body',
					'mindwell'
				),
			} );
		}
	};

	return (
		<InspectorControls>
			<PanelBody title={ __( 'Accordion settings', 'mindwell' ) }>
				<TextControl
					placeholder={ __( 'Enter API URL', 'mindwell' ) }
					value={ apiUrl }
					onChange={ handleUrlChange }
					help={
						errors.apiUrl ? (
							<Notice status="warning" isDismissible={ false }>
								{ errors.apiUrl }
							</Notice>
						) : (
							''
						)
					}
				/>

				<ButtonGroup>
					<Button
						variant="primary"
						onClick={ handleSetPosturlAttribute }
						icon="plus-alt2"
						label={ __( 'Fetch Posts', 'mindwell' ) }
					>
						{ __( 'Fetch Posts', 'mindwell' ) }
					</Button>
				</ButtonGroup>

				{ /* Section for adding custom accordion items */ }
				<PanelBody
					title={ __( 'Add Custom Accordion', 'mindwell' ) }
					className={ 'custom-accordion__panel' }
				>
					<h2>{ __( 'Title', 'mindwell' ) }</h2>
					<TextControl
						placeholder={ __(
							'Enter Accordion Title',
							'mindwell'
						) }
						value={ newAccordionItem.title }
						onChange={ ( value ) =>
							setNewAccordionItem( {
								...newAccordionItem,
								title: value,
							} )
						}
					/>
					<h2>{ __( 'Body', 'mindwell' ) }</h2>
					<TextareaControl
						placeholder={ __( 'Enter Accordion Body', 'mindwell' ) }
						value={ newAccordionItem.body }
						onChange={ ( value ) =>
							setNewAccordionItem( {
								...newAccordionItem,
								body: value,
							} )
						}
						help={
							errors.newAccordionItem ? (
								<Notice
									status="warning"
									isDismissible={ false }
								>
									{ errors.newAccordionItem }
								</Notice>
							) : (
								''
							)
						}
					/>
					<Button
						variant="primary"
						onClick={ handleAddAccordionItem }
						icon="plus-alt2"
						label={ __( 'Add Accordion Item', 'mindwell' ) }
					>
						{ __( 'Add Accordion Item', 'mindwell' ) }
					</Button>
				</PanelBody>
			</PanelBody>
		</InspectorControls>
	);
}
