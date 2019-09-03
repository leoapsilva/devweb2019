$(document).ready(function(){
  
    jQuery(function ($) {
        $("#cep").change(function () {
            var cep_code = $(this).val();
            var url = "https://api.postmon.com.br/v1/cep/" + cep_code;
            if (cep_code.length <= 0) return;
            $.get(url,
                    function (result) {
                        //if( result.status!=1 ){
                        //alert(result.message || "Houve um erro desconhecido");
                        //return;
                        //}
                        $("input#cep").val(result.cep);
                        $("input#estado").val(result.estado);
                        $("input#cidade").val(result.cidade);
                        $("input#bairro").val(result.bairro);
                        $("input#endereco").val(result.logradouro);
                        $("input#complemento").val(result.complemento);
                    })
                .fail(function () {
                    alert("CEP não encontrado");
                });
        });
    });
});