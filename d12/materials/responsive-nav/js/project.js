var hamburgerClick = 0

$(".hamburger-icon").on("click", function() {
  if (hamburgerClick !== 1) {
    console.log ("hi");
    $("nav").show();
    hamburgerClick = hamburgerClick + 1;
  } else if (hamburgerClick === 1) {
    console.log ("bye");
    $("nav").hide();
    hamburgerClick = 0;
  }
})