<?php
/**
 * Title: Mindwell Hero section
 * Slug: mindwell/mindwell-hero
 *
 * @package mindwell
 */

?>
<!-- wp:group {"style":{"spacing":{"blockGap":"0","margin":{"top":"0","bottom":"0"},"padding":{"right":"0","left":"0","top":"4rem","bottom":"3rem"}}},"backgroundColor":"secondary","layout":{"type":"constrained"}} -->
<div class="wp-block-group has-secondary-background-color has-background" style="margin-top:0;margin-bottom:0;padding-top:4rem;padding-right:0;padding-bottom:3rem;padding-left:0"><!-- wp:columns {"style":{"spacing":{"margin":{"top":"0"},"padding":{"top":"2.5rem","bottom":"2.5rem"},"blockGap":{"left":"var:preset|spacing|50"}}},"backgroundColor":"secondary"} -->
	<div class="wp-block-columns has-secondary-background-color has-background" style="margin-top:0;padding-top:2.5rem;padding-bottom:2.5rem"><!-- wp:column {"verticalAlignment":"center","width":"100%"} -->
		<div class="wp-block-column is-vertically-aligned-center" style="flex-basis:100%"><!-- wp:heading {"level":1,"style":{"spacing":{"margin":{"top":"0rem","bottom":"2rem"}}}} -->
			<h1 class="wp-block-heading" style="margin-top:0rem;margin-bottom:2rem"><?php esc_html_e( 'Put Your ', 'mindwell' ); ?><strong><?php esc_html_e( 'Mental Health First', 'mindwell' ); ?></strong></h1>
			<!-- /wp:heading -->

			<!-- wp:paragraph {"style":{"typography":{"lineHeight":"1.7"},"spacing":{"margin":{"top":"0.4rem","bottom":"2.56rem","right":"1.75rem"}}},"fontSize":"paragraph-hero"} -->
			<p class="has-paragraph-hero-font-size" style="margin-top:0.4rem;margin-right:1.75rem;margin-bottom:2.56rem;line-height:1.7"><?php esc_html_e( 'Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.', 'mindwell' ); ?></p>
			<!-- /wp:paragraph -->

			<!-- wp:buttons -->
			<div class="wp-block-buttons"><!-- wp:button {"style":{"spacing":{"padding":{"left":"3rem","right":"3rem","top":"0.94rem","bottom":"0.94rem"}}},"className":"is-style-outline"} -->
				<div class="wp-block-button is-style-outline"><a class="wp-block-button__link wp-element-button" style="padding-top:0.94rem;padding-right:3rem;padding-bottom:0.94rem;padding-left:3rem"><?php esc_html_e( 'Get Started', 'mindwell' ); ?></a></div>
				<!-- /wp:button -->
			</div>
			<!-- /wp:buttons -->
		</div>
		<!-- /wp:column -->

		<!-- wp:column {"verticalAlignment":"center","width":"100%","style":{"spacing":{"padding":{"bottom":"3.56rem"}}}} -->
		<div class="wp-block-column is-vertically-aligned-center" style="padding-bottom:3.56rem;flex-basis:100%"><!-- wp:image {"align":"center","id":26,"sizeSlug":"full","linkDestination":"none"} -->
			<figure class="wp-block-image aligncenter"><img src="<?php echo esc_url( MW_DIR_URI ); ?>/assets/images/hero.png" alt="<?php esc_attr_e( 'Hero image', 'mindwell' ); ?>" class="wp-image-26"/></figure>
			<!-- /wp:image -->
		</div>
		<!-- /wp:column -->
	</div>
	<!-- /wp:columns -->
</div>
<!-- /wp:group -->
