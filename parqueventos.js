const slideIndices = {
    mySlides1: 1
};
function showSlides(slideClass){
    const slides = document.getElementsByClassName(slideClass);
    if(slideIndices[slideClass] > slides.length){
        slideIndices[slideClass] = 1;
    }
    if(slideIndices[slideClass] < 1){
        slideIndices[slideClass] = slides.length;
    }
    for(let i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }
    slides[slideIndices[slideClass] - 1].style.display = "block";
}
function changeSlide(n){

    slideIndices["mySlides1"] += n;

    showSlides("mySlides1");
}
showSlides("mySlides1");