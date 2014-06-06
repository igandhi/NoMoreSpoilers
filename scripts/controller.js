var unspoil = function() {
  $(".tweet-text:contains($('#searchTxt').val())").each(function(index) {
    $(this).text('SPOILER!');
  });
}

$('#content-main-heading').append(" Keyword: <input type='text' id='searchTxt' name='term'></input> <br>");
$('#content-main-heading').append("<input type='button' value='Unspoil' onclick='unspoil();'></input>");
