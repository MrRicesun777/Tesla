const menuBtn = document.querySelector('.menu-btn');
const menuBtnMobile = document.querySelector('.menu-btn-mobile');
const sidebar = document.querySelector('.sidebar');
const closeBtn = document.querySelector('.close-btn');
const backdrop = document.querySelector('.sidebar-backdrop');
const navbarMenu = document.querySelector('.navbar-menu');

// Initalize on scroll animations
AOS.init();

// add menu click events
menuBtn.addEventListener('click', sidebarOpen);
menuBtnMobile.addEventListener('click', sidebarOpen);

// open sidebar function 

function sidebarOpen() {
    // Show backdrop
    sidebarBackdrop.style.display = "block";
    setTimeout(() => {
        sidebarBackdrop.style.opacity = "1";
    }, 10);

    // Open sidebar
    sidebar.classList.add("sidebar-open");

    // Disable scroll on body
    document.body.classList.add('sidebar-open-body');
}


closeBtn.addEventListener('click', () => {
    // change sidebar position
    sidebar.style.right="-100%";
    // hide backdrop with a smooth transiton
    backdrop.style.opacity="0";
    // hide backdrop after the transition is done
    setTimeout(() => {
        backdrop.style.display= "none";
        sidebar.style.display = "none";
    }, 300);
    // make the body scrollable again
    document.body.classList.remove('sidebar-open-body');
});

// custum scroll event (changing the img)
// get elements from the dom
const text = document.querySelector('.roof-text');
const roofImg = document.querySelector('.banner-img');

// add a scroll event to the document
window.addEventListener('scroll', () => {
    // when the text elemts is animated 
    if (text.classList.contains('aos-animate')) {
        // show the second roof image
        roofImg.classList.add('roof-2');
        // when the aniamtion is removed
    } else{
        // revert back to the first image
    } roofImg.classList.remove('roof-2');
});