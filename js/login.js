//step-1: Add event handler with submit button
document.getElementById('btn-submit').addEventListener('click', function () {
    console.log('Submit Button clicked');
    //get the email address from the input field
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    // console.log(email);

    //get the password from the input field
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    // console.log(password, email);

    //do not check emai and pass on client side
    if (email === '@gmail.com' & password === 'secret') {
        // console.log('valid user');
        window.location.href = 'bank.html';
    }
    else {
        // console.log('INvalid user');
        alert('Bhul')
    }
})