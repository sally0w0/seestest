$(function () {

let swipeOption = {
    speed: 1000,
    loop: true,
    slidesPerView: 1.3,
    slidesPerGroup: 2,
    initialSlide: 1,
    spaceBetween: 15,
    centeredSlides : true,
    autoplay: {
        delay: 3000,
    },
    speed: 1500, 
    breakpoints: {
        768: {
            spaceBetween: 30,
            slidesPerView: 3.5
        }
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    }
}
new Swiper('.swiper-container', swipeOption);

});
