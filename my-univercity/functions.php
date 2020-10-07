<?php 
#these function are use for loading css, javascripts, fontawsome
function university_files(){
	wp_enqueue_style('font-awsome', '//maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');
	wp_enqueue_style('font-name', '//fonts.googleapis.com/css?family=Roboto+Condensed:300,300i,400,400i,700,700i|Roboto:100,300,400,400i,700,700i');
	wp_enqueue_script('main-javascripts', get_theme_file_uri('js/scripts-bundled.js'), null, /*'1.0'*/ microtime(), true);
	wp_enqueue_style('main_style', get_stylesheet_uri(), null, microtime());
	
}

add_action('wp_enqueue_scripts', 'university_files');


function university_features(){
	
	#to register dynamic menu from admin panel we use this function
	register_nav_menu('headerMenulocation', 'Header Menu Location');
	register_nav_menu('footerLocationOne', 'Footer Location One');
	#register_nav_menu('footerLocationTwo', 'Footer Location Two');
	
	#these functions refers to show the title of the page on the browser tab bar or can it work as title tag
	add_theme_support('title-tag');
}

add_action('after_setup_theme', 'university_features');

function university_adjust_queries($query){
	if( !is_admin() AND is_post_type_archive('program') AND $query->is_main_query()){
		$query->set('orderby', 'title');
		$query->set('order', 'ASC');
		$query->set('post_per_page', -1);
	}
	
	
	/*if( !is_admin() AND is_post_type_archive('event') AND $query->is_main_query()){
		$today = date('Ymd');
		$query->set('meta_key', 'event_date');
		$query->set('orderby', 'meta_value_num');
		$query->set('order', 'ASC');
		$query->set('meta_query', array(
			array(
				'key' => 'event_date',
				'compare' => '>=',
				'value' => $today,
				'type' => 'numeric'
			)
		))
	}*/
}

add_action('pre_get_posts', 'university_adjust_queries');

?>