$(document).ready(function() {

  $("#frontEnd").click(function() {
     $("#frontDev").toggleClass();
     $("#backDev").hide();
  });

  $("#backEnd").click(function() {
    $("#backDev").toggleClass();
    $("#frontDev").hide();
  });

  // $("#frontDev").click(function() {
  //   $("#html").toggleClass();
  //   $("#css").hide();
  //   $("#javascript").hide();
  // });
  //
  // $("#backDev").click(function() {
  //   $("#ruby").toggleClass();
  //   $("#sql").hide();
  //   $("#python").hide();
  // });

  $("#html").click(function() {
    $("#htmlList").toggleClass();
    $("#cssList").hide();
    $("#javascriptList").hide();
  });

  $("#css").click(function() {
    $("#cssList").toggleClass();
    $("#htmlList").hide();
    $("#javascriptList").hide();
  });

  $("#javascript").click(function() {
    $("#javascriptList").toggleClass();
    $("#cssList").hide();
    $("#htmlList").hide();
  });
});
