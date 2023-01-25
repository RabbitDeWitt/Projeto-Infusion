(function(){
  const $body = document.querySelector('body');
  
  const menu = new Menu({
    container: '.header__nav',
    toggleBtn: '.header__btnMenu',
    widthEnabled: 1024
  })

  const carouselImgs = new Carousel({
    container: '.laptop-slider .slideshow',
    itens: 'figure',
    btnPrev: '.prev',
    btnNext: '.next'
  })
  
  const carouselQuotes = new Carousel({
    container: '.quote-slider',
    itens: 'figure',
    btnPrev: '.prev',
    btnNext: '.next'
  })
  
  $body.classList.remove('no-js');
  $body.classList.add('js');
  
})()