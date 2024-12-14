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

$.getJSON('data/scm.json', function(data) {
  $.each(data.scm, function(i, f) {
      
       var scmdata=   "<tr> <td>"+f.sNo+" 		 </td> <td class='text-center'>	"+f.mName +"	 </td> <td class='text-center'>	"+ f.desi+"	 </td> <td class='text-center'>	"+f.occ +"	</td>  </tr>";
       $(scmdata).appendTo("#scmId");

});
});



 });
