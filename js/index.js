// this is the style to toggle active classes
// first we  need to collect all elements we want. These elements are like the people we want to work wit.

var mainBody = document.querySelector('.main_body'); // here i have collected the body tag/element
var hamburgerBtn = document.getElementById('tooglebar');
var library = document.getElementById('defaultDisplay');
var explore = document.getElementById('secondDisplay');
var videos = document.getElementById("videos_container");//ismael
var filter = document.getElementById("scroll_containers");//ismael


hamburgerBtn.addEventListener('click',function(){
    hamburgerBtn.classList.toggle("active");
    mainBody.classList.toggle("active");
    blackDiv.classList.toggle("active");
    if(library.style.display=='block'){
        library.style.display = 'none';
        explore.style.display = 'block';

        videos.style.width = '92%';//ismael
        videos.style.left = '8%'//ismael
        filter.style.width = '92%';
        filter.style.left = '8%'
    }else{
        library.style.display = 'block';
        explore.style.display = 'none';

        videos.style.width = '83%';//ismael
        videos.style.left = '17%'//ismael
        filter.style.width = '92%';
        filter.style.left = '17%';
    }
})

// SCROLLBAR LOGIC
var left_button_container = document.getElementById('left-button-container');
var right_button_container = document.getElementById('right-button-container');

var left_marketing_button = document.getElementById('left-marketing-btn');
var right_marketing_button = document.getElementById('right-marketing-btn');


var filters_scroll = document.getElementById('filters');

var scroll_bar_width = filters_scroll.offsetWidth;
// var scroll_bar_width2 = filters_scroll.clientWidth;
// console.log(scroll_bar_width)
// console.log(scroll_bar_width2)
// scroll_container.scrollLeft = 50;

console.log(filters_scroll.scrollLeft);
// console.log(filters_scroll.scrollLeftMax);

if(filters_scroll.scrollLeft == 0){
    console.log('true');
    left_button_container.style.display = 'none';
    
}


filters_scroll.addEventListener('scroll', function(){
    console.log(filters_scroll.scrollLeft);

    if(filters_scroll.scrollLeft == 0){
        console.log('true');
        left_button_container.style.display = 'none';
    }

    if(filters_scroll.scrollLeft !== 0){
        left_button_container.style.display = 'block';
    }

    if(filters_scroll.scrollLeft > 800){
        console.log('passed')
        right_button_container.style.display = 'none';
    }

    else {
        right_button_container.style.display = 'block';
    }
    
});

left_marketing_button.addEventListener('click', function(){
    console.log('btn-clicked');
    filters_scroll.scroll ({
        left: filters_scroll.scrollLeft + -377,
        behavior: "smooth"
    });

})

right_marketing_button.addEventListener('click', function(){
    console.log('btn-right-clicked');
    // filters_scroll.scrollLeft = 376;
    filters_scroll.scroll ({
        left: filters_scroll.scrollLeft + 377,
        behavior: "smooth"
    });

})

