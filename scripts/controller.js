jQuery.expr[":"].Contains = jQuery.expr.createPseudo(function(arg) {
  return function(elem) {
    return $(elem).text().toUpperCase().indexOf(arg.toUpperCase()) >= 0;
  };
});

var unspoil = function() {
  var term = $('#searchTxt').val();
  $(".tweet-text:Contains('"+term+"')").each(function() {
    $(this).text('SPOILER!');
  });
};

$('#global-actions').append("<li> Keyword: <input type='text' id='searchTxt' name='term'></input> <br></li>");
$('#global-actions').append("<li><input type='button' value='Unspoil' onclick='unspoil();'></input></li>");
