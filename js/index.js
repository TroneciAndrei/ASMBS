var btns = document.getElementsByClassName("btn");

for(var i = 0; i < btns.length; i++){
    btns[i].addEventListener("click", function(){
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace("active", "");
        this.className += " active";
    })
}


const form = document.getElementById('form');
const username = document.getElementById('username');
const surname = document.getElementById('surname');
const email = document.getElementById('email');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function validateInputs(){
    const usernameValue = username.value.trim();
    const surnameValue = surname.value.trim();
    const emailValue = email.value.trim();

    if(usernameValue === '') {
        setError(username, 'Numele este necesar');
    } else {
        setSuccess(username);
    }

    if(surnameValue === '') {
        setError(surname, 'Prenumele este necesar');
    } else {
        setSuccess(surname);
    }

    if(emailValue === '') {
        setError(email, 'Email-ul este necesar');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Va rugam sa ne dati o adresa de email valida');
    } else {
        setSuccess(email);
    }

};

function checkform(){
var f = document.forms["form"].elements;
var canSubmit=true;
for (var i = 0; i < f.length; i++) {
if (f[i].value.length==0) canSubmit=false;
}
if (canSubmit){
document.getElementById('submit').addEventListener("click",function(){
    alert('Multumim, o sa va contactam curand!');
})
}
}



    

