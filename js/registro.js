const passwd = document.getElementById('passwd');
const form = document.getElementById('registerForm');
const errorElement = document.getElementById('error');

form.addEventListener('submit', (e) =>{
    let messages=[]

    if(passwd.value.length <16){
        messages.push('La contraseña debe tener al menos 16 caracteres.')
    }
    if(passwd.value.length >35){
        messages.push('La contraseña no puede tener más de 35 caracteres.')
    }
    
    if (messages.length > 0){
        e.preventDefault()
        errorElement.innerText = messages.join(', ')
    }
});