/*----------------------------------------------------*/
/*	Scroll Navbar
 /*----------------------------------------------------*/
$(window).scroll(function(){

  var b = $(window).scrollTop();

  if( b > 70 ){
    $(".navbar.fixed-top").addClass("scroll-fixed-navbar");
  } else {
    $(".navbar.fixed-top").removeClass("scroll-fixed-navbar");

  }
});

/* slow anhor */
$(document).ready(function(){
  $(".goTo").on("click", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1500);
  });
});




var lastId,
  topMenu = $("#left-menu"),
  topMenuHeight = topMenu.outerHeight()-250,
  // All list items
  menuItems = topMenu.find("a"),
  // Anchors corresponding to menu items
  scrollItems = menuItems.map(function(){
    var item = $($(this).attr("href"));
    if (item.length) { return item; }
  });

// Bind click handler to menu items
// so we can get a fancy scroll animation
menuItems.click(function(e){
  var href = $(this).attr("href"),
    offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
  $('html, body').stop().animate({
    scrollTop: offsetTop
  }, 300);
  e.preventDefault();
});

// Bind to scroll
$(window).scroll(function(){
  // Get container scroll position
  var fromTop = $(this).scrollTop()+topMenuHeight;

  // Get id of current scroll item
  var cur = scrollItems.map(function(){
    if ($(this).offset().top < fromTop)
      return this;
  });
  // Get the id of the current element
  cur = cur[cur.length-1];
  var id = cur && cur.length ? cur[0].id : "";

  if (lastId !== id) {
    lastId = id;
    // Set/remove active class
    menuItems
      .parent().removeClass("active")
      .end().filter("[href='#"+id+"']").parent().addClass("active");
  }
});






$('.navbar-nav li a').click(function() {
  $('#navigation-menu').css("height", "1px").removeClass("in").addClass("collapse");
  $('#navigation-menu').removeClass("open");
});


$(document).ready(function(){
  $('#nav-icon3').click(function(){
    $(this).toggleClass('open');
  });
});