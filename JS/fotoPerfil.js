const avatarInput = document.querySelector('#avatarInput');
const avatarName = document.querySelector('.input-file__name');
const imagePreview = document.querySelector('.image-preview');

avatarInput.addEventListener('change', e => {
	let input = e.currentTarget;
	let fileName = input.files[0].name;
	avatarName.innerText = `File: ${fileName}`;

	const fileReader = new FileReader();
	fileReader.addEventListener('load', e => {
		let imageData = e.target.result;
		imagePreview.setAttribute('src', imageData);
	})

	fileReader.readAsDataURL(input.files[0]);
});