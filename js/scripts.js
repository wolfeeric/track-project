$(document).ready(function() {

  $("#frontEnd").click(function() {
     $("#choice2").toggleClass();
     $("#choice3").hide();
  });

  $("#backEnd").click(function() {
    $("#choice3").toggleClass();
    $("#choice2").hide();
  });

  $("#html").click(function() {
    $("#choice4").toggleClass();
    $("#choice5").hide();
  });

  $("#css").click(function() {
    $("#choice5").toggleClass();
    $("#choice4").hide();
  });

  $("#Javascript").click(function() {
    $("#choice5").toggleClass();
    $("#choice4").hide();
  });
});
