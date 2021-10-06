$(document).ready(function () {
  $(".header__btn").click(function () {
    $(".header__menu").slideToggle(300);
  });

  $(window).scroll(function () {
    const sc = $(window).scrollTop();
    if (sc > 10) {
      $(".header__bottom").addClass("sticky");
    } else {
      $(".header__bottom").removeClass("sticky");
    }
  });

  $(window).scroll(function () {
    if ($(this).scrollTop() > 250) {
      $(".btn-scroll").fadeIn();
    } else {
      $(".btn-scroll").fadeOut();
    }
  });
  $(".btn-scroll").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
  });
});
