$("button").on("click", function() {
  
  var historyList = [];

  var userInput = $("input").val();

  $.getJSON("http://omdbapi.com/?t=" + userInput, function(data) {

    var addLi = $("<li>" + data["Title"] + "</li>");
    var titleAndRating = data["Title"] + " (" + data["Rated"] + ")";

    $(".title").text(titleAndRating);
    $(".search-history").append(addLi);
    $(historyList).push(addLi);
    $(".year").text(data["Year"]);
    $(".poster").attr("src", data["Poster"]);
    $(".plot").text(data["Plot"]);
  });
});

$(".search-history").on("click", function(event) {

  var historyItem = $(event.target).text();

  $.getJSON("http://omdbapi.com/?t=" + historyItem, function(history) {

    var titleAndRating = history["Title"] + " (" + history["Rated"] + ")";

    $(".title").text(titleAndRating);
    $(".year").text(history["Year"]);
    $(".poster").attr("src", history["Poster"]);
    $(".plot").text(history["Plot"]);
  });
});




// function populateStorage() {
//   localStorage.setItem();
// }