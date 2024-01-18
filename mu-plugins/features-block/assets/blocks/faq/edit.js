/**
 * WordPress dependencies
 */
import { useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

// Allowed blocks.
const ALLOWED_BLOCKS = [
	'core/paragraph',
	'mindwell/heading',
	'core/image',
	'core/button',
	'mindwell/accordion',
];

// Template for the block.
const TEMPLATE = [
	[
		'core/columns',
		{
			className: 'faq',
		},
		[
			[
				'core/column',
				{ className: 'faq__info' },
				[
					[ 'mindwell/heading', {} ],
					[
						'core/paragraph',
						{
							className: 'faq__description',
							typography: true,
							placeholder: __( 'Description…', 'mindwell' ),
						},
					],
					[ 'core/button', { className: 'faq__btn' } ],
					[ 'core/image', { className: 'faq__img--container' } ],
				],
			],
			[ 'core/column', {}, [ [ 'mindwell/accordion' ] ] ],
		],
	],
];

/**
 * Generate the function comment for the given function body.
 *
 * @return {JSX.Element} description of return value
 */
const Edit = () => {
	const innerBlocksProps = useInnerBlocksProps(
		{},
		{
			allowedBlocks: ALLOWED_BLOCKS,
			template: TEMPLATE,
			templateLock: 'all',
		}
	);
	return (
		<section { ...useBlockProps( { className: 'faq-container' } ) }>
			<div { ...innerBlocksProps } />
		</section>
	);
};

export default Edit;
