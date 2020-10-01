// NASA API Info
// apiKey="NhmXA7rpEvOYKSTQLjpGHNpnk7puUY54wiHuT2eO"
// searchURL="https://api.nasa.gov/planetary/"


$( ".icon-top" ).click(function() {
  $(".horoscope").toggleClass('hide');

});

const searchURL="https://json.astrologyapi.com/v1/sun_sign_prediction/daily/"

function displayResults(responseJson) {
  console.log(responseJson);
  $(".horoscope").empty();
  for (let i = 0; i < responseJson.items.length; i++) {
  $(".icon-top").click(function(){
    $(".horoscope").append(
      `<li><h3>${responseJson.data[i].fullname}</h3>
      <p>${responseJson.data[i].description}</p>
      <p><a href="${responseJson.data[i].url}">${responseJson.data[i].url}</a></p>
      </li>`
    );
  }
}

 function getDailyHoroscope(params)
  const params = {
    zodiacName: 'aries, taurus, gemini, cancer, leo, virgo, libra, scorpio, sagittarius, capricorn, aquarius, pisces'
  };
   const queryString = formatQueryParams(params);
   const url = searchURL + "?" + queryString;

   console.log(url);

  fetch(url)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(response.statusText);
    })
    .then((responseJson) => displayResults(responseJson))
    .catch((err) => {
      $("#js-error-message").text(`Something went wrong: ${err.message}`);
    });
}

function watchForm() {
  $("form").submit((event) => {
    event.preventDefault();
    const searchTerm = $(".icon-top").val();
    const maxResults = $("#js-max-results").val();
    getDailyHoroscope(searchTerm, maxResults);
  });
}

$(watchForm);




