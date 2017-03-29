$("a.button-file").on("click", function() {
  $("div.file-options").show();
})

$("a.button-file").on("focusout", function() {
  $("div.file-options").hide();
})

$("a.button-edit").on("click", function() {
  $("div.edit-options").show();
})

$("a.button-edit").on("focusout", function() {
  $("div.edit-options").hide();
})