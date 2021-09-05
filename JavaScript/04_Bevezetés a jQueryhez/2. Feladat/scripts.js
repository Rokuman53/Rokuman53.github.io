// Hozz létre változókat a következő nevekkel és értékekkel:
// - color: purple
// - number: 10
// - word: cool
let color = 'purple';
let number = 10;
let word = 'cool';

// Változtasd meg az első doboz háttérszínét lilára, ha a color változó értéke purple

$('.elso').css('background', color);

// Változtasd meg a második HTML elem szövegét az alábbi kritérium alapján:
// - ha a number nagyobb, mint 100: wow, de nagy szám
// - különben: ez csak egy közönséges szám

if (number > 100) {
    $('.masodik').html('Wow, de nagy szám!');
} else {
    $('.masodik').html('Ez csak egy közönséges szám.');
}

// Változtasd meg a harmadik elem szövegét arra, hogy A DOM Ereje, ha a word értéke az, hogy cool, különben pedig változtasd meg erre a negyedik elem szövegét

if (word === 'cool') {
    $('.harmadik').html('A DOM ereje!');
} else {
    $('.negyedik').html('A DOM erje!');
}
