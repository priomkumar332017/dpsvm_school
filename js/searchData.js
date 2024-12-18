// Initialize Select2 on select elements
$(".select2").select2();


// Load data from JSON files
$.getJSON("data/classdata.json", function(countries) {
  // Populate countries select
  countries.forEach(country => {
    $("#countries").append(new Option(country.class_name, country.class_name));
  });

  // Event listener for country selection
  $("#countries").on("change", function() {
    const selectedCountryId = $(this).val();
    const statesSelect = $("#states");
    const citiesSelect = $("#cities");
    const dlLinkSelect = $("#dlink");

    statesSelect.empty();
    citiesSelect.empty();
    dlLinkSelect.empty();

    $.getJSON("data/admissionNo.json", function(states) {
      if (selectedCountryId) {
        const filteredStates = states.filter(state => state.class_id === selectedCountryId);
        filteredStates.forEach(state => {
          statesSelect.append(new Option(state.addm_no, state.addm_no));
        });
      }
     // dlLinkSelect.empty();
      // Refresh Select2 elements
      statesSelect.trigger("change");
      citiesSelect.trigger("change");
    });
  });

  // Event listener for state selection
  $("#states").on("change", function() {
    const selectedStateId = $(this).val();
    const citiesSelect = $("#cities");
    const dlLinkSelect = $("#dlink");
   // const dlDiv = $("#downloadLink");
   var downloadValue=null;
   dlLinkSelect.empty();
    citiesSelect.empty();

    $.getJSON("data/studentName.json", function(cities) {
      if (selectedStateId) {
        const filteredCities = cities.filter(city => city.addm_no === selectedStateId);
        filteredCities.forEach(city => {
          citiesSelect.append(new Option(city.student_name, city.student_name,city.tc_no));
        //  dlDiv.append(city.tc_no);
        dlLinkSelect.append(new Option(city.tc_no) );
       
        });
      }
      //$(scmdata).appendTo("#scmId");
      // Refresh Select2 elements
      citiesSelect.trigger("change");
    });
  });

  
});

function showResult() {
  var td="";
  var tb="";
  // const p = document.querySelector('#result');
  // document.querySelector('#result').empty();
  const divSelcted = $("#result");
  divSelcted.empty();
  // document.querySelector('#result').empty();
  const studentValue = document.querySelector(`#cities`);
  const dlLink = document.querySelector(`#dlink`);
  const admissionValue = document.querySelector(`#states`);  
  const classValue = document.querySelector(`#countries`);
  
  tb="<table class='table table-bordered table-striped table-hover'> <thead class='thead-dark'> <tr>  <th class='text-center'>Class</th> <th class='text-center'>Admission no</th> <th class='text-center'>Student Name</th> <th class='text-center'>Download Link</th> </tr> </thead> <tbody>  ";
  td=tb+"<tr> <td class='text-center'>"+classValue.value+" 		 </td> <td class='text-center'>	"+admissionValue.value +"	 </td> <td class='text-center'>	"+ studentValue.value+"	 </td>  <td class='text-center'><a target='_blank' href='	"+dlLink.value +"	'> Click Here</a></td></tr> </tbody></table>";
 // p.innerText="<table class='table table-bordered table-striped table-hover'> <thead class='thead-dark'> <tr> <th>Class</th> <th class='text-center'>Admission No</th> <th class='text-center'>Name</th> <th class='text-center'>Download Link</th> </tr> </thead> <tbody> <tr> <td>"+classValue.value+" 		 </td> <td class='text-center'>	"+admissionValue.value +"	 </td> <td class='text-center'>	"+ studentValue.value+"	 </td> <td class='text-center'>	"+'download link 1' +"	</td>  </tr>  </tbody> </table> " ;
  //p.innerText = "Category: " + classValue.value+ "\nStudent ID: " +dlLink.value + "\nStudent ID: " + admissionValue.value + "\nStudent Name: " + studentValue.value;
  //p.innerText = "Category: " + classValue. + "\nStudent ID: " + admissionValue.selectedOptions[0].addm_no.innerText + "\nStudent Name: " + studentValue.selectedOptions[0].student_name.innerText;
  //$(td).appendTo("#result");
  divSelcted.append(td);
}