var slideShow = document.querySelector(".slideShow");
var currentIndex = 0;

function changeSlide(){
    
    var listSlide = [
        "image/ListBanner/Slide-3.png",
        "image/ListBanner/Slide4.png",
        "image/ListBanner/Slide-5.png"
    ];

    slideShow.src = listSlide[currentIndex];
    currentIndex++;
    if(currentIndex >= listSlide.length){
        currentIndex = 0;
    }
}
setInterval(changeSlide, 4000); 