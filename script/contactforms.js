let validate = () => {
	let name = document.getElementById('contactName');
	if (name.value.length != 0) {
		name.classList = "form-control";
		document.getElementById('contactNameFeedback').classList = "d-none text-danger";
	} else {
		name.classList = "form-control is-invalid";
		document.getElementById('contactNameFeedback').classList = "text-danger";
	}
	
	let email = document.getElementById('contactEmail');
	if (email.value.length != 0) {
		email.classList = "form-control";
		document.getElementById('contactEmailFeedback').classList = "d-none text-danger";
	} else {
		email.classList = "form-control is-invalid";
		document.getElementById('contactEmailFeedback').classList = "text-danger";
	}
	
	let subject = document.getElementById('contactSubject');
	if (subject.value.length != 0) {
		subject.classList = "form-control";
		document.getElementById('contactSubjectFeedback').classList = "d-none text-danger";
	} else {
		subject.classList = "form-control is-invalid";
		document.getElementById('contactSubjectFeedback').classList = "text-danger";
	}
	
	let message = document.getElementById('contactMessage');
	if (message.value.length != 0) {
		message.classList = "form-control";
		document.getElementById('contactMessageFeedback').classList = "d-none text-danger";
	} else {
		message.classList = "form-control is-invalid";
		document.getElementById('contactMessageFeedback').classList = "text-danger";
	}

	if (document.querySelectorAll('.is-invalid').length === 0) window.location.reload();
}