$(document).ready(function(){
   
     $(".myFormValidate").click(function() {

        $('.myForm input').each(function() {
            if ($(this).val() == "") {
                $(this).addClass("is-invalid");
                $(this).removeClass("is-valid");
            }            
            else
            {
                $(this).removeClass("is-invalid");
                $(this).addClass("is-valid");
            }
        });
    });

    $(".myFormClear").click(function() {

        $('.myForm input').each(function() { 
            $(this).removeClass("is-invalid");
            $(this).removeClass("is-valid");
            $(this).val("");
        });
    });

});
