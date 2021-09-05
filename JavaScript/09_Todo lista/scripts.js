$(function () {
    $('#hozzaad').click(() => {
        let lista = $('#bevitel').val();
        $('ol').append(
            `<li><span>${lista}</span> <button class="kihuz">Kihúzni</button></li>`
        );
        $('.kihuz').click((event) => {
            $(event.target.parentElement).css(
                'text-decoration',
                'line-through'
            );
        });
    });
});
