/*-----------------------------------------------------------------------------/
/ Custom Theme JS
/-----------------------------------------------------------------------------*/

jQuery(document).ready(function(){
  if($('.acc-container .acc-head').length > 0){
    $(".acc-head").click(function(){
      // if( $(document).width() > 980 ) return;
      $(this).next().slideToggle().parent().siblings().find(".acc-content").slideUp();
      $(this).toggleClass("active").parent().siblings().find(".acc-head").removeClass("active");
    });
  }
})