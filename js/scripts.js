$(function() {
  $(".weekend").click(function() {
    $(".lesson-body").fadeToggle();
  })
  $(".nightButton").click(function() {
    $('body').toggleClass("white-bg");
    $('.lesson-list').toggleClass("white-bg");
    $('.lesson-header').toggleClass("white-bg");
    $('.weekend').toggleClass("white-bg");
    $('.tracks').toggleClass("white-bg");
    $('ion-icon').toggleClass("white-bg");
    $('.header').toggleClass("white-bg");
    $('.nightButton').toggleFade();
    $('.dayButton').toggleFade();
});
$(".dayButton").click(function() {
  $('body').toggleClass("dark-bg");
  $('.lesson-list').toggleClass("dark-bg");
  $('.lesson-header').toggleClass("dark-bg");
  $('.weekend').toggleClass("dark-bg");
  $('.tracks').toggleClass("dark-bg");
  $('ion-icon').toggleClass("dark-bg");
  $('.header').toggleClass("dark-bg");
  $('.dayButton').toggleFade();
  $('.nightButton').toggleFade();
});



})
