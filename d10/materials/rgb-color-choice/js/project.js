var originalColorfulText = "rgb(0,0,0)"
var min = Math.ceil(0);
var max = Math.floor(255);

$("#color-button").on("click", function() {
    var red = $("#red").val();
    var green = $("#green").val();
    var blue = $("#blue").val();
    $("#colorful-text").text("rgb(" + red + "," + green + "," + blue + ")")
    var rgb = "rgb(" + red + "," + green + "," + blue + ")"
    $("#wrapper").css("background", rgb);
  });

$("#color-random").on("click", function() {
    var randomRed = Math.floor(Math.random() * (max - min + 1)) + min;
    var randomGreen = Math.floor(Math.random() * (max - min + 1)) + min;
    var randomBlue = Math.floor(Math.random() * (max - min + 1)) + min;
    $("#red").val(randomRed);
    $("#green").val(randomGreen);
    $("#blue").val(randomBlue);
    $("#colorful-text").text("rgb(" + randomRed + "," + randomGreen + "," + randomBlue + ")")
    var rgb = "rgb(" + randomRed + "," + randomGreen + "," + randomBlue + ")"
    $("#wrapper").css("background", rgb);
  });