let counter = document.getElementById("clicker__counter");
let cookie = document.getElementById("cookie");

cookie.onclick = function () {
    counter.innerText++;
    let click = counter.innerText;
    if (click % 2 === 0) {
        cookie.width = 200;
    } else {
        cookie.width = 300;
    }
};