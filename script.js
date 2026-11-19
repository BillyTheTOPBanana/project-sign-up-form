/*
Really simplistic check for password matching.
Only checks upon submit.
Error message does not go away until the next time the submit button is clicked.  
*/

const submit_button    = document.querySelector('button[form="signup-form"]');
const password         = document.querySelector("#password");
const confirm_password = document.querySelector("#confirm-password");
const error_message    = document.querySelector("#error-message");

submit_button.addEventListener("click", (event) => {
    error_message.textContent = "";
    if (password.value === confirm_password.value)
        return
    
    event.preventDefault();
    error_message.textContent = "Passwords must match.";
} );