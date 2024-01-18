<?php
/**
 * Title: Mindwell Faq Section
 * Slug: mindwell/mindwell-faq-section
 *
 * @package mindwell
 */

if ( is_plugin_active( 'mindWell-hub-vipul/mindwell.php' ) ) :
	?>

<!-- wp:mindwell/faq {"style":{"spacing":{"margin":{"top":"4.5rem"}}}} -->
<div class="wp-block-mindwell-faq alignwide faq-container" style="margin-top:4.5rem"><!-- wp:columns {"className":"faq"} -->
	<div class="wp-block-columns faq"><!-- wp:column {"className":"faq__info"} -->
		<div class="wp-block-column faq__info"><!-- wp:mindwell/heading -->
			<h2 class="wp-block-mindwell-heading faq__title"><?php esc_html_e( 'How we can ', 'mindwell' ); ?><br><strong><?php esc_html_e( 'help you', 'mindwell' ); ?></strong></h2>
			<!-- /wp:mindwell/heading -->

			<!-- wp:paragraph {"placeholder":"Description…","className":"faq__description"} -->
			<p class="faq__description"><?php esc_html_e( 'Good mental health is a human right - and Chearful.com provides you with a safe space to grow & flourish', 'mindwell' ); ?></p>
			<!-- /wp:paragraph -->

			<!-- wp:button {"className":"faq__btn"} -->
			<div class="wp-block-button faq__btn"><a class="wp-block-button__link wp-element-button"><?php esc_html_e( 'More FAQs', 'mindwell' ); ?></a></div>
			<!-- /wp:button -->

			<!-- wp:image {"id":154,"sizeSlug":"full","linkDestination":"none","className":"faq__img\u002d\u002dcontainer"} -->
			<figure class="wp-block-image size-full faq__img--container"><img src="<?php echo esc_url( MW_DIR_URI ); ?>/assets/images/faq.png" alt="<?php esc_attr_e( 'FAQ img', 'mindwell' ); ?>" class="wp-image-154" /></figure>
			<!-- /wp:image -->
		</div>
		<!-- /wp:column -->

		<!-- wp:column -->
		<div class="wp-block-column"><!-- wp:mindwell/accordion /--></div>
		<!-- /wp:column -->
	</div>
	<!-- /wp:columns -->
</div>
<!-- /wp:mindwell/faq -->
	<?php
	endif;
?>
