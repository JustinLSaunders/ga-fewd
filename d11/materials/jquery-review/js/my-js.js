var min = Math.ceil(0);
var max = Math.floor(255);

$("#box-1").on("click", function() {
    var randomRed = Math.floor(Math.random() * (max - min + 1)) + min;
    var randomGreen = Math.floor(Math.random() * (max - min + 1)) + min;
    var randomBlue = Math.floor(Math.random() * (max - min + 1)) + min;
    $("#red").val(randomRed);
    $("#green").val(randomGreen);
    $("#blue").val(randomBlue);
    $("#colorful-text").text("rgb(" + randomRed + "," + randomGreen + "," + randomBlue + ")")
    var rgb = "rgb(" + randomRed + "," + randomGreen + "," + randomBlue + ")";
    $("#box-1").css("height", "500px");
    $("#box-1").css("width", "500px");
    $("#box-1").css("background", rgb);
    $("#text-1").css("display", "block");
  });
$("#box-2").on("click", function() {
    var randomRed = Math.floor(Math.random() * (max - min + 1)) + min;
    var randomGreen = Math.floor(Math.random() * (max - min + 1)) + min;
    var randomBlue = Math.floor(Math.random() * (max - min + 1)) + min;
    $("#red").val(randomRed);
    $("#green").val(randomGreen);
    $("#blue").val(randomBlue);
    $("#colorful-text").text("rgb(" + randomRed + "," + randomGreen + "," + randomBlue + ")")
    var rgb = "rgb(" + randomRed + "," + randomGreen + "," + randomBlue + ")";
    $("#box-2").css("height", "500px");
    $("#box-2").css("width", "500px");
    $("#box-2").css("background", rgb);
    $("#text-2").css("display", "block");
  });
$("#box-3").on("click", function() {
    var randomRed = Math.floor(Math.random() * (max - min + 1)) + min;
    var randomGreen = Math.floor(Math.random() * (max - min + 1)) + min;
    var randomBlue = Math.floor(Math.random() * (max - min + 1)) + min;
    $("#red").val(randomRed);
    $("#green").val(randomGreen);
    $("#blue").val(randomBlue);
    $("#colorful-text").text("rgb(" + randomRed + "," + randomGreen + "," + randomBlue + ")")
    var rgb = "rgb(" + randomRed + "," + randomGreen + "," + randomBlue + ")";
    $("#box-3").css("height", "500px");
    $("#box-3").css("width", "500px");
    $("#box-3").css("background", rgb);
    $("#text-3").css("display", "block");
  });
$("#box-4").on("click", function() {
    var randomRed = Math.floor(Math.random() * (max - min + 1)) + min;
    var randomGreen = Math.floor(Math.random() * (max - min + 1)) + min;
    var randomBlue = Math.floor(Math.random() * (max - min + 1)) + min;
    $("#red").val(randomRed);
    $("#green").val(randomGreen);
    $("#blue").val(randomBlue);
    $("#colorful-text").text("rgb(" + randomRed + "," + randomGreen + "," + randomBlue + ")")
    var rgb = "rgb(" + randomRed + "," + randomGreen + "," + randomBlue + ")";
    $("#box-4").css("height", "500px");
    $("#box-4").css("width", "500px");
    $("#box-4").css("background", rgb);
    $("#text-4").css("display", "block");
  });