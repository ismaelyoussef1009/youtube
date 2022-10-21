var blackDiv = document.querySelector('.black');
var mobileHamburger = document.querySelector('.mobile_hamburger');
mobileHamburger.addEventListener('click', function(){
    mobileHamburger.classList.toggle("active");
    mainBody.classList.toggle("active");
    blackDiv.classList.toggle("active");
});

// blackDiv.addEventListener('click', function(){
//     blackDiv.classList.toggle("active");
//     if(blackDiv.style.display == 'none'){
//         blackDiv.style.display = 'block';
//     }else{
//         blackDiv.style.display = 'none';
//     }
    
// });