// GETTING FILM INFORMATION FOR THE CARDS
$(document).ready(function(){
  $('.modal').modal();

  for (let i = 0; i < 6; i++){
    $.get(('https://swapi.co/api/films/'+(i+1)+'/'), function(data){
      console.log(data);

      // FILM NAME
      var firstHeader = $("<h3></h3>")[0];
      $(firstHeader).text(data.title);
      $('.card-title')[i].append(firstHeader);

      // OPENING CRAWL
      var opening = $("<p></p>")[0];
      $(opening).text(data.opening_crawl);
      $('.cardPara')[i].append(opening);

      // PEOPLE BUTTON
      // var showPplBtn = $("<button></button>")[0];
      // $('.movie')[i].append(showPplBtn);
      $('button').text('People');
      let peopleButton = $('.aOne')[i];
      $(peopleButton).click(function(){
        for (let y = 0; y < 3; y++) {
          let ppl = $('<p></p>');
          $.get((data.characters[y]), function(charac){
            $(ppl).text(charac.name);
            $(people).append(ppl);
          })
        }
        $(people).empty();
      })

      // PLANETS BUTTON
      $('button').text('Planet');
      let planetButton = $('.aTwo')[i];
      $(planetButton).click(function(){
        for (let y = 0; y < 3; y++) {
          let myPlnt = $('<p></p>');
          $.get((data.planets[y]), function(plnt){
            $(myPlnt).text(plnt.name);
            $(planets).append(myPlnt);
          })
        }
        $(planets).empty();
      })
    })
  }
})
// we want to add "let container = $('.movie')[0];"
// change the "('.movie')[0]" within the code ot "('container')"
