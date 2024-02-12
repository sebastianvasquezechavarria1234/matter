
var headerBtnActive = document.querySelector("#header__btn__active");

window.onscroll = function () {

    let scroll = document.documentElement.scrollTop;

    if( scroll > 20){
        headerBtnActive.classList.add("active")
    }else if( scroll < 20){
        headerBtnActive.classList.remove("active")
    }
}