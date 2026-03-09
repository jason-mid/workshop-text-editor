// Simple Text Editor

function saveText() {
    const text = document.getElementById('editor').value;
    localStorage.setItem('savedText', text);
}

function loadText() {
    const text = localStorage.getItem('savedText');
    document.getElementById('editor').value = text || '';
}

document.getElementById('saveButton').addEventListener('click', saveText);
window.addEventListener('load', loadText);
