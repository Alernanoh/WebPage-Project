const comentario = document.getElementById('comentario');
const form = document.getElementById('commentForm');
const errorElement = document.getElementById('error');

form.addEventListener('submit', (e) =>{
    let messages=[]

    if(comentario.value.length >200){
        messages.push('El comentario no puede superar los 200 caracteres.')
    }
    if (messages.length > 0){
        e.preventDefault()
        errorElement.innerText = messages.join(', ')
    }
});