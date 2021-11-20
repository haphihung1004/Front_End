
    $("#send").click(function(){
        var add = $('#message').val();
        $('.chat').append('<div class="box-msg msg-left">' + add + '</div>')
        $('#message').val('');
    });

    $("#send2").click(function(){
          var add= $('#message2').val();
         $('.chat').append('<div class="box-msg msg-right">' + add + '</div>')
         $('#message2').val('');
    });

  