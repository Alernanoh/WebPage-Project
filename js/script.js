const creditCard = document.getElementById('creditCard');
const creditCode = document.getElementById('creditCode');
const form = document.getElementById('buyForm');
const errorElement = document.getElementById('error');

form.addEventListener('submit', (e) =>{
    let messages=[]

    if(creditCard.value.length <=15){
        messages.push('Número de la tarjeta debe tener al menos 16 caracteres')
    }
    if(creditCard.value.length >=19){
        messages.push('Número de la tarjeta demasiado largo')
    }
    if(creditCode.value.length >=4 || creditCode.value.length < 3){
        messages.push('No es un código CVV válido')
    }

    if (messages.length > 0){
        e.preventDefault()
        errorElement.innerText = messages.join(', ')
    }
});