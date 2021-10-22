
$('.owl-carousel').owlCarousel({
    loop:true,
    items:1,
    margin:10,
    responsiveClass:true,
    mouseDrag:false,
    nav:true,
    smartSpeed:600,
})
var swiper = new Swiper(".clients-swiper", {
    loop: true, 
    slidesPerView: 1,
    spaceBetween: 30,
    speed: 500,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      768:{
        slidesPerView: 2,
      }
    }
});
var swiper = new Swiper(".story-swiper", {
  loop: true, 
  slidesPerView: 1,
  spaceBetween: 30,
  speed: 500,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    576:{
      slidesPerView: 2,
    }
  }
});
$('#jq').LineProgressbar({
    percentage: 80,
    ShowProgressCount:true,
    fillBackgroundColor:'#f39c12',
    duration: 1000,
    backgroundColor:'#ececec',
    radius:'0px',
    height:'10px',
    width:'88%'
    });
    $('#jq2').LineProgressbar({
    percentage: 70,
    ShowProgressCount:true,
    duration: 1000,
    fillBackgroundColor:'#f39c12',
    backgroundColor:'#ececec',
    radius:'0px',
    height:'10px',
    width:'88%'
    });
    $('#jq3').LineProgressbar({
    percentage: 60,
    ShowProgressCount:true,
    duration: 1000,
    fillBackgroundColor:'#f39c12',
    backgroundColor:'#ececec',
    radius:'0px',
    height:'10px',
    width:'88%'
    });
    $('#jq4').LineProgressbar({
    percentage: 50,
    ShowProgressCount:true,
    duration: 1000,
    fillBackgroundColor:'#f39c12',
    backgroundColor:'#ececec',
    radius:'0px',
    height:'10px',
    width:'88%'
    });
    $('#jq5').LineProgressbar({
    percentage: 90,
    ShowProgressCount:true,
    duration: 1000,
    fillBackgroundColor:'#f39c12',
    backgroundColor:'#ececec',
    radius:'0px',
    height:'10px',
    width:'88%'
    });
    new WOW().init();
    $('.counter').counterUp({
        delay: 5,
        time: 900
    });
    var config = document.querySelector('.mix-cont')
    var mixer = mixitup(config);
    
    
      
    
    