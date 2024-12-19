$(function() {


    var people = [];

$.getJSON('data/staff.json', function(data) {
  $.each(data.staff, function(i, f) {
      
       var staffdata=   "<tr> <td>"+f.sNo +"	 </td> <td class='text-center'>	"+ f.teacher+"	 </td> <td class='text-center'>	"+f.trade +"	 </td> <td class='text-center'>	"+ f.pQuali+"	 </td> <td class='text-center'>	"+ f.aLevel+"		 </td> <td class='text-center'>	"+f.email +"		</td>	</tr>";
       $(staffdata).appendTo("#staffTable");

});
});


 });
