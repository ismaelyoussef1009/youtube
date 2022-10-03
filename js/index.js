var hamburgerBtn = document.getElementById('tooglebar');
var library = document.getElementById('defaultDisplay');
var explore = document.getElementById('secondDisplay');

hamburgerBtn.addEventListener('click',function(){
    if(library.style.display=='block'){
        library.style.display = 'none';
        explore.style.display = 'block';
    }else{
        library.style.display = 'block';
        explore.style.display = 'none';
    }
})