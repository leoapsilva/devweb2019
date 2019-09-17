<?php

include "../validation.php";

function main()
{
    if(!valid_email("test@example.com"))
    {
        echo "Invalid email address.";
    }
    else
    {
        echo "Valid email address.";
    }
}

main();