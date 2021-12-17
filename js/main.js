
const navMobile = document.querySelector('.nav-mobile');
const navBtn = document.querySelector('.hamburger');
const cardArtist = document.querySelector('.aboutus__img');
const cardArtistRight = document.querySelector('.aboutus__img--right');
const cardText = document.querySelector('.aboutus__text');
const cardTextRight = document.querySelector('.aboutus__text--right');



const handleNav = () => {
    navBtn.classList.toggle('is-active');
    navMobile.classList.toggle('nav-mobile--active');
}
const cardTextHide = () => {
    cardText.classList.toggle('aboutus__text-active');
    cardArtist.classList.toggle('aboutus__img-active');
    cardTextRight.classList.remove('aboutus__text-active--right');
    cardArtistRight.classList.remove('aboutus__img-active');
}
const cardTextHideRight = () =>{
    cardTextRight.classList.toggle('aboutus__text-active--right');
    cardArtistRight.classList.toggle('aboutus__img-active');
    cardText.classList.remove('aboutus__text-active');
    cardArtist.classList.remove('aboutus__img-active');
}



navBtn.addEventListener('click', handleNav);
cardArtist.addEventListener('click', cardTextHide);
cardArtistRight.addEventListener('click', cardTextHideRight);