// const btn = document.querySelector('.hamburger')
// const menu = document.querySelector('.nav-mobile')


// function showMenu (){
//     menu.classList.toggle('nav-active')
// }

// btn.addEventListener('click', showMenu);
const navMobile = document.querySelector('.nav-mobile');
const navBtn = document.querySelector('.hamburger');



const handleNav = () => {
    navBtn.classList.toggle('is-active');
    navMobile.classList.toggle('nav-mobile--active');

}




navBtn.addEventListener('click', handleNav);