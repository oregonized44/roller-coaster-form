

//initializing our query click function
$(document).ready(function(){
  $(".btn").click(function(){

//setting our variables
  var feet = parseInt($("#feet").val());
  var inches = parseInt($("#inches").val());
  var totalHeight = (feet * 12) + inches;
  console.log(totalHeight);

  if (totalHeight > 36 && totalHeight < 60) {
    $(".results").hide();
    $("#middle").show();
  } else if (totalHeight > 48) {
    $(".results").hide();
    $("#adult").show();
  } else {
    $(".results").hide();
    $("#kiddie").show();
  }
  });
});
