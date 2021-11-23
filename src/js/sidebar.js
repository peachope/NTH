//sidebar
$(document).ready(function () {
  $(".btn-bai2").click(function () {
    $(".bai2-show").toggleClass("show");
    $(".first").toggleClass("rotate");
    console.log("hhahahahah");
  });
});
$(document).ready(function () {
  $(".btn-bai3").click(function () {
    $(".bai3-show").toggleClass("show");
    $(".second").toggleClass("rotate");
  });
});
$(document).ready(function () {
  $("nav ul li").click(function () {
    $(this).addClass("active").siblings().removeClass("active");
  });
});
$(document).ready(function () {
  $(".btn").click(function () {
    $(this).toggleClass("click");
    $(".sidebar").toggleClass("show");
  });
});
