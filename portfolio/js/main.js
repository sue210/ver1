//nav 버튼 클릭 시 화면 테마 변경
$('nav li').click(function(){
  let className = $(this).children('a').text();
  $('nav li a').removeClass();
  $(this).children('a').addClass('on');
  $('div#wrap').removeClass();
  $('div#wrap').addClass(className);
});

    
//figure image slide
setInterval(function(){

  $('figure ul').animate({
    left : '0'
  }, 600, function(){
    $('figure ul').append($('figure ul li').eq(0));
    $('figure ul').css({ left : 0});

  });

}, 1000);


setInterval(function(){

  $('figure ol').animate({
    left : '0'
  }, 600, function(){
    $('figure ol').append($('figure ol li').eq(0));
    $('figure ol').css({ left : 0});

  });

}, 2000);

setInterval(function(){

  $('figure span').animate({
    top : '-1200px'
  }, 5000, function(){
    $('figure span').append($('figure span img').eq(0));
    $('figure span').css({ top : 0});

  });

}, 3000);






