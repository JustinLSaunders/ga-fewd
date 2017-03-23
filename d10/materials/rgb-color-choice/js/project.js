var originalColorfulText = "rgb(0,0,0)"

$("#color-button").on("click", function() {
    var red = $("#red").val();
    var green = $("#green").val();
    var blue = $("#blue").val();
    $("#colorful-text").text("rgb(" + red + "," + green + "," + blue + ")")
    var rgb = "rgb(" + red + "," + green + "," + blue + ")"
    $("#wrapper").css("background", rgb);
  });

$("#color-random").on("click", function() {
    var randomRed = Math.floor((Math.random() * 255) + 0);
    var randomGreen = Math.floor((Math.random() * 255) + 0);
    var randomBlue = Math.floor((Math.random() * 255) + 0);
    $("#red").val(randomRed);
    $("#green").val(randomGreen);
    $("#blue").val(randomBlue);
    $("#colorful-text").text("rgb(" + randomRed + "," + randomGreen + "," + randomBlue + ")")
    var rgb = "rgb(" + randomRed + "," + randomGreen + "," + randomBlue + ")"
    $("#wrapper").css("background", rgb);
  });