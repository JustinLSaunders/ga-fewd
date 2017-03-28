// 1. Create .click() handlers for each of the thumbnails: #first, #second, #third, #fourth
// 2. Use .attr() to change the `src` attribute of #bigimage to correspond to image that was clicked
$("#first").on("click", function() {
  console.log("1");
  $("#full").attr("src", "img/1.jpg");
});

$("#second").on("click", function() {
  console.log("2");
  $("#full").attr("src", "img/2.jpg");
});

$("#third").on("click", function() {
  console.log("3");
  $("#full").attr("src", "img/3.jpg");
});

$("#fourth").on("click", function() {
  console.log("4");
  $("#full").attr("src", "img/4.jpg");
});