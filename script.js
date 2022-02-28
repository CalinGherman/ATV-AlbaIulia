'use strict';



let galleryImg = document.querySelectorAll('.gallery__img');
const closeModal = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');
let modal = document.querySelector('.modal');
let imgLeft = document.querySelector('.img-left');
let imgRight = document.querySelector('.img-right');
let theIndex = 0;



let displayImg = function(number){
    modal.style.backgroundImage = `url(img/img-gallery-${number + 1}.jpeg)`
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');

    theIndex = number +1 ;
    return theIndex;
}
// for(let i = 0; i<galleryImg.length; i++){
//   galleryImg[i].addEventListener('click', function(){
//       displayImg(i)
//   })
// }
galleryImg.forEach(function(img, i){
img.addEventListener('click', function(){
    displayImg(i);
})
})





imgRight.addEventListener('click', function(){
    if(theIndex < galleryImg.length){
        theIndex++
        modal.style.backgroundImage = `url(img/img-gallery-${theIndex}.jpeg)`;
    }
})

imgLeft.addEventListener('click', function(){
    if(theIndex == 1){
        modal.style.backgroundImage = `url(img/img-gallery-${theIndex}.jpeg)`;
    }else{
        theIndex--;
        modal.style.backgroundImage = `url(img/img-gallery-${theIndex}.jpeg)`;
    }
})


closeModal.addEventListener('click', function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
})

overlay.addEventListener('click', function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
})


//Scrolling to Top


const scrollBtn = document.querySelector('.topButton');
const scrollingTo = document.querySelector('.scroll--to-top');

scrollBtn.addEventListener('click', function(e) {
    e.preventDefault();
    scrollingTo.scrollIntoView({behavior: 'smooth'});
})





