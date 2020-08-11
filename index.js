// NASA API Info
// apiKey="NhmXA7rpEvOYKSTQLjpGHNpnk7puUY54wiHuT2eO"
// searchURL="https://api.nasa.gov/planetary/"

// helpful code
const searchURL="https://horoscopeapi-horoscope-v1.p.rapidapi.com/daily?date=today"

function displayResults(responseJson) {
  // if there are previous results, remove them
  console.log(responseJson);
  $(".horoscope").empty();
  // iterate through the items array
  for (let i = 0; i < responseJson.items.length; i++) {

    $(".horoscope").append(
      `<li><h3>${responseJson.data[i].fullname}</h3>
      <p>${responseJson.data[i].description}</p>
      <p><a href="${responseJson.data[i].url}">${responseJson.data[i].url}</a></p>
      </li>`
    );
  }
  $("p").removeClass("hidden");
}

// function getNationalParks(query, maxResults = 10) {
//   const params = {

//
//     q: query,
//     maxResults,
//   };
//   const queryString = formatQueryParams(params);
//   const url = searchURL + "?" + queryString;

//   console.log(url);

//   fetch(url)
//     .then((response) => {
//       if (response.ok) {
//         return response.json();
//       }
//       throw new Error(response.statusText);
//     })
//     .then((responseJson) => displayResults(responseJson))
//     .catch((err) => {
//       $("#js-error-message").text(`Something went wrong: ${err.message}`);
//     });
// }

// function watchForm() {
//   $("form").submit((event) => {
//     event.preventDefault();
//     const searchTerm = $("#js-search-term").val();
//     const maxResults = $("#js-max-results").val();
//     getNationalParks(searchTerm, maxResults);
//   });
// }

// $(watchForm);



$( ".icon-top" ).click(function() {
  alert("HEY")
  $(".horoscope").toggleClass('hide');
});




