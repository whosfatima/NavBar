const button= document.querySelector('button')
const togle = document.querySelector('.underHeader');

button.onclick = () => {
    togle.classList.toggle('hidden');
}