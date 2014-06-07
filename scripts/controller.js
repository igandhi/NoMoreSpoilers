var unspoil = function() {
  var term = $('#searchTxt').val();
  $(".tweet-text:contains('"+term+"')").each(function() {
    $(this).text('SPOILER!');
  });
};

$('#global-actions').append("<li> Keyword: <input type='text' id='searchTxt' name='term'></input> <br></li>");
$('#global-actions').append("<li><input type='button' value='Unspoil' onclick='unspoil();'></input></li>");
