## OMDB Super Bonus

Save searches in localStorage

HINT:

Use localStorage.setItem() & localStorage.getItem().
Two possibilities

1. Store the `$("ul").html()`
2. Store all the movie titles in an array
```javascript
var searchHistory = [];
searchHistory.push("Aladdin");
searchHistory.push("The Little Mermaid");
searchHistory.push("The Lion King");

var arrayAsString = JSON.stringify(searchHistory);
localStorage.setItem("titles", arrayAsString);

// Later

var arrayAsString = localStorage.getItem("titles");
var searchHistory = JSON.parse(arrayAsString);
searchHistory.forEach(function(title) {
  // use this to "loop" through the titles
})
```