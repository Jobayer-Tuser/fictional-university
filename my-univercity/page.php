<?php get_header();?>
<div class="page-banner">
    <div class="page-banner__bg-image" style="background-image: url(<?php echo get_theme_file_uri('images/ocean.jpg')?>);"></div>
    <div class="page-banner__content container container--narrow">
      <h1 class="page-banner__title"><?php the_title(); ?></h1>
      <div class="page-banner__intro">
        <p>Dont forget to replace me letter</p>
      </div>
    </div>  
  </div>

  <div class="container container--narrow page-section">
  <?php
		#we have asign a the PARENT PAGE ID in the variable
		$theParent = wp_get_post_parent_id(get_the_ID());
		
      $theParent = wp_get_post_parent_id(get_the_ID());
	  #if the $theParent = 0,false it will return nothing OR if the $theParent = 1, true it will show the metabox
	  
      if ($theParent) { ?>
        <div class="metabox metabox--position-up metabox--with-home-link">
      <p><a class="metabox__blog-home-link" href="<?php echo get_permalink($theParent); ?>"><i class="fa fa-home" aria-hidden="true"></i> Back to <?php echo get_the_title($theParent); ?></a> <span class="metabox__main"><?php the_title(); ?></span></p>
    </div>
      <?php }
    ?>
	
    <?php
	#lets see some associative array
	/*
		$animalSounds = array(
			'cat' => 'meow',
			'dog' => 'bark',
			'pig' => 'oink'
		);
	*/
	?>
	
	
	<?php 
		#get_pages() function will return the parent page ID inside
		$pageArray = get_pages(array(
			'child_of' => get_the_ID()
		));
		
		#if $theParent or $pageArray = 0 then it will not show the page link section if $theParent or $pageArray = 1 then it will show the page link section 
		if($theParent or $pageArray){ ?>
    
			<div class="page-links">
			  <h2 class="page-links__title"><a href="<?php echo get_permalink($theParent); ?>"><?php echo get_the_title($theParent); ?></a></h2>
			  <ul class="min-list"> 
			   <!-- <li class="current_page_item"><a href="#">Our History</a></li>
				<li><a href="#">Our Goals</a></li>-->
				<?php
					# if we get $theParent= 0 then it means its  the parent page if we get $theParent= 1 it is child page
					if($theParent){
						$findChildrenOf = $theParent;
					}
					else{
						$findChildrenOf = get_the_ID();
					}
				
					wp_list_pages(array(
						'title_li' => null,
						'child_of' => $findChildrenOf,
						'sort_column' => 'menu_order' 
					));
				?>
			  </ul>
			</div>
			
		<?php } ?>
	
	

    <div class="generic-content">
		<?php the_content(); ?>
	</div>

  </div>

<?php get_footer(); ?>