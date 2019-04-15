
/* Scroll Navbar */

$(window).scroll(function(){

  var b = $(window).scrollTop();

  if( b > 70 ){
    $(".navbar.fixed-top").addClass("scroll-fixed-navbar");
  } else {
    $(".navbar.fixed-top").removeClass("scroll-fixed-navbar");

  }
});

$(document).ready(function(){
  /* toggle button */
  $('#nav-icon3').click(function(){
    $(this).toggleClass('open');
  });

  $('.navbar-nav li').click(function(){
    $('#nav-icon3').removeClass('open');
  });
  /* end */

  /* navbar collaps after click (mobile) */
  $(".navbar-collapse").on("click", "a", null, function () {
    $(".navbar-collapse").collapse('hide');
  });
  /* end */

  /* slow anhor */
  $(".goTo").on("click", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1000);
  });
  /* end */

  /* Popover */
  $('[data-toggle="popover"]').popover({
    trigger: 'click'
  });

  $('.brick__item').click(function(){
    $(this).toggleClass('brick__index');
    $('.modal-backdrop').toggleClass('c-hidden');
  });

  $('.modal-backdrop').click(function(){
    $('.brick__item').removeClass('brick__index');
    $(this).addClass('c-hidden');
    $('[data-toggle="popover"]').popover('hide')
  });
  /* end*/
});




/* left menu */
var lastId,
  topMenu = $("#left-menu"),
  topMenuHeight = topMenu.outerHeight()-150,
  menuItems = topMenu.find("a"),
  scrollItems = menuItems.map(function(){
    var item = $($(this).attr("href"));
    if (item.length) { return item; }
  });

menuItems.click(function(e){
  var href = $(this).attr("href"),
    offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
  $('html, body').stop().animate({
    scrollTop: offsetTop
  }, 1000);
  e.preventDefault();
});

$(window).scroll(function(){
  var fromTop = $(this).scrollTop()+topMenuHeight;

  var cur = scrollItems.map(function(){
    if ($(this).offset().top < fromTop)
      return this;
  });
  cur = cur[cur.length-1];
  var id = cur && cur.length ? cur[0].id : "";

  if (lastId !== id) {
    lastId = id;
    menuItems
      .parent().removeClass("active")
      .end().filter("[href='#"+id+"']").parent().addClass("active");
  }
});



