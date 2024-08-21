const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const passwordtwo = document.getElementById('password-two')
 
form.addEventListener('submit', (e) => {
    e.preventDefault()
 
    checkInputs()
})
 
function checkInputs() {
 
    const usernameValue = username.value.trim()
    const emailValue = email.value.trim()
    const passwordValue = password.value.trim()
    const passwordtwoValue = passwordtwo.value.trim()
    const CPFValue = CPF.value.trim()
 
    if(usernameValue === '') {
        // mostrar erro
        // add classe
        setErrorFor(username, 'Preencha esse campo')
    } else {
        // adicionar a classe de sucesso
        setSuccessFor(username)
    }
 
    if(emailValue === '') {
        // mostrar erro
        // add classe
        setErrorFor(email, 'Preencha esse campo')
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, 'Email inválido')
    } else {
        // adicionar a classe de sucesso
        setSuccessFor(email)
    }
 
   
    if(passwordValue === '') {
        // mostrar erro
        // add classe
        setErrorFor(password, 'Preencha esse campo')
 
    } else if(passwordValue.length < 8) {
        setErrorFor(password, 'A senha deve ter mais de 8 caracteres')
    } else {
        // adicionar a classe de sucesso
        setSuccessFor(password)
    }
 
    if(passwordtwoValue === '') {
        // mostrar erro
        // add classe
        setErrorFor(passwordtwo, 'Preencha esse campo')
 
    } else if(passwordValue !== passwordtwoValue) {
        setErrorFor(passwordtwo, 'As senhas não são iguais')
    } else {
        // adicionar a classe de sucesso
        setSuccessFor(passwordtwo)
    }
 
    if(CPFValue === '') {
        setErrorFor(CPF, 'Preencha esse campo')
    } else {
        setSuccessFor(CPF)
    }
 
}
 
function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small')
 
    small.innerText = message
 
    formControl.className = 'form-control error'
}
 
function setSuccessFor(input) {
    const formControl = input.parentElement;
 
    formControl.className = 'form-control success'
}
 
function isEmail(email) {
    return /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(email)
}
 
 //mascara CPF
 
 function mascaraCpf(mascara, input){
    const vetMask = mascara.split("")
    const numCpf = input.value.replace(/\D/g, "")
    const cursor = input.selectionStart
    const tecla = (window.event) ? event.keyCode : event.which
 
    for(let i=0; i<numCpf.length; i++){
        vetMask.splice(vetMask.indexOf('#'), 1, numCpf[i])
    }
 
    input.value = vetMask.join("")
    if(tecla != 37 && (cursor == 3 || cursor == 7 || cursor == 11)){
        input.setSelectionRange(cursor+1, cursor+1)
    } else{
        input.setSelectionRange(cursor, cursor)
    }
   
}
