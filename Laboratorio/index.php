<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Login</title>
</head>
<body>

<form action="index.php" method="post">
    Usuário:<input type="text" id="user" name="user"/>
    Senha: <input type="password" id="password" name="password"/>
    <input type="hidden" id="login" value="login" name="login"/>
    <button type="submit"> Entrar</button>
</form>

<pre>
<?php 
    echo "HTTP_USER_AGENT = " . $_SERVER['HTTP_USER_AGENT']; 
    echo "
    ";
    echo "POST = " . print_r($_POST, true);


    if (!empty($_SESSION))
    {
        echo "SESSION = " . print_r($_SESSION, true);
    }   
?>
</pre>

</html>
</body>

<?php
session_start();

if (!empty($_POST)) {
    if ($_POST["login"] == "login") {

        $_SESSION['user'] = $_POST['user'];

        $ret = login($_POST["user"], $_POST["password"]);

        if ($ret) {
            echo "Bem-vindo ". $_SESSION['user'];
        }
        else
        {
            echo "Usuário ou senha incorretos. Corrija";
        }
    }
}

// Função de autenticação
// Verifica na base de dados se o usuário e senha estão corretos
function login($user, $password)
{
    return true;
}
?>