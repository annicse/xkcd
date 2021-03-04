import Xkcd from './xkcd';
document.addEventListener("DOMContentLoaded", function() {
    Xkcd.init();
    Xkcd.getComicByID( Math.floor(Math.random() * 1000) + 1 );
})