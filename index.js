

$( "#aries" ).click(function() {
  $(".horoscope").toggleClass('hide');
  fetch("http://ohmanda.com/api/horoscope/aries")
  .then(response => response.json())
  .then(data => { $(".daily-horoscope").append(JSON.stringify(data))
     
  });
});

$( "#taurus" ).click(function() {
  $(".horoscope").toggleClass('hide');
  fetch("http://ohmanda.com/api/horoscope/taurus")
  .then(response => response.json())
  .then(data => { $(".daily-horoscope").append(JSON.stringify(data))
     
  });
});

$( "#gemini" ).click(function() {
  $(".horoscope").toggleClass('hide');
  fetch("http://ohmanda.com/api/horoscope/gemini")
  .then(response => response.json())
  .then(data => { $(".daily-horoscope").append(JSON.stringify(data))
     
  });
});

$( "#cancer" ).click(function() {
  $(".horoscope").toggleClass('hide');
  fetch("http://ohmanda.com/api/horoscope/cancer")
  .then(response => response.json())
  .then(data => { $(".daily-horoscope").append(JSON.stringify(data))
     
  });
});

$( "#leo" ).click(function() {
  $(".horoscope").toggleClass('hide');
  fetch("http://ohmanda.com/api/horoscope/leo")
  .then(response => response.json())
  .then(data => { $(".daily-horoscope").append(JSON.stringify(data))
     
  });
});

$( "#virgo" ).click(function() {
  $(".horoscope").toggleClass('hide');
  fetch("http://ohmanda.com/api/horoscope/virgo")
  .then(response => response.json())
  .then(data => { $(".daily-horoscope").append(JSON.stringify(data))
     
  });
});

$( "#libra" ).click(function() {
  $(".horoscope").toggleClass('hide');
  fetch("http://ohmanda.com/api/horoscope/libra")
  .then(response => response.json())
  .then(data => { $(".daily-horoscope").append(JSON.stringify(data))
     
  });
});

$( "#scorpio" ).click(function() {
  $(".horoscope").toggleClass('hide');
  fetch("http://ohmanda.com/api/horoscope/scorpio")
  .then(response => response.json())
  .then(data => { $(".daily-horoscope").append(JSON.stringify(data))
     
  });
});

$( "#sagittarius" ).click(function() {
  $(".horoscope").toggleClass('hide');
  fetch("http://ohmanda.com/api/horoscope/sagittarius")
  .then(response => response.json())
  .then(data => { $(".daily-horoscope").append(JSON.stringify(data))
     
  });
});

$( "#capricon" ).click(function() {
  $(".horoscope").toggleClass('hide');
  fetch("http://ohmanda.com/api/horoscope/capricorn")
  .then(response => response.json())
  .then(data => { $(".daily-horoscope").append(JSON.stringify(data))

  });
});

$( "#aquarius" ).click(function() {
  $(".horoscope").toggleClass('hide');
  fetch("http://ohmanda.com/api/horoscope/aquarius")
  .then(response => response.json())
  .then(data => { $(".daily-horoscope").append(JSON.stringify(data))
     
  });
});

$( "#pisces" ).click(function() {
  $(".horoscope").toggleClass('hide');
  fetch("http://ohmanda.com/api/horoscope/pisces")
  .then(response => response.json())
  .then(data => { $(".daily-horoscope").append(JSON.stringify(data))
     
  });
});




