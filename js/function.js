$(document).ready(function(){
  $('body').removeClass('nojs').addClass('js');

  $('.slide-close')
  .on('click',function(){
    $('.slide-lightbox').removeClass('slide-open').removeAttr('data-content');
    $('body').removeClass('slide-is-open');
    var t2=setTimeout(function(){
      $('.pic-image').attr('src','');
      $('.pic-fullres-link').attr('href','');

    },500)
  })

  $('.pictures-item a')
  .on('click',function(event){
    event.preventDefault();
    var href=$(this).attr('href'),
        img=$(this).data('img'),
        highres='images/pictures/1080/'+img+'.jpg',
        fullres='images/pictures/fullres/'+img+'.jpg';
    $.ajax({
      type:'HEAD',
      url:'',
      success: function(){
        var link=href;
        $('.pic-image').attr('src',highres);
        $('.pic-fullres-link').attr('href',fullres);
      },
      error: function(){
      },
      complete: function(){
        $('.slide-lightbox').addClass('slide-open');
        $('body').addClass('slide-is-open');
      }
    });
  })

  var connection11='bay',
      connection12='thestereophones',
      connection13='com',
      contact1=connection11+'@'+connection12+'.'+connection13,
      connection21='mail',
      contact2=connection21+'@'+connection12+'.'+connection13;

  $('.delivery1').empty().html(contact1);
  $('.delivery2').empty().html(contact2);



  $('#music-player').jPlayer({
    supplied:'mp3',
    volume:'1',
    ended:function(){
      $('.isPlaying').trigger('click');
    }
  });


  $('.music-item a').on('click',function(e){
    e.preventDefault();
    var isLoaded;
    if($(this).hasClass('isLoaded')){
      isLoaded=true;
    }
    else{
      isLoaded=false;
    }

    if(!isLoaded){
      $('.music-item a').find('.music-pause').css('display','none');
      $('.music-item a').find('.music-play').css('display','block');
    }

    $('.music-item a').removeClass('isLoaded');
    $(this).addClass('isLoaded');

    if($(this).find('.music-pause').css('display')!='none'){
      $(this).find('.music-pause').css('display','none');
      $(this).find('.music-play').css('display','block');
      $('#music-player').jPlayer('pause');
      $('.music-item a').removeClass('isPlaying');
    }
    else{
      $(this).find('.music-play').css('display','none');
      $(this).find('.music-pause').css('display','block');
      if(!isLoaded){
        var file=$(this).attr('href');
        $('#music-player').jPlayer('setMedia', {
          mp3:file
        })
      }
      $('#music-player').jPlayer('play');
      $(this).addClass('isPlaying');


    }

  })

  $('.videos-item').on('click', function(){
    $('.isPlaying').trigger('click');
  })




})
