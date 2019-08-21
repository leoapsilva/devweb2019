$(document).ready(function(){
    
    $("input#nome").val("dadsadasdadasdasdasdas");

    $("#limpar").click(function() {
        
        // Solução 1: Não funciona
        // Porque o reset é uma função que precisa de um seletor
        // https://api.jquery.com/reset-selector
        //$("#form_dados_pessoais input").reset();

        // Solução 2: OK
        //$("#form_dados_pessoais")[0].reset();
        
        // Solução 3: OK
        //$("#form_dados_pessoais").get("0").reset();
        
        // Solução 4: OK
        // Força bruta:
        //$("#telefone").val("");
        //$("#nome").val("");
        //$("#sobrenome").val("");

        //Solução 5: OK
        $('#form_dados_pessoais').each(function() { 
            this.reset()
        });
    });
});



























//$("#form_dados_pessoais").parent().find('input').removeClass("is-invalid");
