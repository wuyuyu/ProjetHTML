$(document).ready(function () {
    $('.boutonNavigation').click(function () {
        $(this).find('.barre').toggleClass('black');
        $('.navigation').toggleClass('isOpen');
    });
});