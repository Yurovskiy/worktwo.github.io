$(document).ready(function(){   
          $(window).scroll(function () {
              if ($(this).scrollTop() > 900) {
                  $('#go_up').fadeIn('slow');
              } else {
                  $('#go_up').fadeOut('slow');
              }
          });
          $('#go_up').click(function () {
              $('body,html').animate({
                  scrollTop: 0
              }, 1000);
              return false;
          });
      });

