const fechar = document.querySelector('.fechar');
const popup = document.querySelector('.popup');
const container = document.querySelector('.container');


fechar.addEventListener('click', function(e) {
    container.removeChild(popup);
}); 