var slide= document.querySelector('.slideshow');
var images = [
    'img1.png',
    'img2.png',
    'img3.png',
];
var time = 2000;
var count = 0; 
 
function moveSlideshow() {
    slide.src = images[count];
    
    if( count < images.length - 1){
        count++;
    }else {
        count = 0;
    
}

    setTimeout("moveSlideshow()", time);
}

window.onload = moveSlideshow;