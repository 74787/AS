$(document).ready(function(){
  $('#hamburger').click(function(){
    $(this).toggleClass('open');
    $('#menu-list').toggleClass('active');
  });
});