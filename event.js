// Navigation Bar 
const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar){
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if (close){
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}


// 5 Validations - Event Page
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById('event-form');
    const fullName = document.getElementById("fullname");
    const email = document.getElementById("email");
    const dob = document.getElementById("dob");
    const genderOptions = document.getElementsByName("gender");
    const terms = document.querySelector("input[name='terms']");

    form.addEventListener('submit', e => {
        e.preventDefault();
        validateInputs();
    });

    const setError = (element, message) => {
        const inputControl = element.closest('.input-control');
        const errorDisplay = inputControl.querySelector('.error');

        if (errorDisplay) {
            errorDisplay.innerText = message;
        }

        inputControl.classList.add('error');
        inputControl.classList.remove('success')
    }

    const setSuccess = element => {
        const inputControl = element.closest('.input-control');
        const errorDisplay = inputControl.querySelector('.error');

        if (errorDisplay) {
            errorDisplay.innerText = '';
        }

        inputControl.classList.add('success');
        inputControl.classList.remove('error');
    };

    const validateInputs = () => {
        const fullNameValue = fullName.value.trim();
        const emailValue = email.value.trim();
        const dobValue = dob.value;
        let genderSelected = false;

        for (let i = 0; i < genderOptions.length; i++) {
            if (genderOptions[i].checked) {
                genderSelected = true;
                break;
            }
        }

        const termsCheckedValue = terms.checked;

        let formIsValid = true;

        if(fullNameValue === '') {
            setError(fullName, 'Full name is required');
            formIsValid = false;
        } else if (!fullNameValue.includes(' ')) {
            setError(fullName, 'Full name must be at least 2 words');
            formIsValid = false;
        } else if (fullNameValue.length < 5) {
            setError(fullName, 'Full name must be at least 5 characters long');
            formIsValid = false;
        }
        else {
            setSuccess(fullName);
        }

        if(emailValue === '') {
            setError(email, 'Email is required');
            formIsValid = false;
        } else if (!emailValue.endsWith("@gmail.com")) {
            setError(email, 'Email must use Gmail account');
            formIsValid = false;
        } else {
            setSuccess(email);
        }

        if(dobValue === '') {
            setError(dob, 'Date of birth is required');
            formIsValid = false;
        } else {
            const dobDate = new Date(dobValue);
            const today = new Date();
            const age = today.getFullYear() - dobDate.getFullYear();
            const monthDiff = today.getMonth() - dobDate.getMonth();
            
            if (
                age < 18 ||
                (age === 18 && monthDiff < 0) ||
                (age === 18 && monthDiff === 0 && today.getDate() < dobDate.getDate())
            ) {
                setError(dob, 'You must be at least 18 years old');
                formIsValid = false;
            } else {
                setSuccess(dob);
            }
        }

        if(!genderSelected) {
            setError(genderOptions[0].parentElement.parentElement, 'Gender is required');
            formIsValid = false;
        } else {
            setSuccess(genderOptions[0]);
        }

        if(!termsCheckedValue) {
            setError(terms.parentElement.parentElement, 'You must agree to the term');
            formIsValid = false;
        } else {
            setSuccess(terms.parentElement.parentElement);
        }

        if (formIsValid) {
            alert('Form submitted successfully!');
            form.submit(); 
        }
    };
});