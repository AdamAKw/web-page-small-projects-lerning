const search = document.querySelector('.search');
const button = document.querySelector('.btn');
const input = document.querySelector('.input');
button.addEventListener('click', () => {
        let isActive = search.classList.toggle('active');
        
        if (isActive === true) {
            input.focus();
        } else {
            input.blur();
        }
});
