jQuery(function($){

$( ".policy-list" ).addClass( "myClass yourClass" );

  
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

 
    $('.featured_slider ').slick({
  infinite: true,
  slidesToShow: 3,
      slidesToScroll: 1,
    dots:false,
    arrows:true,
    autoplay: true,
      prevArrow: '<i class="fas fa-chevron-left"></i>',
  nextArrow: '<i class="fas fa-chevron-right"></i>',
  autoplaySpeed: 4000,
        responsive: [
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});


  $('.testimonial').slick({
  infinite: true,
  slidesToShow: 1,
    dots:true,
    prevArrow: '<i class="fas fa-chevron-left"></i>',
  nextArrow: '<i class="fas fa-chevron-right"></i>',
    arrows:true,
    autoplay: true,
  autoplaySpeed: 4000
});
  
  

  $('.dog_slider').slick({
  infinite: true,
  slidesToShow: 1,
    dots:false,
    arrows:true,
    prevArrow: '<i class="fas fa-chevron-left"></i>',
  nextArrow: '<i class="fas fa-chevron-right"></i>',
    autoplay: true,
  autoplaySpeed: 4000
});
  
  
  });