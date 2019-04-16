let mainModel = document.querySelector('#modal_main');
let closeModel = document.querySelectorAll('div.modal__close');
let showSuccess = document.querySelector('.show-success');
let successModel = document.querySelector('#modal_success');

mainModel.className = 'modal modal_active';

closeModel[0].onclick = function () {
    mainModel.className = 'modal';
};

showSuccess.onclick = function () {
    successModel.className = 'modal modal_active';
};

closeModel[1].onclick = function () {
    mainModel.className = 'modal';
    successModel.className = 'modal';
};