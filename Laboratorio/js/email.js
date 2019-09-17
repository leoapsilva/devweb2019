<script>

$(document).ready(function () {

    function validateEmail($email) {

        if ($email === "") {
            return false
        } else {
            var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
            return emailReg.test($email);
        }
    }
}
</script>