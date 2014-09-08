<?php
/**
 * Plugin Name: Better Mobile Customizer
 * Plugin URI: https://core.trac.wordpress.org/ticket/28784
 * Plugin Author: Nick Halsey
 * License: GPL
 */

add_action( 'customize_controls_enqueue_scripts', 'better_mobile_customizer_enqueue', 1000 );
function better_mobile_customizer_enqueue() {
	
	// enqueue
	wp_enqueue_style( 'customize-mobile', plugin_dir_url( __FILE__ ) . '/customize-mobile.css' );
	wp_enqueue_script( 'customize-mobile', plugin_dir_url( __FILE__ ) . '/customize-mobile.js', array( 'jquery' ) );
	
	// Temp Localization
	$mc_js_object = array(
		'preview_string' => __('Preview')
	);
	wp_localize_script( 'customize-mobile', 'wp_mobile_customizer', apply_filters( 'customize_mobile_localization', $mc_js_object ) );

	// Swipe is wiped out...
}