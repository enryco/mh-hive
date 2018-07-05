<?php
/*
Plugin Name: MH Hive
*/

$main_script = "main.16a7453d.js";
$main_css = "main.7556d3e8.css";

wp_register_script( 'mh-hive', "https://mh-hub-hive.firebaseapp.com/static/js/" . $main_script );
wp_register_script( 'mh-hive-development', "https://localhost:3000/static/js/bundle.js" );

// PRODUCTION
function mh_hive_init( $atts ) {

  global $main_css;
  wp_enqueue_script( 'mh-hive');
  wp_enqueue_style( 'mh-hive', "https://mh-hub-hive.firebaseapp.com/static/css/" . $main_css );
  return '<div id="root" style="width: 100%;height: 100%;"></div>';
}

// DEVELOPMENT
function mh_hive_init_development( $atts ) {

  wp_enqueue_script( 'mh-hive-development');
  return '<div id="root" style="width: 100%;height: 100%;border: 3px solid green;"></div>';
}

function hive_rewrite_rule() {
    add_rewrite_rule('hive','index.php?page_id=2397','top');
    add_rewrite_rule('hive/([^/]*)','index.php?page_id=2397','top');
    add_rewrite_rule('hive/([^/]*)/([^/]*)','index.php?page_id=2397','top');
    add_rewrite_rule('hive/([^/]*)/([^/]*)/([^/]*)','index.php?page_id=2397','top');
}


// add shortcodes
add_shortcode( 'mh-hive', 'mh_hive_init' );
add_shortcode( 'mh-hive-dev', 'mh_hive_init_development' );
add_action('init', 'hive_rewrite_rule', 10, 0);

?>
