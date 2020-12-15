function addDemo(){
	var dazzDemo = ' <div class="demo-switcher"> <div class="icon-demo"> <span> more templates</span> </div><div class="box-layout"> <h3>see other demos <a target="_blank" href="http://digitaltemplatemarket.com/items/category/html-website-templates/">view all</a> </h3> <ul class="demo-box"> <li> <a target="_blank" href="http://digitaltemplatemarket.com/items/zesto-multipurpose-corporate-html-template/"> <img src="img/demo-img/demo1.png" alt="demo"> <div class="demo-name"> <p> nobis</p></div></a> </li><li> <a target="_blank" href="http://digitaltemplatemarket.com/items/zesto-multipurpose-corporate-html-template/"> <img src="img/demo-img/demo2.png" alt="demo"> <div class="demo-name"> <p> zesto</p></div></a> </li><li> <a target="_blank" href="http://digitaltemplatemarket.com/items/venum-one-page-business-corporate-html5-template/"> <img src="img/demo-img/demo3.png" alt="demo"> <div class="demo-name"> <p> venum</p></div></a> </li><li> <a target="_blank" href="http://digitaltemplatemarket.com/items/mobilio-app-landing-html5-template/"> <img src="img/demo-img/demo4.png" alt="demo"> <div class="demo-name"> <p>mobilio</p></div></a> </li><li> <a target="_blank" href="http://digitaltemplatemarket.com/items/tastybite-food-restaurant-bootstrap-html5-template/"> <img src="img/demo-img/demo5.png" alt="demo"> <div class="demo-name"> <p>tastybite</p></div></a> </li><li> <a target="_blank" href="http://digitaltemplatemarket.com/items/consulton-one-page-business-consulting-corporate-html-template/"> <img src="img/demo-img/demo7.png" alt="demo"> <div class="demo-name"> <p>consultOn</p></div></a> </li><li> <a target="_blank" href="http://digitaltemplatemarket.com/items/bizstart-business-corporate-html-template/"> <img src="img/demo-img/demo8.png" alt="demo"> <div class="demo-name"> <p>Bizstart</p></div></a> </li><li> <a target="_blank" href="http://digitaltemplatemarket.com/items/bigdream-onepage-multipurpose-html-template/"> <img src="img/demo-img/demo9.png" alt="demo"> <div class="demo-name"> <p>bigdream</p></div></a> </li></ul> </div></div>';
		
	if($(".demo-switcher").length == 0) {
		jQuery('#bg').append(dazzDemo);
	}
}

(function ($) {
    'use strict';
    addDemo()
    // Layout cog
    $('.icon-demo').on('click', function () {
        if ($(this).css("margin-right") === "500px") {
            $('.box-layout').animate({
                "margin-right": '-=500'
            });
            $('.icon-demo').animate({
                "margin-right": '-=500'
            });
        } else {
            $('.box-layout').animate({
                "margin-right": '+=500'
            });
            $('.icon-demo').animate({
                "margin-right": '+=500'
            });
        }
    });
})(jQuery);