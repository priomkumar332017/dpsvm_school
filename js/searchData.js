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

    statesSelect.empty();
    citiesSelect.empty();

    $.getJSON("data/admissionNo.json", function(states) {
      if (selectedCountryId) {
        const filteredStates = states.filter(state => state.class_id === selectedCountryId);
        filteredStates.forEach(state => {
          statesSelect.append(new Option(state.addm_no, state.addm_no));
        });
      }

      // Refresh Select2 elements
      statesSelect.trigger("change");
      citiesSelect.trigger("change");
    });
  });

  // Event listener for state selection
  $("#states").on("change", function() {
    const selectedStateId = $(this).val();
    const citiesSelect = $("#cities");

    citiesSelect.empty();

    $.getJSON("data/studentName.json", function(cities) {
      if (selectedStateId) {
        const filteredCities = cities.filter(city => city.addm_no === selectedStateId);
        filteredCities.forEach(city => {
          citiesSelect.append(new Option(city.student_name, city.student_name,city.tc_no));
        });
      }

      // Refresh Select2 elements
      citiesSelect.trigger("change");
    });
  });
});

function showResult() {
  const p = document.querySelector('#result');
  const studentValue = document.querySelector(`#cities`);
  console.log(studentValue);  //const selectedStudent = studentValue.selectedOptions[0];
  console.log(studentValue.selectedOptions[0]);
  
  const admissionValue = document.querySelector(`#states`);
  
  const classValue = document.querySelector(`#countries`);
  p.innerText = "Category: " + classValue.value + "\nStudent ID: " + admissionValue.value + "\nStudent Name: " + studentValue.value;
  //p.innerText = "Category: " + classValue. + "\nStudent ID: " + admissionValue.selectedOptions[0].addm_no.innerText + "\nStudent Name: " + studentValue.selectedOptions[0].student_name.innerText;

}