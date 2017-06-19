$("button").on("click", function() {

  var location = $("input").val();

  $("div.weather-container").show();

  $.getJSON("http://api.openweathermap.org/data/2.5/weather?q=" + location + "&units=imperial&appid=4ee6f5f9dfe5a435e1499e0ac205c6a8", function(data) {

      var icon = (data["weather"][0]["icon"]);

      console.log(data);

      $("span#location").text(data["name"] + ", " + data["sys"]["country"]);
      
      $("span.description-copy").text(data["weather"][0]["description"]);

      $("span.temperature").text(data["main"]["temp"]);

      $("img.icon").attr("src", "http://openweathermap.org/img/w/" + icon + ".png");
    });

  $.getJSON("http://api.openweathermap.org/data/2.5/forecast?q=" + location + "&units=imperial&appid=4ee6f5f9dfe5a435e1499e0ac205c6a8", function(data) {

      console.log(data);

      var interval = 0;
            
      while (interval <= 7) {
        var forecastIcon = (data["list"][interval]["weather"][0]["icon"]);

        $("span#temp-int" + interval).text(data["list"][interval]["main"]["temp"]);

        $("img#icon-int" + interval).attr("src", "http://openweathermap.org/img/w/" + forecastIcon + ".png");

        $("span.description-copy" + interval).text(data["list"][interval]["weather"][0]["description"]);

        $("span.humidity-copy" + interval).text("Humidity: " + data["list"][interval]["main"]["humidity"] + "%");

        interval = interval + 1;
      }
    });
});