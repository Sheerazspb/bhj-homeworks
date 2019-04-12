let holes = document.getElementsByClassName('hole');
let dead = document.getElementById('dead');
let lost = document.getElementById('lost');


for (let hole of holes) {
    hole.onclick = function () {
        hole.classList.contains('hole_has-mole') ? dead.innerText++ : lost.innerText++;
        if (dead.innerText == 10) {
            alert('You have won 🏅');
            dead.innerText = 0;
            lost.innerText = 0;
        } else if (lost.innerText == 5) {
            alert('You have lost 😱');
            dead.innerText = 0;
            lost.innerText = 0;
        }
    }
}