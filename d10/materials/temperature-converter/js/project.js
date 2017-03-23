$("button").on("click", function() {
    var temperatureC = $("input#temperature").val();
    var temperatureF = temperatureC * 1.8 + 32;
    $("span#converted").text(temperatureF);
  });