
$(document).ready(function(){
    $(".online-list").mCustomScrollbar({
       autoHideScrollbar:false,
       theme:"dark"
    });

    //Range
    if($('.range-bar').length > 0){
        $('.range-bar').each(function() {
            var get_val = $(this).find('span').html();
            $(this).find('span').css('width', get_val + '%');
        });
    }
    $('.social-conect-list li a').click(function (e) {
        e.preventDefault();
        $(this).parent().addClass('connected');
        $('.alert').addClass('in');
        setTimeout(function() {
            $('.alert').removeClass('in');
        }, 3000);
        $(this).find('.conect-status').text('Connected');
        $(this).unbind('click');
        $(this).attr('href', 'javascript:void(0);').css('cursor', 'default');;
    });

    $('.social-conect-list li.connected a').unbind('click');
    $('.social-conect-list li.connected a').attr('href', 'javascript:void(0);').css('cursor', 'default');;
    
    $('.close').click(function () {
      $(this).parent().removeClass('in'); // hides alert with Bootstrap CSS3 implem
    });

    //Scroll top
    $('#Pagetop a').click(function() {
        var href = $(this).attr("href"),
          offsetTop = href === "#" ? 0 : $(href).offset().top;
        $('html, body').stop().animate({ 
            scrollTop: offsetTop
        }, 800);
    });

    // $('.ribbon-green').click(function() {
    //     $('html, body').stop().animate({ 
    //         scrollTop: document.body.scrollHeight
    //     }, 800);
    // });
    $(function() {
      $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top
            }, 500);
            return false;
          }
        }
      });
    });

    //Conect
    $('.streamer-screen .conect-chanel .conimg').click(function(e) {
      $(this).parents('.block-competition').addClass('conect-success');
    });
    //Connect viewer
    
    $('.viewer-screen .conect-chanel .conimg').click(function(e) {
      $(this).children("*").remove();
      $(this).append('<i class="connect-ok fa fa-check-circle fa-4" aria-hidden="true">');
    });
    
});

//Height auto
equalheight = function(container){
var currentTallest = 0,
     currentRowStart = 0,
     Array = {},
     rowDivs = new [].constructor(),
     $el,
     topPosition = 0;
 $(container).each(function() {

   $el = $(this);
   $($el).height('auto');
   topPostion = $el.position().top;

   if (currentRowStart != topPostion) {
     for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
       rowDivs[currentDiv].height(currentTallest);
     }
     rowDivs.length = 0; // empty the array
     currentRowStart = topPostion;
     currentTallest = $el.height();
     rowDivs.push($el);
   } else {
     rowDivs.push($el);
     currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
  }
   for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
     rowDivs[currentDiv].height(currentTallest);
   }
 });
};

$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 300) {
        $('#Pagetop').show();
    } else {
        $('#Pagetop').hide();
    }
});

$(window).load(function() {
  equalheight('.head-section .box-item');
  equalheight('.row-list .row-item');
});

$(window).resize(function(){
  equalheight('.head-section .box-item');
  equalheight('.row-list .row-item');
});
