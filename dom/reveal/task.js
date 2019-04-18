let reveal = document.querySelectorAll('.reveal');

function show(event) {

    let viewportHeight = window.innerHeight;

    for (let element of reveal) {

        let elementTop = element.getBoundingClientRect().top;
        if (elementTop < viewportHeight) {
            element.classList.add('reveal_active');
        } else {
            element.classList.remove('reveal_active');
        }
    }
}

document.addEventListener('scroll', show);