function backtotop(){
  let button=$('.back_to_top');
    
  $(window).on('scroll',()=>{
      if ($(this).scrollTop()>=500){
          button.fadeIn();
      }else{
          button.fadeOut();
          
      }
  });
    button.on('click', (e)=>{
        e.preventDefault();
        $('html').animate({scrollTop: 0}, 1000);
        
    })
}
backtotop();
