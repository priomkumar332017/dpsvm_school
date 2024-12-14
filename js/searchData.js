// Initialize Select2 on select elements
$(".select2").select2();

// Load data from JSON files
$.getJSON("data/classdata.json", function(countries) {
  // Populate countries select
  countries.forEach(country => {
    $("#countries").append(new Option(country.name, country.id));
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
        const filteredStates = states.filter(state => state.country_id === selectedCountryId);
        filteredStates.forEach(state => {
          statesSelect.append(new Option(state.name, state.id));
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
        const filteredCities = cities.filter(city => city.state_id === selectedStateId);
        filteredCities.forEach(city => {
          citiesSelect.append(new Option(city.name, city.id));
        });
      }

      // Refresh Select2 elements
      citiesSelect.trigger("change");
    });
  });
});

function showResult() {
  const p = document.querySelector('#result');
  const category = document.querySelector(`#cities`);
  const studentName = document.querySelector(`#countries`);
  const studentID = document.querySelector(`#countries`);
  p.innerText = "Category: " + category.value + "\nStudent ID: " + studentID.value + "\nStudent Name: " + studentName.value;
}