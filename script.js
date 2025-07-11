const button= document.querySelector('button')
const togle = document.querySelector('.underHeader');

button.onclick = () => {
    if(togle.classList.contains('hidden')) {
        button.innerText='close menu'
    } else {
        button.innerText='open menu'
    }
    togle.classList.toggle('hidden');
}