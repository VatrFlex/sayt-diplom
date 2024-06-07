$('.photo2:first').addClass('is-current');
setInterval(function(){
  var $next = $('.photo2.is-current')
  	.removeClass('is-current')
  	.next('.photo2g');
  
  $next.length ? $next.addClass('is-current') : $('.photo2:first').addClass('is-current');
}, 1000);