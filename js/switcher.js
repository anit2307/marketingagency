function addSwitcher()
{
	var dzSwitcher = '<div id="dzSwitcher" class="styleswitcher"><div class="switcher-btn-bx"><a class="switch-btn closed"> <span class="fa fa-cogs fa-lg"></span> </a> </div><div class="styleswitcher-inner"><h6 class="switcher-title">Color Skin</h6><ul class="color-skins"><li><a class="theme-skin skin-1" href="?theme=css/skin/skin-1" title="default Theme"></a></li><li><a class="theme-skin skin-2" href="?theme=css/skin/skin-2" title="pink Theme"></a></li><li><a class="theme-skin skin-3" href="?theme=css/skin/skin-3" title="sky Theme"></a></li><li><a class="theme-skin skin-4" href="?theme=css/skin/skin-4" title="green Theme"></a></li><li><a class="theme-skin skin-5" href="?theme=css/skin/skin-5" title="red Theme"></a></li><li><a class="theme-skin skin-6" href="?theme=css/skin/skin-6" title="orange Theme"></a></li><li><a class="theme-skin skin-7" href="?theme=css/skin/skin-7" title="purple Theme"></a></li><li><a class="theme-skin skin-8" href="?theme=css/skin/skin-8" title="blue Theme"></a></li></ul></div></div>';
	
	if($("#dzSwitcher").length == 0) {
		jQuery('body').append(dzSwitcher);
	}
}

jQuery(window).on('load',function(){
	
	//=== Switcher panal slide function	=====================//
	jQuery('.styleswitcher').animate({
		'left': '-220px'
	});
	jQuery('.styleswitcher-right').animate({
		'right': '-220px',
		'left': 'auto'
	});
	jQuery('.switch-btn').addClass('closed');
	//=== Switcher panal slide function END	=====================//
	
});

