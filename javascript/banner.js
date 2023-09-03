var slideShow = document.querySelector(".slideShow");
var currentIndex = 0;

function changeSlide(){
    
    var listSlide = [
        "image/ListBanner/Banner-website-2.png",
        "image/ListBanner/Banner-website-3.png",
        "image/ListBanner/Banner-website-4.png",
        "image/ListBanner/Banner-website-5.png",
        "image/ListBanner/Banner-website-6.png",
        "image/ListBanner/Banner-website-7.png",
        "image/ListBanner/Banner-website-8.png",
        "image/ListBanner/Banner-website-9.png",
    ];

    slideShow.src = listSlide[currentIndex];
    currentIndex++;
    if(currentIndex >= listSlide.length){
        currentIndex = 0;
    }
}
setInterval(changeSlide, 4000); 