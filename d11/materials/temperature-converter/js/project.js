$("button").on("click", function() {
  var dropDown = document.getElementById("tempUnit")[tempUnit.selectedIndex].value;
  if (dropDown == "fahrenheit") {
    var tempF = $("#userInput").val();
    var parseTempF = parseInt(tempF);
    var tempC = (parseTempF - 32) / 1.8;
    $("span#converted-temp").text(tempC);
    $("span#converted-temp").css("border", "none");
    $("span#converted-unit").text(" Celsius");
  } else if (dropDown == "celsius") {
    var tempC = $("#userInput").val();
    var parseTempC = parseInt(tempC);
    var tempF = (parseTempC * 1.8) + 32;
    $("span#converted-temp").text(tempF);
    $("span#converted-temp").css("border", "none");
    $("span#converted-unit").text(" Fahrenheit");
  }
});