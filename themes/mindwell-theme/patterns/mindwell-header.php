<?php
/**
 * Title: Mindwell Header
 * Slug: mindwell/mindwell-header
 * Categories: header
 * Block Types: core/template-part/header
 *
 * @package mindwell
 */

?>
<!-- wp:group {"style":{"spacing":{"blockGap":"0","margin":{"top":"0","bottom":"0"},"padding":{"right":"0","left":"0","top":"0","bottom":"0"}},"position":{"type":"sticky","top":"0px"}},"backgroundColor":"secondary","layout":{"type":"constrained"}} -->
<div class="wp-block-group has-secondary-background-color has-background" style="margin-top:0;margin-bottom:0;padding-top:0;padding-right:0;padding-bottom:0;padding-left:0"><!-- wp:columns {"verticalAlignment":"center","isStackedOnMobile":false,"style":{"spacing":{"margin":{"top":"0"},"padding":{"top":"2.5rem","bottom":"2.5rem"},"blockGap":{"left":"var:preset|spacing|50"}}},"backgroundColor":"secondary"} -->
	<div class="wp-block-columns are-vertically-aligned-center is-not-stacked-on-mobile has-secondary-background-color has-background" style="margin-top:0;padding-top:2.5rem;padding-bottom:2.5rem"><!-- wp:column {"verticalAlignment":"center","width":"40%","layout":{"type":"default"}} -->
		<div class="wp-block-column is-vertically-aligned-center" style="flex-basis:40%"><!-- wp:site-title {"style":{"elements":{"link":{"color":{"text":"var:preset|color|primary"}}},"typography":{"textTransform":"uppercase","fontStyle":"normal","fontWeight":"700"}},"textColor":"primary","fontSize":"paragraph-hero"} /--></div>
		<!-- /wp:column -->

		<!-- wp:column {"verticalAlignment":"center","width":"100%","style":{"spacing":{"padding":{"bottom":"0rem"}}}} -->
		<div class="wp-block-column is-vertically-aligned-center" style="padding-bottom:0rem;flex-basis:100%"><!-- wp:group {"className":"nav-row","layout":{"type":"flex","flexWrap":"nowrap","justifyContent":"right"}} -->
			<div class="wp-block-group nav-row"><!-- wp:navigation {"icon":"menu","layout":{"type":"flex","justifyContent":"left","flexWrap":"wrap"},"style":{"spacing":{"blockGap":"2rem"}},"fontSize":"paragraph"} /-->

				<!-- wp:paragraph {"style":{"spacing":{"margin":{"left":"4rem"}}}, "className":"btn\u002d\u002dsign-in"} -->
				<p style="margin-left:4rem" class="btn--sign-in"><a href="#"><?php esc_html_e( 'Sign In', 'mindwell' ); ?></a></p>
				<!-- /wp:paragraph -->

				<!-- wp:buttons -->
				<div class="wp-block-buttons"><!-- wp:button {"style":{"spacing":{"padding":{"left":"2rem","right":"2rem","top":"0.7rem","bottom":"0.7rem"}}}} -->
					<div class="wp-block-button"><a class="wp-block-button__link wp-element-button" style="padding-top:0.7rem;padding-right:2rem;padding-bottom:0.7rem;padding-left:2rem"><?php esc_html_e( 'Sign up', 'mindwell' ); ?></a></div>
					<!-- /wp:button -->
				</div>
				<!-- /wp:buttons -->
			</div>
			<!-- /wp:group -->
		</div>
		<!-- /wp:column -->
	</div>
	<!-- /wp:columns -->
</div>
<!-- /wp:group -->
