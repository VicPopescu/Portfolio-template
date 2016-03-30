
/*Home page div fade-out effect*/
  
   /* Check screen size */ 
function detectScreenSize() {
   if(window.innerWidth <= 750 && window.innerHeight <= 450) {
     return true;
   } else {
     return false;
   }
};
    /*****************/

/*Apply effect only on desktop sized screens*/

if(!detectScreenSize()){
    $(window).scroll(function(){
    var scrollVar = $(window).scrollTop();
    $('.home-overlay-bg').css("opacity", 1 - scrollVar/700);
});
};

/******end******/