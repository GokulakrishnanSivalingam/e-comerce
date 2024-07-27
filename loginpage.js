const form = document.getElementById("form");
const email = document.getElementById("email");
const password = document.getElementById("password");
if (email === "123@gmail.com") {
    setSuccess(email)

} else {
    form.addEventListener('submit', e => {
        e.preventDefault();

    });
}
if (password === "1234") {
    setSuccess(password);

} else {
    form.addEventListener('submit', e => {
        e.preventDefault();

    });
}


/*function setError(input, message) {
    const formcontrol = input.parentElement;
    const small = formcontrol.querySelector('small');
    formcontrol.className = 'form-control error ';
    small.innerText = message;
}

function setSuccess() {
    const formcontrol = input.parentElement;
    formcontrol.className = 'form-control success ';

}
form.addEventListener('click', e => {
    e.preventDefault();
    checkvalid();
});

function checkvalid() {
    const emailval = email.Value.trim();
    const passwordval = password.value.trim();

    if (emailval === '') {
        setError(email, "email is not required");
    } else {
        setSuccess(email);
    }


    if (passwordval === '') {
        setError(password, "password is not required");
    } else {
        setSuccess(password);
    }
}*/
function setSuccess() {
    const formcontrol = input.parentElement;
    formcontrol.className = 'form-control success ';

}