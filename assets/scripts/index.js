const button = document.querySelector('#register');
const form = document.querySelector('#registration');
const popup = document.querySelector('.popup');
const close = document.querySelector('form>article>img')

button.addEventListener('click', () => {
    form.classList.add('open');
    popup.classList.add('popup_open');
});

close.addEventListener('click', () => {
    form.classList.remove('open');
    popup.classList.remove('popup_open');
});