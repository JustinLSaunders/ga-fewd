var rightCount = 0
var wrongCount = 0
var totalCount = 0
var min = Math.ceil(1);
var max = Math.floor(10);

$("button").on("click", function() {
    var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;    
    console.log(randomNumber);
    var userInput = $("input").val();
    
    if (((userInput >= 1) && (userInput <= 10)) == false) {
      alert("Try a number between 1 and 10.");
      // $("#starting-text").css("display", "none");
      // $("#wrong-response").css("display", "none");
      // $("#right-response").css("display", "none");
      // $("#close-response").css("display", "none");
      // $("#no-response").css("display", "block");
    } else if (randomNumber == userInput) {
      rightCount = rightCount + 1;
      $("#right-count").text(rightCount);
      $("#total-count").text(totalCount);
      $("#starting-text").css("display", "none");
      $("#wrong-response").css("display", "none");
      $("#no-response").css("display", "none");
      $("#close-response").css("display", "none");
      $("#right-response").css("display", "block");
      // alert("You're right! Get out of my head!");
    } else if ((userInput == (randomNumber + 1)) || (userInput == (randomNumber - 1)))  {
      wrongCount = wrongCount + 1;
      $("#wrong-count").text(wrongCount);
      $(".right-number").text(randomNumber);
      $("#starting-text").css("display", "none");
      $("#right-response").css("display", "none");
      $("#no-response").css("display", "none");
      $("#wrong-response").css("display", "none");
      $("#close-response").css("display", "block");
    } else if (randomNumber != userInput) {
      wrongCount = wrongCount + 1;
      $("#wrong-count").text(wrongCount);
      $(".right-number").text(randomNumber);
      $("#starting-text").css("display", "none");
      $("#right-response").css("display", "none");
      $("#no-response").css("display", "none");
      $("#close-response").css("display", "none");
      $("#wrong-response").css("display", "block");
    }
    totalCount = rightCount + wrongCount;
    $("#total-count").text(totalCount);
    // console.log("Guess Count: " + guessCount);
  });