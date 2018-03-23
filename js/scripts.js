$(document).ready(function() {

  var name=prompt("Hey! Welcome to Ericodus! Whats your name?", "Name");
  $("#welcome").html("Hi There" + " " + name + "! " + "Welcome to Ericodus...");

  $("#frontEnd").click(function() {
     $("#frontDev").toggleClass();
     $("#backDev").hide();
     $("#middleDev").hide();
  });

  $("#backEnd").click(function() {
    $("#backDev").toggleClass();
    $("#frontDev").hide();
    $("#middleDev").hide();
  });

  $("#middleEnd").click(function() {
    $("#middleDev").toggleClass();
    $("#frontDev").hide();
    $("#backDev").hide();
  });

  $("#html").click(function() {
    $("#htmlList").toggleClass();
    $("#cssList").hide();
    $("#reactList").hide();
  });

  $("#css").click(function() {
    $("#cssList").toggleClass();
    $("#htmlList").hide();
    $("#reactList").hide();
  });

  $("#react").click(function() {
    $("#reactList").toggleClass();
    $("#htmlList").hide();
    $("#cssList").hide();
  });

  $("#java").click(function() {
    $("#javaList").toggleClass();
    $("#androidList").hide();
  });

  $("#android").click(function() {
    $("#androidList").toggleClass();
    $("#javaList").hide();
  });

  $("#ruby").click(function() {
    $("#rubyList").toggleClass();
    $("#railsList").hide();
  });

  $("#rails").click(function() {
    $("#railsList").toggleClass();
    $("#rubyList").hide();
  });
});