$(function(){		
	"use strict";
	
	addSwitcher();
	//=== Switcher panal slide function	=====================//
	jQuery('.switch-btn').on('click',function () {	
		if (jQuery(this).hasClass('open')) {
			jQuery(this).addClass('closed');
			jQuery(this).removeClass('open');
			jQuery('.styleswitcher').animate({
				'left': '-220px'
			});
			jQuery('.styleswitcher-right').animate({
				'right': '-220px',
				'left': 'auto'
			});
		} else {
			if (jQuery(this).hasClass('closed')) {
			jQuery(this).addClass('open');
			jQuery(this).removeClass('closed');
			jQuery('.styleswitcher').animate({
				'left': '0'
			});
			jQuery('.styleswitcher-right').animate({
				'right': '0',
				'left': 'auto'
			});
			}
		}	
	});
	//=== Switcher panal slide function END	=====================//

	//=== Color css change function	=====================//
    // Color changer
    jQuery(".skin-1").on('click',function(){
        jQuery(".skin").attr("href", "css/skin/skin-1.css");
		jQuery(".logo img").attr("src", "img/home/logo.png");
		jQuery(".foot-logo").attr("src", "img/home/logo-white.png");
		jQuery(".logo.logo-white img").attr("src", "img/home/logo-white.png");
        return false;
    });
    
    jQuery(".skin-2").on('click',function(){
        jQuery(".skin").attr("href", "css/skin/skin-2.css");
		jQuery(".logo img").attr("src", "img/home/logo-2.png");
		jQuery(".foot-logo").attr("src", "img/home/logo-white-2.png");
		jQuery(".logo.logo-white img").attr("src", "img/home/logo-white-2.png");
        return false;
    });
    
    jQuery(".skin-3").on('click',function(){
        jQuery(".skin").attr("href", "css/skin/skin-3.css");
		jQuery(".logo img").attr("src", "img/home/logo-3.png");
		jQuery(".foot-logo").attr("src", "img/home/logo-white-3.png");
		jQuery(".logo.logo-white img").attr("src", "img/home/logo-white-3.png");
        return false;
    });
	
    jQuery(".skin-4").on('click',function(){
        jQuery(".skin").attr("href", "css/skin/skin-4.css");
		jQuery(".logo img").attr("src", "img/home/logo-4.png");
		jQuery(".foot-logo").attr("src", "img/home/logo-white-4.png");
		jQuery(".logo.logo-white img").attr("src", "img/home/logo-white-4.png");
        return false;
    });
	
    jQuery(".skin-5").on('click',function(){
        jQuery(".skin").attr("href", "css/skin/skin-5.css");
		jQuery(".logo img").attr("src", "img/home/logo-5.png");
		jQuery(".foot-logo").attr("src", "img/home/logo-white-5.png");
		jQuery(".logo.logo-white img").attr("src", "img/home/logo-white-5.png");
        return false;
    });	
	
    jQuery(".skin-6").on('click',function(){
        jQuery(".skin").attr("href", "css/skin/skin-6.css");
		jQuery(".logo img").attr("src", "img/home/logo-6.png");
		jQuery(".foot-logo").attr("src", "img/home/logo-white-6.png");
		jQuery(".logo.logo-white img").attr("src", "img/home/logo-white-6.png");
        return false;
    });		
		
    jQuery(".skin-7").on('click',function(){
        jQuery(".skin").attr("href", "css/skin/skin-7.css");
		jQuery(".logo img").attr("src", "img/home/logo-7.png");
		jQuery(".foot-logo").attr("src", "img/home/logo-white-7.png");
		jQuery(".logo.logo-white img").attr("src", "img/home/logo-white-7.png");
        return false;
    });
	
    jQuery(".skin-8").on('click',function(){
        jQuery(".skin").attr("href", "css/skin/skin-8.css");
		jQuery(".logo img").attr("src", "img/home/logo-8.png");
		jQuery(".foot-logo").attr("src", "img/home/logo-white-8.png");
		jQuery(".logo.logo-white img").attr("src", "img/home/logo-white-8.png");
        return false;
    });	
	//=== Color css change function	=====================//	
	
	//=== Background image change function	=====================//
	jQuery('.background-switcher li img').on('click',function(){
	 var imgbg = jQuery(this).attr('dir');
	 //console.<span id="IL_AD2" class="IL_AD">log</span>(imgbg);
	 jQuery('#bg').css({backgroundImage: "url("+imgbg+")"});
	 });
	//=== Background image change function	End=====================//
	
	
	//=== Background pattern change function	=====================//
	jQuery('.pattern-switcher li img').on('click',function(){
	 var imgbg = jQuery(this).attr('dir');
	 //console.<span id="IL_AD2" class="IL_AD">log</span>(imgbg);
	 jQuery('#bg').css({backgroundImage: "url("+imgbg+")"});
	 jQuery("#bg").css( "background-size", "auto")
	 
	 });
	//=== Background pattern change function End=====================//
	

	//=== Layout boxed & fullscreen change function	=====================//
	
		jQuery('.layout-view li ').on('click', function(){
			jQuery('.layout-view li ').removeClass('active');
			jQuery(this).addClass('active');	
		});
		
		jQuery('.wide-layout').on('click',function() { 
			jQuery("body").addClass('wide-layout')
			jQuery("body").removeClass('boxed')
		});
		jQuery('.boxed').on('click',function() { 
			jQuery("body").addClass('boxed')
			jQuery("body").removeClass('wide-layout')
		});

	//=== Layout boxed & fullscreen change function	END=====================//
	


	//=== Nav light & dark change function	END=====================//
	jQuery('.nav-view li ').on('click', function(){
		jQuery('.nav-view li ').removeClass('active');
		jQuery(this).addClass('active');	
	});
	
	jQuery('.nav-light').on('click',function() { 
		jQuery(".header-nav").addClass('nav-light')
		jQuery(".header-nav").removeClass('nav-dark')
	});
	
	jQuery('.nav-dark').on('click',function() { 
		jQuery(".header-nav").addClass('nav-dark')
		jQuery(".header-nav").removeClass('nav-light')
	});
	//=== Nav light & dark change function	END=====================//	
	
	jQuery('.header-view li ').on('click', function(){
		jQuery('.header-view li ').removeClass('active');
		jQuery(this).addClass('active');	
	});
	
	jQuery('.header-fixed').on('click',function() { 
		jQuery(".main-bar-wraper").addClass('sticky-header')
		jQuery(".main-bar-wraper").removeClass('sticky-no')
	});
	
	jQuery('.header-static').on('click',function() { 
		jQuery(".main-bar-wraper").addClass('sticky-no')
		jQuery(".main-bar-wraper").removeClass('sticky-header')
	});
});