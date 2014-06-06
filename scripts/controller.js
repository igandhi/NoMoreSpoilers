var unspoil = function() {
  var searchTerm = $('#searchTxt').val();
  alert(searchTerm);
}

$('#content-main-heading').append(" Keyword: <input type='text' id='searchTxt' name='term'></input> <br>");
$('#content-main-heading').append("<input type='button' value='Unspoil' onclick='unspoil();'></input>");
