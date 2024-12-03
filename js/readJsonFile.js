$(function() {


    var people = [];
 
    $.getJSON('data/cnews.json', function(data) {
        $.each(data.news, function(i, f) {
             var lirow=        "<li>" +"<i>" + f.date + "  : "+ "</i>" + f.msg +"<img src='images/new.gif'>" +"</li>";
             $(lirow).appendTo("#campusNews");
 
      });
 
    });

    $.getJSON('data/eventnews.json', function(data) {
      $.each(data.news, function(i, f) {
           //var lirow=        "<li>" +"<i>" + f.date + "  : "+ "</i>" + f.msg +"<img src='images/new.gif'>" +"</li>";
           var eventrow= "<li>" + "<span class=\"event-date\">" + f.date.split(' ')[0]  + "</span> " + f.msg + "</li>";
           $(eventrow).appendTo("#eventNews");

    });

  });
 

  $.getJSON('data/nboard.json', function(data) {
    $.each(data.news, function(i, f) {
         //var lirow=        "<li>" +"<img src='images/folder_image/right.png'>" + f.date + "  : "+ "</i>" + f.msg +"<img src='images/new.gif'>" +"</li>";
         var nboard=   "<li>" +"<img src='images/folder_image/right.png'>"  + f.msg +"</li>";
         $(nboard).appendTo("#nboard");

  });

});
 });
