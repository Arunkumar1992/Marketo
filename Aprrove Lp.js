$(document).keyup(function (e) {
  if (e.keyCode == 68 && e.ctrlKey) {
    //alert("Ctrl D");
    e.preventDefault();
    $('#button-1085').click();
    $('#menuitem-1087').click();
  }
})
