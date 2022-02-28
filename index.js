//Scroll Into view Offers Section
const offers = document.querySelector('.oferta');
const offersBtn = document.querySelector('.info__card-3--button');

offersBtn.addEventListener('click', function(e) {
    e.preventDefault()
    // const coords = offers.getBoundingClientRect();
    offers.scrollIntoView({behaviour: 'smooth'})
})

//Scroll Into view Top Button
const topBtn = document.querySelector('.topButton')
const scrollToTop = document.querySelector('#top');
topBtn.addEventListener('click', function(e) {
    e.preventDefault();

    scrollToTop.scrollIntoView({behaviour: 'smooth'})
})



// Playing videos
const videos = document.querySelectorAll('.index__videos');
const aboutSection = document.querySelector('.about');

aboutSection.addEventListener('click', function(e) {
const clicked = e.target.closest('.index__videos');
if(!clicked.classList.contains('video-playing')){
clicked.classList.add('video-playing');
clicked.play();
}else if(clicked.classList.contains('video-playing')){
    clicked.classList.remove('video-playing');
    clicked.pause();  
}
})

// Come into view as I scroll

const sections = document.querySelectorAll('.section');

const sectionReveal = function(entries, observer){
    entries.forEach(entry => {
        if(!entry.isIntersecting) return;
        entry.target.classList.remove('section--hidden');
        observer.unobserve(entry.target);
    })
}

const sectionObserver = new IntersectionObserver(sectionReveal, {
    root: null,
    thrashold: 0,
    rootMargin: '-100px'
})

sections.forEach(function(section) {
    sectionObserver.observe(section);
    section.classList.add('section--hidden')
})
