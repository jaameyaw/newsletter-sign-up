// Regex Pattern: /^[a-zA-Z][a-zA-Z0-9\-\_\.]+@[a-zA-Z0-9]{2,}\.[a-zA-Z0-9{2,}$/

let invalidEmail = document.querySelector('.error-msg');
let input = document.querySelector('input');
let newsletterBtn = document.querySelector('.newsletter-btn');
let emailDomain = 'com';
let main = document.querySelector('main');
let userEmail = document.querySelector('.useremail')
let appreciationPage= document.querySelector('.appreciationPage');
let mailRegex = /^[a-zA-Z][a-zA-Z0-9\-\_\.]+@[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}$/;


function checker () {
    if (input.value.match(mailRegex) && input.value.slice(-3) === emailDomain ) {
        input.style.border = '1px solid #2ecc71';
        input.style.color = 'black';
        input.style.backgroundColor = 'transparent';
        invalidEmail.style.display = 'none';
    } else {
        input.style.color = 'black';
        input.style.border = '1px solid hsl(231, 7%, 60%)';
        input.style.backgroundColor = 'white';
        invalidEmail.style.display = 'none';
    }
}

const subscribeForm = function () {
    if (input.value.match(mailRegex) && input.value.slice(-3) === emailDomain ) {
        main.classList.add('hide');
        appreciationPage.classList.remove('hide');
        userEmail.textContent = input.value;
    }
 
    else if (input.value === "") {
        input.placeholder = 'Please enter your email';
        input.style.border = '1px solid #ff2851';
    }
 
    else {
        invalidEmail.style.display = 'inline';
        input.style.color = '#ff2851';
        input.style.backgroundColor = 'rgba(255, 98, 87, 0.2)';
        input.style.border = '1px solid #ff2851';
    }
}

newsletterBtn.addEventListener('click', subscribeForm)

// handle 'Enter' key;
document.addEventListener ("keydown", function (e) {
    if (e.key === 'Enter') {
        subscribeForm();
    }
})