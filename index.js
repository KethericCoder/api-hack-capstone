
$( ".icon-top" ).click(function() {
  $(".horoscope").toggleClass('hide');
  fetch("http://ohmanda.com/api/horoscope/virgo")
  .then(response => response.json())
  .then(data => { $(".daily-horoscope").append(JSON.stringify(data))
     
  });
});

