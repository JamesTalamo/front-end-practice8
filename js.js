let burgerMenu = document.querySelector('.burger-menu');
let burgx = document.querySelector('#menu-x-button');

burgerMenu.addEventListener('click', (event) => {
    event.preventDefault();
    let body = document.querySelector('body');
    let burgNav = document.querySelector('.burger-menu-click');

    if(window.innerWidth <= 1060){
        body.style.overflow='hidden';
        burgNav.style.display = 'flex';
    }
})

burgx.addEventListener('click',(event) => {
    let body = document.querySelector('body');
    let burgNav = document.querySelector('.burger-menu-click');
        body.style.overflow='scroll';
        burgNav.style.display = 'none';
});

let svp1 = document.querySelector('#small-svp-nav1');
let svp2 = document.querySelector('#small-svp-nav2');
let svp3 = document.querySelector('#small-svp-nav3');

svp1.addEventListener('click', (event)=> {
    event.preventDefault();
    let circleTop = document.querySelector('.content3-svp-circletop');
    let name = document.querySelector('.content3-svp-names');

    circleTop.style.backgroundImage = 'url("images/avatar-anisha.png")';
    circleTop.style.backgroundPosition ='center';
    circleTop.style.backgroundSize ='cover';

    name.textContent='Anisha Li'
});

svp2.addEventListener('click', (event)=> {
    event.preventDefault();
    let circleTop = document.querySelector('.content3-svp-circletop');
    let name = document.querySelector('.content3-svp-names');

    circleTop.style.backgroundImage = 'url("images/avatar-ali.png")';
    circleTop.style.backgroundPosition ='center';
    circleTop.style.backgroundSize ='cover';

    name.textContent='Ali bravo'
});

svp3.addEventListener('click', (event)=> {
    event.preventDefault();
    let circleTop = document.querySelector('.content3-svp-circletop');
    let name = document.querySelector('.content3-svp-names');
    
    circleTop.style.backgroundImage = 'url("images/avatar-richard.png")';
    circleTop.style.backgroundPosition ='center';
    circleTop.style.backgroundSize ='cover';

    name.textContent='Richard Watts'
});