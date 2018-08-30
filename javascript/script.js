$("[type = search]").bind("keyup", function () {
    var searchinput = $(this).val();
   $(".list li").each(function (index,value) {
       listName = $(value).text();
       if (listName.toUpperCase().indexOf(searchinput.toUpperCase()) > -1) {
           $(value).show();
       } else {
           $(value).hide();
       }
   });
} );