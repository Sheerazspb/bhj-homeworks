let tabs = document.querySelectorAll('.tab');
let tabContent = document.querySelectorAll('.tab__content');

for (let tab of tabs) {
    tab.addEventListener('click', change)
}

function change(event) {

    for (let tab of tabs) {
        tab.className = 'tab';
    }
    event.target.className = 'tab tab_active';

    for (let article of tabContent) {
        article.className = 'tab__content';
    }
    let index = Array.from(tabs).indexOf(event.target);
    tabContent[index].className = 'tab__content tab__content_active';
}