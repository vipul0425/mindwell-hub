/**
 * WordPress dependencies
 */
import { Button, ButtonGroup } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

/**
 * Renders an accordion element.
 *
 * @param {Object}   props                             - The properties passed to the block.
 * @param {number}   props.index                       - The index of the accordion element.
 * @param {string}   props.title                       - The title of the accordion element.
 * @param {string}   props.body                        - The body of the accordion element.
 * @param {boolean}  props.removable                   - Specifies whether the accordion element is removable.
 * @param {Function} props.handleRemoveCustomAccordion - The function to handle removing the custom accordion.
 * @return {JSX.Element} The rendered accordion element.
 */
const AccordionElement = ( {
	index,
	title,
	body,
	removable,
	handleRemoveCustomAccordion,
} ) => {
	const bodyWithLineBreaks = body.replace( /\n/g, '\n' ); // Optionally replace newline characters with '\n'
	return (
		<li>
			<details className="faq__accordion--item">
				<summary>
					<span>{ title }</span>
					<ButtonGroup>
						{ removable && (
							<Button
								variant="secondary"
								isDestructive
								onClick={ () => {
									handleRemoveCustomAccordion( index );
								} }
							>
								{ __( 'Remove', 'mindwell' ) }
							</Button>
						) }
					</ButtonGroup>
				</summary>
			</details>
			<p className="faq__accordion--item-content">
				{ bodyWithLineBreaks }
			</p>
		</li>
	);
};

export default AccordionElement;
