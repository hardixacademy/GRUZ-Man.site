$(document).ready(function () {

  $('#toggle').on("click", function () {
    $(this).toggleClass('active');
    $('#overlay').toggleClass('open');
    $('.header_logo_mob').toggleClass('al');
  });

  $('.header_nav_a_mob').click(function () {
    $('#toggle').removeClass('active');
    $('#overlay').removeClass('open');
  });
  $('.close_menu_logo').click(function () {
    $('#toggle').removeClass('active');
    $('#overlay').removeClass('open');
  });



  $("a").on("click", function (e) {
    var anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: $(anchor.attr('href')).offset().top
    }, 777);
    e.preventDefault();
    return false;
  });

  const car = document.getElementById('car'),
    car_time = document.getElementById('car_time'),
    gruz = document.getElementById('gruz'),
    gruz_time = document.getElementById('gruz_time'),
    calculate = document.querySelector('.calculate');

  let carVal = 0,
    car_timeVal = 0,
    gruzVal = 0,
    gruz_timeVal = 0;

  car.onchange = (e) => {
    carVal = (+e.target.options[e.target.options.selectedIndex].value);
    if(car_timeVal === 0){
      car_time.value = 2;
      car_timeVal = 2
    }
    if(carVal === 300){
      car_time.value = 3;
      car_timeVal = 3
    }
    if(carVal === 350){
      car_time.value = 3;
      car_timeVal = 3
    }
  }
  car_time.onchange = (e) => {
    car_timeVal = (+e.target.options[e.target.options.selectedIndex].value);
    if(carVal === 0){
      car.value = 200;
      carVal = 200
    }
    if(carVal === 300 && car_time.value < 3){
      car_time.value = 3;
      car_timeVal = 3
    }
    if(carVal === 350 && car_time.value < 3){
      car_time.value = 3;
        car_timeVal = 3
    }
  }
  
  gruz.onchange = (e) => {
    gruzVal = (+e.target.options[e.target.options.selectedIndex].value);
    if(gruz_timeVal === 0){
      gruz_time.value = 2;
      gruz_timeVal = 2
    }
  }
  gruz_time.onchange = (e) => {
    gruz_timeVal = (+e.target.options[e.target.options.selectedIndex].value);
    if(gruzVal === 0){
      gruz.value = 120;
      gruzVal = 120
    }
  }

  calculate.onclick = () => {
    let calc1 = carVal*car_timeVal,
        calc2 = gruzVal*gruz_timeVal;
    document.querySelector('.calc').innerText = calc1 + calc2;
  }


});