var unspoil = function() {
  var term = $('#searchTxt').val();
  $(".tweet-text:contains('down')").each(function() {
    $(this).text('SPOILER!');
  });
};

$('#content-main-heading').append(" Keyword: <input type='text' id='searchTxt' name='term'></input> <br>");
$('#content-main-heading').append("<input type='button' value='Unspoil' onclick='unspoil();'></input>");
