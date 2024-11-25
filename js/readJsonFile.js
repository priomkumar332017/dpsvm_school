$(function() {


    var people = [];
 
    $.getJSON('data/cnews.json', function(data) {
        $.each(data.news, function(i, f) {
             var lirow=        "<li>" +"<i>" + f.date + "  : "+ "</i>" + f.msg +"<img src='images/new.gif'>" +"</li>";
             $(lirow).appendTo("#campusNews");
 
      });
 
    });
 
 });