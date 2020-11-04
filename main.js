const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const re_password = document.getElementById('re-password')


// erro if info supplied is not valid
const errorFunc = (input, message) => {
    const formControl = input.parentElement
    formControl.className = 'form-control error'
    const small = formControl.querySelector('small')
    small.innerText = message
}

// success if info supplied is valid
const successFunc = input => {
    const formControl = input.parentElement
    formControl.className = 'form-control success'
}

// validating email
const isValidEmail = email => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    return re.test(String(email).toLowerCase())
}

form.addEventListener('submit', e => {
    e.preventDefault()
    console.log(username.value)
    
    if(username.value === '') {
        errorFunc(username, 'Username is required')
    }
    else {
        successFunc(username)
    }
    
    if(email.value === '') {
        errorFunc(email, 'email is required')
    }
    else if(!isValidEmail(email.value)) {
        errorFunc(email, 'Email not valid')
    }
    else {
        successFunc(email)
    }
    if(password.value === '') {
        errorFunc(password, 'password is required')
    }
    else {
        successFunc(password)
    }
    if(re_password.value !== password.value) {
        errorFunc(re_password, 'password doesn\'t match')
    }
    else {
        successFunc(re_password)
    }

})