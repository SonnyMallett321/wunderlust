function checkForm() {
	const fullName = document.getElementById('fullName');
	const email = document.getElementById('email');
	const password = document.getElementById('password');
	const passwordConfirm = document.getElementById('passwordConfirm');
	const formErrors = document.getElementById('formErrors');
	let errors = [];

	formErrors.innerHTML = '';
	fullName.classList.remove('error');
	email.classList.remove('error');
	password.classList.remove('error');
	passwordConfirm.classList.remove('error');
	
	if (fullName.value.trim().length < 1) {
		errors.push('Missing full name.');
		fullName.classList.add('error');
	}

	const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,5}$/;
	if (!emailRegex.test(email.value)) {
		errors.push('Invalid or missing email address.');
		email.classList.add('error');
	}

	if (password.value.length < 10 || password.value.length > 20) {
		errors.push('Password must be between 10 and 20 characters.');
		password.classList.add('error');
	}

	const lowercaseRegex = /[a-z]/;
	if (!lowercaseRegex.test(password.value)) {
		errors.push('Password must contain at least one lowercase character.');
		password.classList.add('error');
	}

	const uppercaseRegex = /[A-Z]/;
	if (!uppercaseRegex.test(password.value)) {
		errors.push('Password must contain at least one uppercase character.');
		password.classList.add('error');
	}

	const digitRegex = /\d/;
	if (!digitRegex.test(password.value)) {
		errors.push('Password must contain at least one digit.');
		password.classList.add('error');
	}

	if (password.value !== passwordConfirm.value) {
		errors.push("Password and confirmation password don't match.");
		passwordConfirm.classList.add('error');
	}

	if (errors.length > 0) {
		formErrors.classList.remove('hide');
		formErrors.innerHTML = '<ul><li>' + errors.join('</li><li>') + '</li></ul>';
	} else {
		formErrors.classList.add('hide');
	}
}

document.getElementById("submit").addEventListener("click", function(event) {
	checkForm();
	// Prevent default form action. DO NOT REMOVE THIS LINE
	event.preventDefault();
});