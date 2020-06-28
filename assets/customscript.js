jQuery(function($){
  
    $("#ProdInfo").click(function() {
    $('html, body').animate({
        scrollTop: $("#block-page-faq-template-0").offset().top -10
    }, 400);
  });

    $("#Checkout").click(function() {
    $('html, body').animate({
        scrollTop: $("#block-page-faq-template-1").offset().top -10
    }, 400);
  });
  
     $("#Shipping").click(function() {
    $('html, body').animate({
        scrollTop: $("#block-page-faq-template-2").offset().top -10
    }, 400);
  });
  
  
     $("#Returns").click(function() {
    $('html, body').animate({
        scrollTop: $("#block-page-faq-template-3").offset().top -10
    }, 400);
  });
  
  $("#Other").click(function() {
    $('html, body').animate({
        scrollTop: $("#block-page-faq-template-4").offset().top -10
    }, 400);
  });
  
  
  $(".set > div").on("click", function() {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $(this)
        .siblings(".content")
        .slideUp(200);
      $(".set > div i")
        .removeClass("fa-minus")
        .addClass("fa-plus");
    } else {
      $(".set > div i")
        .removeClass("fa-minus")
        .addClass("fa-plus");
      $(this)
        .find("i")
        .removeClass("fa-plus")
        .addClass("fa-minus");
      $(".set > div").removeClass("active");
      $(this).addClass("active");
      $(".content").slideUp(200);
      $(this)
        .siblings(".content")
        .slideDown(200);
    }
  });

 
  
  $(".FaqSummary li").click(function () {
    $(".FaqSummary li").removeClass("is-active");
    $(this).addClass("is-active");   
});
  
  
  
$('#sidebar').stickyMojo({footerID: '#shopify-section-footer', contentID: '#main'});
  
  	$(document).on("scroll", function(){
		if
      ($(document).scrollTop() > 100){
		  $(".site-header").addClass("shrink");
          $(".announcement-bar").addClass("shrink");
		}
		else
		{
			$(".site-header").removeClass("shrink");
          $(".announcement-bar").removeClass("shrink");
		}
	});


  
  
  });