(function(){
  const $body = document.querySelector('body');
  
  const menu = new Menu({
    container: '.header__nav',
    toggleBtn: '.header__btnMenu',
    widthEnabled: 1024
  })

  $body.classList.remove('no-js');
  $body.classList.add('js');
  
})()