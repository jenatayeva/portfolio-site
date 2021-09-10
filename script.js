// DOM - Document object model - html bn ishleshilyan yer
//html den tag saylamak
const hamburg = document.querySelector('.hamburg');
const link = document.querySelector('.link');

// java.s eventlary documentlery hereketlendirmek ucin
// click eden yagdaymyzda onclick func ishletmek un
hamburg.addEventListener('click', onClick);

function onClick() {
    if (link.style.display === 'none') {
        link.style.display = "flex";
    } else {
        link.style.display = "none";
    }
}