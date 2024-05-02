$(document).ready(function () {
    
  $('input').click(function(){
      $(this).addClass('active').siblings('.active').removeClass('active')
  });
  
  $(".buttons").click(function () {
      var cntrl = $(this).html();
     var existing  = $('input.active').val();
     $('input.active').val(existing + cntrl);
  });
});