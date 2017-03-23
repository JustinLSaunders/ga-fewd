console.log("HELLOOOO!");

// var clickCount = 0;
// var originalText = "This is some cool text.";


// $("button").on("click", function() {
//   clickCount = clickCount +1;
//   console.log(clickCount);
//   $("h1").text(userInput);
//   if (clickCount === 2) {
//     $("p.cool").text("Clicked the second");
//   } else if (clickCount >= 2) {
//     $("p.cool").text(originalText);
//   }
// });

var h1OriginalText = "Hello World!"

$("button").on("click", function() {
  var userInput = $("input").val();
  console.log(userInput);
  if (userInput === "") {
    $("h1").text(h1OriginalText);
  } else if (userInput !== "") {
    $("h1").text(userInput);
  }
});