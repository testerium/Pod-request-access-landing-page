const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
    e.preventDefault()
    checkInputs();
});

function checkInputs() {
    const email = document.getElementById('email');
    const emailValue = email.value.trim();
    let errorContainer = email.parentElement.querySelector('#error_text');

    email.classList.remove('error');
    errorContainer.classList.remove('active');

    if (emailValue === '') {
        setErrorFor(email, 'Oops! Please add your email');
        return;
    }

    let regExp = /^[^ ]+@[^ ]+\.[a-z]{2,6}$/;

    if (!regExp.test(emailValue)) {
        setErrorFor(email, 'Oops! Please check your email');
        return;
    }
}

function setErrorFor(input, message) {
    input.classList.add('error');

    let errorContainer = input.parentElement.querySelector('#error_text');
    errorContainer.textContent = message;
    errorContainer.classList.add('active');
}