$(function() {


    var people = [];
 

$.getJSON('data/scm.json', function(data) {
  $.each(data.scm, function(i, f) {
      
       var scmdata=   "<tr> <td>"+f.sNo+" 		 </td> <td class='text-center'>	"+f.mName +"	 </td> <td class='text-center'>	"+ f.desi+"	 </td> <td class='text-center'>	"+f.occ +"	</td>  </tr>";
       $(scmdata).appendTo("#scmId");

});
});




 });
