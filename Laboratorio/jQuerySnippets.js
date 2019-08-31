<script>

// *** Como buscar o texto selecionado em um drop-down list (select box) usando jQuery
// https://stackoverflow.com/questions/1643227/get-selected-text-from-a-drop-down-list-select-box-using-jquery?rq=1
$("#yourdropdownid option:selected").text();

// *** Como fazer o refresh da página atual usando um botão
// https://stackoverflow.com/questions/5404839/how-can-i-refresh-a-page-with-jquery?rq=1
$('#something').click(function() {
    location.reload();
});

// *** Como mostrar ou esconder um elemento dependendo de um checkbox estar selecionado ou não 
// https://stackoverflow.com/questions/901712/how-to-check-whether-a-checkbox-is-checked-in-jquery?rq=1
$('#yourelement').click(function() {
    $("#show_hide_element").toggle(this.checked);
});
</script>
