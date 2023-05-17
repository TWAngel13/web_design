document.getElementById('orderButton').onclick = () =>
{
    if (!document.getElementById('nameInput').value || !document.getElementById('phoneInput').value || !document.getElementById('emailInput').value)
    {
        document.getElementById('exampleModalLabel').textContent = 'Ошибка!';
        document.getElementById('exampleModalContent').textContent = 'Пожалуйста, заполните все поля.';
    }
    else if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(document.getElementById('emailInput').value))
    {
        document.getElementById('exampleModalLabel').textContent = 'Спасибо за обращение!';
        document.getElementById('exampleModalContent').textContent = 'Мы скоро свяжемся с Вами.';
    }
    else
    {
        document.getElementById('exampleModalLabel').textContent = 'Ошибка!';
        document.getElementById('exampleModalContent').textContent = '"' + document.getElementById('emailInput').value + '" не является корректным адресом электронной почты';
    }
}