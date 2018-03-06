<?php
/**
 * Astra Child Theme functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package Astra Child
 * @since 1.0.0
 */

/**
 * Define Constants
 */
define( 'CHILD_THEME_ASTRA_CHILD_VERSION', '1.0.0' );

/**
 * Enqueue styles
 */
function child_enqueue_styles() {

	echo '<link href="https://fonts.googleapis.com/css?family=Fjalla+One|Londrina+Solid|Press+Start+2P|Roboto+Condensed:300,300i,400,400i" rel="stylesheet">';

	wp_enqueue_style( 'astra-child-theme-css', get_stylesheet_directory_uri() . '/style.css', array('astra-theme-css'), CHILD_THEME_ASTRA_CHILD_VERSION, 'all' );
  wp_enqueue_style( 'astra-child-custom-css', get_stylesheet_directory_uri() . '/css/style.min.css', array('astra-theme-css'), CHILD_THEME_ASTRA_CHILD_VERSION, 'all' );

}

add_action( 'wp_enqueue_scripts', 'child_enqueue_styles', 15 );


/* Enqueue scripts */
function custom_js() {
    wp_enqueue_script( 'custom_js', get_stylesheet_directory_uri() . '/js/script.min.js', array(), false, false );
}

add_action('wp_enqueue_scripts', 'custom_js');


/* add html to footer before closing body tag */
// Add scripts to wp_footer()
function child_theme_footer_script() {
    echo '<a href="#" id="back-to-top">
        <span class="fa-stack fa-lg">
          <i class="fa fa-square fa-stack-2x"></i>
          <i class="fa fa-angle-up fa-stack-1x fa-inverse"></i>
        </span>
    </a>';
 }
add_action( 'wp_footer', 'child_theme_footer_script' );
