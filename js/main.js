
const navMobile = document.querySelector('.nav-mobile');
const navBtn = document.querySelector('.hamburger');
const head = document.querySelector('.before__box-head');
const headingBox = document.querySelector('.before__box');
const imgUp = document.querySelector('.before__box-img--up');
const imgDown = document.querySelector('.before__box-img--down');




const handleNav = () => {
    navBtn.classList.toggle('is-active');
    navMobile.classList.toggle('nav-mobile--active');
}
function show (){
     imgUp.classList.toggle('before__box-img--up-hide');
     imgDown.classList.toggle('before__box-img--down-show');
    headingBox.classList.toggle('before__box-show');
}



navBtn.addEventListener('click', handleNav);
head.addEventListener('click', show);
