// Események és eseményfigyelők

// Eddig megtanultuk, hogyan készíthetünk egy egyszerű weboldalt néhány elemmel és azt, hogy hogyan változtathatjuk meg a tartalmát betöltés után. Ez kezdésnek jó, de van még hova fejlődni. Lehet, hogy a felhasználó valami olyan műveletet szeretne végrehajtani, amit ezzel a tudással nem tudunk lefedni. Például történjen valami egy gomb megnyomása után, mentsük el az adatait regisztráció után, vagy lehessen a tartalmat kedvelni/megosztani.

// Itt lesz szükségünk az eseményekre (event). Az események olyan akciók, amiket a felhasználó vezérel, mi pedig valahogy válaszolni szeretnénk rájuk. Szerencsére ebben segítségünkre lesz a jQuery, aminek a segítségével viszonylag egyszerű az események figyelése:

// 1. Feladat
// Készíts egy weboldalt
// Adj egy gombot az oldal body eleméhez
// Illeszd be a jQuery-t
// Írj egy scriptet a body végén:
// rendelj egy eseményfigyelőt (event listener) a gombhoz
// írd ki az “Igen, most rámkattintottál” üzenetet a parancssorra (console), mikor a felhasználó rákattint a gombra

$('#button1').on('click', () => {
    console.log('Igen, most rámkattintottál!');
}); //Csak konzol alatt látszik

// 2. Feladat

// Adj egy másik gombot is a weboldalhoz
// Mikor a felhasználó rákattint a második gombra, változtasd meg az első gomb feliratát

$('#button2').click(() => {
    $('#button1').text('Ezt írtam át!');
});

// 3. Feladat

// Adj egy harmadik gombot a weboldalhoz
// Mikor a felhasználó rákattint erre a gombra, változtasd meg mindhárom gomb háttérszínét

$('#button3').click(() => {
    $('button').css('background-color', 'yellow');
});

// Adj új funkciókat az eseményfigyelőidhez
// 1. Feladat

// Adj egy beviteli mezőt az előző weboldaladhoz!
// Az elem alapértelmezett (default) értéke legyen “blue”
// Mikor a felhasználó rákattint az utolsó gombra:
// a beviteli mező értéke legyen kiolvasva,
// a gomb háttérszíne (background-color) legyen megváltoztatva a megadott színre!
// Próbáld ki, működik-e különböző színekkel!

$('#button3').click(() => {
    $('#button2').css('background', 'red');
    $('#button1').css('background', 'lime');
    $('#input1').text();
    $('#input1').css('background', 'grey');
    let kiolvas = document.getElementById('input1').value;
    console.log('Kiolvasás ererdménye = ', kiolvas);
});
