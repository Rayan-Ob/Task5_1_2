

var indexValue =1;
showslide(indexValue);

function currentSlide(e){
    showslide(indexValue =e);
}

function plusSlides(e){
    showslide(indexValue +=e);
}

function showslide(n){
    let i;
    const slides =document.querySelectorAll('.slide');
    //const dots = document.querySelectorAll('.dot')

    if(n > slides.length){
        indexValue=1;
    }

    if( n<1){
        indexValue=slides.length;
    }

    for(i=0; i < slides.length ; i++){
        slides[i].style.display = "none";
    }

slides[indexValue-1].style.display="block";

}