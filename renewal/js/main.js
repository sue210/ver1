
  // slide menu
  $('.gnb li').hover(function(){
    $(this).children('ul').stop().slideDown();
  }, function(){
    $(this).children('ul').stop().slideUp();
  });

  
