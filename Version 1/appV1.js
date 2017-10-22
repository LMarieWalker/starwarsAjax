
// var filmCount;
$(document).ready(function(){

  for (let i = 0; i < 6; i++){
    $.get(('https://swapi.co/api/films/'+(i+1)+'/'), function(data){
      console.log(data);

      var firstHeader = $("<h3></h3>")[0];
      $(firstHeader).text(data.title);
      $('.movie')[i].append(firstHeader);

      var opening = $("<p></p>")[0];
      $(opening).text(data.opening_crawl);
      $('.movie')[i].append(opening);

      var showPplBtn = $("<button></button")[0];
      $('.movie')[i].append(showPplBtn);
      $('button').text('People');

      $(showPplBtn).click(function(){
        for (let y = 0; y < 3; y++) {
          let ppl = $('<p></p>');
          $.get((data.characters[y]), function(charac){
            $(ppl).text(charac.name);
            $(people).append(ppl);
          })
        }
        $(people).empty();
      })
    })
  }
})
// we want to add "let container = $('.movie')[0];"
// change the "('.movie')[0]" within the code ot "('container')"
