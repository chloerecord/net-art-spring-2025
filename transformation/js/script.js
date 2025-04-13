$(document).on('keydown', function () {
    $('body').addClass('transformed');

    // Generate random floating decorations
    for (let i = 0; i < 30; i++) {
        const symbol = Math.random() > 0.5 ? '⭐' : '💖';
        const size = Math.floor(Math.random() * 20 + 20) + 'px';
        const top = Math.random() * 100 + '%';
        const left = Math.random() * 100 + '%';

        const $el = $('<div></div>')
            .addClass(symbol === '⭐' ? 'star' : 'heart')
            .text(symbol)
            .css({ top, left, fontSize: size });

        $('.decorations').append($el);
    }
});
