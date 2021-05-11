
//dictionary table 
$(document).ready(function(){
  
    var arr = $("#table tr");
    $.each(arr, function(i, item) {
      var currIndex = $("#table tr").eq(i);
      var matchText = currIndex.children("td").first().text();
      $(this).nextAll().each(function(i, inItem) {
          if(matchText===$(this).children("td").first().text()) {
              $(this).remove();
          }
      });
  });
    // order, search the table
    $("#table").DataTable({
      "order":[[0,"asc"]]
    });
    
  })// end document ready