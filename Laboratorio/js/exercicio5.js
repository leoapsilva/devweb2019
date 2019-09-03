$(document).ready(function(){
    
    $("#edit").click(function () {
        $("#companyForm input").prop("disabled", false);
        $("#cancel").show();
        $("#save").show();
    });

    $("#save").click(function () {
        $("#companyForm input").prop("disabled", true);
        $("#cancel").hide();
        $("#save").hide();
        $("#companyForm submit").click();
    });
});
