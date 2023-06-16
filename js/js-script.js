function validateForm() {
    // Проверка поля имени
    var name = document.forms["myForm"]["name"].value;
    if (name == "") {
        alert("Пожалуйста, заполните поле 'Ваше имя'");
        document.forms["myForm"]["name"].focus();
        return false;
    }

    // Проверка поля пароля
    var password = document.forms["myForm"]["password"].value;
    if (password.length < 4) {
        alert("Пароль должен содержать не менее 4 символов");
        document.forms["myForm"]["password"].focus();
        return false;
    }

    // Проверка поля подтверждения пароля
    var confirmPassword = document.forms["myForm"]["confirmPassword"].value;
    if (password != confirmPassword) {
        alert("Пароли не совпадают");
        document.forms["myForm"]["confirmPassword"].focus();
        return false;
    }

    // Проверка поля электронного адреса
    var email = document.forms["myForm"]["email"].value;
    if (email == "" || email.indexOf("@") == -1) {
        alert("Пожалуйста, введите корректный электронный адрес");
        document.forms["myForm"]["email"].focus();
        return false;
    }

    // Проверка поля сообщения
    var message = document.forms["myForm"]["message"].value;
    if (message.length < 10) {
        alert("Сообщение должно содержать не менее 10 символов");
        document.forms["myForm"]["message"].focus();
        return false;
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const magicText = document.querySelector("#js-magic");
    const phrase = "Добро пожаловать! приятного времяпрепровождения!";
    let isAnimated = false;
    magicText.addEventListener("click", function () {
        if (isAnimated) { return false; }
        isAnimated = true;
        setTimeout(function moreSymbols(number = 1) {
            magicText.innerHTML = phrase.substr(0, number)
            if (number <= phrase.length) {
                setTimeout(moreSymbols, 100, number + 1)
            }
        }, 100) 
    })
})

