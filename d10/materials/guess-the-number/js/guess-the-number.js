var rightCount = 0
var wrongCount = 0
var clickCount = 0

$("button").on("click", function() {
    var randomNumber = Math.floor(Math.random() * 10 + 1);
    console.log("Random Number: " + randomNumber)
    var userInput = $("input").val();
    if (randomNumber == userInput) {
      rightCount = rightCount + 1;
      clickCount = clickCount + 1;
      $("#right-count").text(rightCount);
      $("#click-count").text(clickCount);
      $("#right-response").css("display", "block");
      $("#wrong-response").css("display", "none");
      // alert("You're right! Get out of my head!");
    } else if (randomNumber != userInput) {
      wrongCount = wrongCount + 1;
      clickCount = clickCount + 1;
      $("#wrong-count").text(wrongCount);
      $("#right-number").text(randomNumber);
      $("#right-response").css("display", "none");
      $("#wrong-response").css("display", "block");
      // alert("Close, but no cigar. I was thinking of " + randomNumber + ". Try again.");
    }
    console.log("Click Count: " + clickCount);
  });