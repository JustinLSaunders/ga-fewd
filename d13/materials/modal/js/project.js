

$(".show-authenticate").on("click", function(){
    console.log("hi");
    $(".authenticate").show();
});

$("authenticate").on("focusout", function() {
  $(".authenticate").hide();
})