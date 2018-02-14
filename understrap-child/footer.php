<?php
/**
 * The template for displaying the footer.
 *
 * Contains the closing of the #content div and all content after
 *
 * @package understrap
 */

$the_theme = wp_get_theme();
$container = get_theme_mod( 'understrap_container_type' );
?>

<?php get_sidebar( 'footerfull' ); ?>


<div class="wrapper" id="wrapper-footer">
	<footer class="site-footer" role="contentinfo">

	<div class="<?php echo esc_attr( $container ); ?>">

		<div class="row">
					<div class="col col-md-6">

						<span>&copy; Copyright 2018 Game On</span>

			</div><!--col end -->

			<div class="col col-md-6 text-right">


				<span>Web Design by <a href="https://www.digitalstream.co.nz/" target="_blank">Digital Stream</a></span>


			</div><!--col end -->



		</div><!-- row end -->

	</div><!-- container end -->
	</footer><!-- #colophon -->

</div><!-- wrapper end -->

</div><!-- #page we need this extra closing tag here -->

<?php wp_footer(); ?>

</body>

</html>
