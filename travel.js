let searchBtn=document.querySelector('#search-btn');
let searchBar=document.querySelector('.search-bar-container');

//login btn
let formBtn=document.querySelector('#login-btn');
let loginForm=document.querySelector('.login-form-container');
let formClose=document.querySelector('#form-closer');

// menu bar in small device
let menu=document.querySelector('#menu-bar');
let navbar=document.querySelector('.options');

let videoBtn=document.querySelectorAll('.vid-btn');


window.onscroll=()=>{
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');

    menu.classList.remove('fa-times');
    navbar.classList.remove('active');

    loginForm.classList.remove('active');
}

// nav bar functionality
searchBtn.addEventListener('click',()=>{
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
})

// login btn functionality
formBtn.addEventListener('click',()=>{
    loginForm.classList.add('active');
})
formClose.addEventListener('click',()=>{
    loginForm.classList.remove('active');
})

// menu bar 
menu.addEventListener('click',()=>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
})


videoBtn.forEach(btn =>{
    btn.addEventListener('click',()=>{
        document.querySelector('.controls .active').classList.remove('active');
        btn.classList.add('active');
        let source=btn.getAttribute('data-src');
        document.querySelector('#video-slider').src=source;
    })
})

