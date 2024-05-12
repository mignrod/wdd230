const currentDate = new Date();

document.querySelector('#date').innerHTML = `&copy${currentDate.getFullYear()}`;

let fileModification = new Date(document.lastModified);

document.querySelector('#lastModified').innerHTML = `Last Modification: ${fileModification.toLocaleString('en-US')}`

