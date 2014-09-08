<?php
/**
 * Plugin Name: Better Mobile Customizer
 * Plugin URI: https://core.trac.wordpress.org/ticket/28784
 * Plugin Author: Nick Halsey
 * License: GPL
 */

add_action( 'customize_controls_enqueue_scripts', 'better_mobile_customizer_enqueue' );
function better_mobile_customizer_enqueue() {
	wp_enqueue_style( 'customize-mobile', plugin_dir_url( __FILE__ ) . '/customize-mobile.css' );
	wp_enqueue_script( 'customize-mobile', plugin_dir_url( __FILE__ ) . '/customize-mobile.js', array( 'jquery' ) );

	// jQuery Mobile would obviously be bundled with core.
	//wp_enqueue_style( 'jquery-mobile', '//ajax.googleapis.com/ajax/libs/jquerymobile/1.4.3/jquery.mobile.min.css' );
	wp_enqueue_script( 'jquery-mobile', '//ajax.googleapis.com/ajax/libs/jquerymobile/1.4.3/jquery.mobile.min.js', array( 'jquery' ) );
}