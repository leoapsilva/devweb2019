$(document).ready(function(){
    
    $("input#nome").val("dadsadasdadasdasdasdas");

    $("#limpar").click(function() {

        // Limpar o value de todos os inputs do form
        $('#form_dados_pessoais').each(function() { 
            this.reset()
        });

        // Remover classe is-[valid|invalid]
        
        // Solução 1: NOK 
        /*$('#form_dados_pessoais').each(function() { 
            $(this).removeClass("is-invalid");
            $(this).removeClass("is-valid");
        });*/
        // Solução 2:OK 
        $('#form_dados_pessoais input').removeClass("is-invalid");
        $('#form_dados_pessoais input').removeClass("is-valid");

    });

    $("#enviar").click(function() {

        $('#form_dados_pessoais input').each(function() {
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
});



























//$("#form_dados_pessoais").parent().find('input').removeClass("is-invalid");
