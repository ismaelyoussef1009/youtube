var hamburgerBtn = document.getElementById('tooglebar');
var library = document.getElementById('defaultDisplay');
var explore = document.getElementById('secondDisplay');
var videos = document.getElementById("videos_container");//ismael
var filter = document.getElementById("scroll_containers");//ismael

hamburgerBtn.addEventListener('click',function(){
    if(library.style.display=='block'){
        library.style.display = 'none';
        explore.style.display = 'block';
        videos.style.width = '92%';//ismael
        videos.style.right = '25%'//ismael
    }else{
        library.style.display = 'block';
        explore.style.display = 'none';
        videos.style.width = '83%';//ismael
    }
    //ismael comment.
    // let moving = document.getElementById("videos_container");
    // if (moving.style.left == "83%") {
    //    moving.style.right = "92%";
    // } else {
    //    moving.style.left = "83%";
    // }
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