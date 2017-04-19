var withGrade = [];
var sortedByDate = [];

$("button").on("click", function() {
  var userInput = $("input").val();
  var userBoro = $("#boro").val();

  $.getJSON("https://data.cityofnewyork.us/resource/43nn-pn8j.json?$q=" + userInput + "&boro=" + userBoro, function(data) {
      var dataIndex = 0;

      var gradeAvailable = ["grade"] in data[dataIndex];

      var gradedRestaurant = {
          grade: data[dataIndex]["grade"],
          violation: data[dataIndex]["violation_description"],
        }
          
      while (dataIndex < data.length) {

        _.filter(data, gradeAvailable = true);

        withGrade.push(data);
 

        dataIndex = dataIndex + 1;
      }
  });
});

// d = "2016-05-31T00:00:00"
// "2016-05-31T00:00:00"
// new Date(d)
// Mon May 30 2016 20:00:00 GMT-0400 (Eastern Daylight Time)