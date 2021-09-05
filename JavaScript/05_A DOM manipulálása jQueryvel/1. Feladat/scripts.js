// 1. Feladat

// Hozz létre egy tömböt, ami tartalmazza a saját neved, valamint azon kívül néhány másik nevet is
let nevek = ['Róbert', 'Ferenc', 'Katalin', 'Éva'];
console.log('nevek', nevek);

nevek.forEach((valami) => {
    $('ul').append(`<li>${valami}</li>`);
});

// (Szorgalmi) A saját neved legyen félkövér
$('li').eq(9).css('font-weight', 'bold');

// 2. Feladat
// Folytasd a munkát az előző feladatban használt fájlokkal
// Hozd létre a következő objektumot:
let blokHozzaadas = {
    title: 'Beillesztve JavaScripttel',
    text: 'Ez a blokk a JavaScript jQuery könyvtárával lett beillesztve.',
};

// Adj új tartalmat az oldal végéhez: a title legyen egy fejlécben (pl. <h1>), a text pedig egy bekezdésben (<p>)
$('body').append(`<h1>${blokHozzaadas.title}</h1>`);
$('body').append(`<p>${blokHozzaadas.text}</p>`);
