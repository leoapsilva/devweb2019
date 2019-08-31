<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>

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
    $('#isAgeSelected').click(function() {
        $("#txtAge").toggle(this.checked);
    });

    // *** Como verificar qual radio button está selecionado
    // https://stackoverflow.com/questions/596351/how-can-i-know-which-radio-button-is-selected-via-jquery?rq=1
    $('input[name=radioName]:checked', '#myForm').val()

</script>
</head>
<body>

    <select id="yourdropdownid">
      <option value="volvo">Volvo</option>
      <option value="saab">Saab</option>
      <option value="mercedes">Mercedes</option>
      <option value="audi">Audi</option>
    </select>
        
    <input type="checkbox" id="isAgeSelected"/>
    <div id="txtAge" style="display:none">
    Age is selected
    </div>

    <button id="something">Aperte para fazer Reload</button>        

    <form id="myForm">
      <input type="radio" name="radioName" value="1" /> 1 <br />
      <input type="radio" name="radioName" value="2" /> 2 <br />
      <input type="radio" name="radioName" value="3" /> 3 <br />
    </form>

</body>
</html>
