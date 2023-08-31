jQuery(document).ready(function($){
    $('.hamburger').click(function(event){
        $('.menu-mob').toggleClass('active');
        $('.header').toggleClass('active');
        $('.main').toggleClass('active');
    });
});