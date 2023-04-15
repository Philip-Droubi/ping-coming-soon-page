let submit = document.querySelector('main form button');
let input = document.querySelector('.email-input');
let err = document.querySelector('.err');
let mobileView = false;

checkWidth();

function checkWidth() {
    let width = window.innerWidth;
    if (width <= 700 && !mobileView) {
        mobileView = true;
        console.log('mobile');
    }
    else if (width > 700 && mobileView) {
        mobileView = false;
    }
}

window.addEventListener('resize', checkWidth);

submit.addEventListener('click', (e) => {
    e.preventDefault();
    if (!checkInputEmpty() && validateEmail()) {
        submit.blur();
    }
});

function checkInputEmpty() {
    if (input.value == "") {
        createError("Email input should not be empty.");
        return true;
    }
    return false;
}

function validateEmail() {
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (reg.test(input.value) == false) {
        createError('Invalid Email !');
        return false;
    }
    return true;
}

function createError(str) {
    err.textContent = str;
    err.classList.remove('hidden');
    input.style.border = '1px solid var(--Light-Red)';
    if (mobileView) {
        input.style.marginBottom = '60px';
    }
}