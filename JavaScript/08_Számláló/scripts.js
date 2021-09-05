let = szam = 0;
$('#plus1').on('click', () => {
    szam += 1;
    $('h2').text(szam);
});
$('#minus1').on('click', () => {
    szam -= 1;
    $('h2').text(szam);
});
