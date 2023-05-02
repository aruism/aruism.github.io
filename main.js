window.addEventListener('DOMContentLoaded', () => {
	const form = document.querySelector('form');
	if (form) {
		form.onsubmit = function(event) {
		    event.preventDefault();
			title = document.querySelector('#title').value;
			message = document.querySelector('#message').value;
		    if (title.length == 0 || message.length == 0){
		    	alert('Try again! All fields must be filled');
		    } else {
		    	alert('Message sent successfully!');
		    }
		}
	}
});