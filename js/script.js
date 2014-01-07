// <![CDATA[
$(function() {

  // Slider
  $('#coin-slider').coinslider({width:960,height:260,opacity:1});

  // Radius Box
 // $('.fbg_resize, .content .mainbar .article').css({"border-radius":"28px", "-moz-border-radius":"28px", "-webkit-border-radius":"28px"});
  //$('.content p.pages span, .content p.pages a').css({"border-radius":"16px", "-moz-border-radius":"16px", "-webkit-border-radius":"16px"});
  $('.menu_nav ul li a').css({"border-bottom-left-radius":"28px", "border-bottom-right-radius":"28px", "-moz-border-radius-bottomleft":"28px", "-moz-border-radius-bottomright":"28px", "-webkit-border-bottom-left-radius":"28px", "-webkit-border-bottom-right-radius":"28px"});

});	

// Cufon
Cufon.replace('h1, h2, h3, h4, h5, h6, .menu_nav ul li a', { hover: true });

// ]]>