$(document).ready(function() { 
    $("#ajaxform").submit(function() {
        var form = $(this); 
        var error = false;
        form.find('input').each( function(){
        });
        if (!error) { 
            var data = form.serialize();
            $.ajax({
                type: 'POST',
                url: 'form.php',
                dataType: 'json',
                 data: data,
                beforeSend: function(data) {
                    form.find('input[type="submit"]').attr('disabled', 'disabled');
                },
                success: function(data){
                    $('.email').val('');
                    if (data['error']) {
                        alert(data['error']);
                    } else {
                        alert('Thanks! Your message has been sent');
                    }
                },
                error: function (xhr, ajaxOptions, thrownError) {
                    alert(xhr.status);
                    alert(thrownError); 
                },
                complete: function(data) {
                    form.find('input[type="submit"]').prop('disabled', false);
                }                                  
            });
        }
        return false;
    });
});