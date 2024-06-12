const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});
closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});


const persent = document.querySelectorAll('.skills__ratings-persent'),
    lines = document.querySelectorAll('.skills__ratings-line span');

persent.forEach((item, i) => {
    lines[i].style.width = item.innerHTML;
});


// validate так и не поняла, почему он не работает
function valideForm(form){
    $(form).validate({
        rules: {
            name: { 
                required: true,
                minlength: 2
            },
            email: {
                required: true,
                email: true
            }
        }
    });
};

valideForm("#contactsform");