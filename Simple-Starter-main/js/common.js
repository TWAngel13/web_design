

document.getElementById('orderButton').onclick = () =>
{
    if (!document.getElementById('nameInput').value || !document.getElementById('phoneInput').value || !document.getElementById('emailInput').value)
    {
        alert('Пожалуйста, заполните все поля')
    }
    else if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(document.getElementById('emailInput').value))
    {
        alert('Ваша заявка принята!');
    }
    else
    {
        alert('"' + document.getElementById('emailInput').value + '" не является корректным адресом электронной почты');
    }
}