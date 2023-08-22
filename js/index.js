const hiddenImg1 = document.querySelector('.block-1');
const hiddenImg2 = document.querySelector('.block-2');
const hiddenImg3 = document.querySelector('.block-3');
const hiddenImg4 = document.querySelector('.block-4');
const photo1 = document.querySelector('.photo-1');
const photo2 = document.querySelector('.photo-2');
const photo3 = document.querySelector('.photo-3');
const photo4 = document.querySelector('.photo-4');

hiddenImg1.addEventListener('click', onHiddenImgClick1);

function onHiddenImgClick1 () {
    photo1.classList.remove('absolute');
    hiddenImg1.classList.add('hidden');
}

hiddenImg2.addEventListener('click', onHiddenImgClick2);

function onHiddenImgClick2 () {
    photo2.classList.remove('absolute');
    hiddenImg2.classList.add('hidden');
}

hiddenImg3.addEventListener('click', onHiddenImgClick3);

function onHiddenImgClick3 () {
    photo3.classList.remove('absolute');
    hiddenImg3.classList.add('hidden');
}

hiddenImg4.addEventListener('click', onHiddenImgClick4);

function onHiddenImgClick4 () {
    photo4.classList.remove('absolute');
    hiddenImg4.classList.add('hidden');
}