console.log('valami');
console.log('64 =', 64);
let = eredmeny = 15 + 35;
console.log('15 + 35 =', eredmeny);
console.log('15 + 35 =', 50);
console.log('44 / 2 =', 44 / 2);

// ez egy egysoros komment, amit a böngésző figyelmen kívül hagy

/* ez egy többsoros komment
  a böngésző minden sort figyelmen kívül hagy */

//   Változók

// Az előző részben két értéket adtunk meg a parancssoron, majd egy műveletet (+) hajtottunk végre rajtuk. Most a változókról fogunk tanulni.
// Egy változó egy név-érték pár, amit többféleképpen is definiálhatunk, deklarálhatunk. Ezen a workshopon a let utasítást fogjuk használni.

let variable;
console.log(variable);
let otherVariable;
console.log(otherVariable);
// A fenti kódrészletben létrehoztunk két változót, amiknek a neve variable és otherVariable. Jelenleg nincs még nincs érték hozzájuk rendelve.

// Ha szeretnénk értéket rendelni a változóinkhoz, szükségünk lesz az = operátorra:

let myVariable = 5;

// Fontos: Ha megpróbálunk két változót ugyanazzal a névvel létrehozni (újradeklarálás), akkor hibát fogunk produkálni. Hogy ezt elkerüljük, a későbbi esetnél el kell hagyni a let kulcsszót, vagy egy másik nevet kell használnunk.

// Miután egy változót deklaráltunk, bármikor megváltoztathatjuk az értékét az = operátorral:
myVariable = 5;
console.log(myVariable);
myVariable = 15;
console.log(myVariable);
myVariable = 55;
console.log(myVariable);

// Típusok

// Most, hogy már tudjuk, mik azok a változók, vizsgáljuk meg, milyen értékeik lehetnek. Ahogy korábban láttuk, ez lehet például egy szám. Ez elég lehet számunkra? Nem, kivéve ha csak egy számológépet szeretnénk fejleszteni - de mivel egyre bonyolultabb programokat írunk, szükségünk lesz más típusokra is. A JavaScript nyelvben 7 különböző primitív típus áll rendelkezésünkre, de most ezek közül csak 3-ról fogunk tanulni:

// szám (number): bármilyen szám, legyen az egész, vagy tizedes tört
// szöveg (string): bármilyen szöveg, vagy egy különálló karakter
// logikai (boolean): két értéke lehet: igaz vagy hamis

// Logikai

// Kezdjük a legegyszerűbb típussal, ami a logikai (boolean). Ez a típus elég gyakran előfordul és szinte minden programozási nyelvben megtalálható. Csak két lehetséges értéke van: igaz (true) és hamis (false).

let myBoolean = true;
console.log('myBoolean', true);

let myOtherBoolean = false;
console.log('myOtherBoolean', false);

// Operátorok

// Azokat az operátorokat, amiket logikai változókkal használhatunk, logikai operátoroknak (logical operator) nevezzük. Ezek közül a két leggyakoribb a vagy (or) valamint az és (and). Az operátorok által vizsgált értékeket operandusoknak is nevezhetjük.

// és (&&)

// A logikai és változó megértéséhez használjunk igazságtáblát:

console.log('Logikai operátorok, igazságtáblázatok:');
console.log('true && true', true && true);
console.log('true && false', true && false);
console.log('true && true', false && true);
console.log('true && true', false && false);

console.log('true && true && true =', true && true && true);
console.log('true && false && true =', true && false && true);
console.log('true && false && false =', true && false && false);
console.log('false && false && false =', false && false && false);

// vagy (||)

// A logikai vagy nagyon hasonlít az és operátorra. Az eredmény akkor igaz, ha legalább az egyik operandus értéke igaz.

console.log('|| (AltGr-W, "vagy")');

console.log('true || true =', true || true);
console.log('true || false =', true || false);
console.log('false || true =', false || true);
console.log('false || false =', false || false);
console.log('true || true || true =', true || true || true);
console.log('true || false || true =', true || false || true);
console.log('true || false || false =', true || false || false);
console.log('false || false || false =', false || false || false);

// negálás (!)

// A negálás, vagy tagadás, egy unáris művelet, ami azt jelenti, hogy ez egy egyváltozós művelet. Egyszerűen negálja az operandust:

console.log('! (Shift-4, "nem", negálás, tagadás');

console.log('!true =', !true);
console.log('!false =', !false);
// Mit gondolsz, mi lesz a !!true művelet eredménye? Próbáld ki a parancssoron, majd gondold végig, miért ezt az eredményt kaptad!
console.log('!!true =', !!true);
console.log('!!false =', !!false);

// egyenlő (===)

// Az egyenlő operátorral azt vizsgálhatjuk, hogy a két operandus megegyezik-e, vagy sem. Ez az operátor más típusokkal is használható (pl. két szám összehasonlítása), de az eredménye mindig logikai típusú.

console.log('=== (Shift-7, 3-szor, "egyenlő" az értékük és típusuk)');
console.log('== (Shift-7, 2-szer, "egyenlő" az értékük)');

console.log('true === true =', true === true);
console.log('true === false =', true === false);
console.log('false === true =', false === true);
console.log('false === false =', false === false);

console.log('5 === 5 =', 5 === 5);
console.log('5 === 7 =', 5 === 7);

console.log("'alma' === 'alma' =", 'alma' === 'alma');
console.log("'alma' === 'szilva' =", 'alma' === 'szilva');

// Megjegyzés: van egy másik egyenlő operátor (==), ami majdnem ugyanígy működik, de néhány esetben más eredményt ad, mint a ===. Azt ajánljuk, maradjunk a === használatánál.

// nem egyenlő (!==)

// A nem egyenlő operátor az egyenlő operátor ellentéte, azt vizsgálható vele, két érték különbözik-e, vagy sem.

console.log('!== ("nem egyenlő")');

console.log('true !== true =', true !== true);
console.log('true !== false =', true !== false);
console.log('false !== true =', false !== true);
console.log('false !== false =', false !== false);

console.log('5 !== 5 =', 5 !== 5);
console.log('5 !== 7 =', 5 !== 7);

console.log("'alma' !== 'alma' =", 'alma' !== 'alma');
console.log("'alma' !== 'szilva' =", 'alma' !== 'szilva');

// Számok

// Az előző szekcióban már dolgoztunk számokkal. Ezek a változók a negatív végtelen és a pozitív végtelen között bármilyen számot reprezentálhatnak, és bármilyen művelet elvégezhető rajtuk, amit matek órán tanultunk.

// Extra infó: Vannak nyelvek, amikben külön típusok vannak a tört számok reprezentálására, de a JavaScript nem tesz különbséges az egészek és a törtek között.

// Operátorok

// Mint ahogy a matematikában is, a programozásban is többféle műveleteket értelmezünk számokon. Az előző szekcióban láttuk az összeadás operátort (+), most nézzünk meg néhány másikat.

// kivonás (-)

// A kivonás ugyanúgy működik, mint a matekban. Próbáld ki a parancssoron!

console.log('Műveletek (operátorok) számokkal');

console.log('összeadás: 5 + 6 =', 5 + 6);
console.log('kivonás: 5.1 - 6 =', 5.1 - 6);
console.log('szorzás: 5.2 * 6.3 =', 5.2 * 6.3);
console.log('osztás: 10 / 4 =', 10 / 4);
console.log('osztás 0-val: 10 / 0 =', 10 / 0, 'vagyis: "végtelen"');

// modulo (%)

// A modulo, más néven maradékos osztás, kevésbé ismert művelet. A modulóval egy osztály maradékát kapjuk meg.

console.log('osztás maradéka (modulo): 10 % 3 =', 10 % 3);

// Feladatok

// Számold ki az életkorod a parancssor segítségével és tárold el egy age nevű változóban
console.log(
    'Számold ki az életkorod a parancssor segítségével és tárold el egy age nevű változóban!'
);
age = 2021 - 1968;
console.log('age = 2021 - 1961, age =', age);

// Hány évig tartott a Második világháború? Tárold el az eredményt egy ww2 nevű változóban
console.log(
    'Hány évig tartott a második világháború? Tárold el az eredményt egy ww2 nevű változóban!'
);
ww2 = 1945 - 1939;
console.log('ww2 = 1945 - 1939 =', ww2);

// Mennyibe kerül 76 Tesla részvény? Tárold el egy tesla nevű változóban
console.log(
    'Mennyibe kerül 76 Tesla részvény? Tárold el egy tesla nevű változóban!'
);
(tesla = 76 * 711), 13;
console.log('tesla = 76 * 711,13, tesla =', tesla, 'USD');
console.log(
    'forrás: https://www.portfolio.hu/arfolyam/TSLA.CUS/Tesla (2021. 08. 10.)'
);

// Hány másodpercig tart egy nap? Tárold el egy secondsOfDay nevű változóban
secondsOfDay = 60 * 60 * 24;
console.log(
    'secondsOfDay = 60sec * 60min * 24hour, secondsOfDay =',
    secondsOfDay,
    'sec'
);

//----------------------------------------------------------------------------------------------------
// A világ lakosságának hány százaléka magyar állampolgár? Tárold el egy hungarians nevű változóban
console.log(
    'A világ lakosságának hány százaléka magyar állampolgár? Tárold el egy hungarians nevű változóban!'
);
hungarians = (100 * 9731000) / 7854489000;
console.log(
    'hungarians = 100 * 9731000 / 7854489000, hungarians =',
    hungarians,
    '%'
);
console.log(
    'forrás: https://hu.wikipedia.org/wiki/Orsz%C3%A1gok_n%C3%A9pess%C3%A9g_szerinti_list%C3%A1ja (2021. 03. 23.)'
);
// A világ lakosságának hány százaléka magyar állampolgár? Tárold el egy hungarians nevű változóban
console.log(
    'A világ lakosságának hány százaléka magyar állampolgár? Tárold el egy hungarians nevű változóban!'
);
worldegyszazalek = 7854489000 / 100;
hungarians = 9731000 / worldegyszazalek;
console.log(
    '(worldegyszazalek / 100) = (hungarians / worldegyszazalek) =',
    hungarians,
    '%'
);
//-------------------------------------------------------------------------------------------------------

// Mennyivel nagyobb Kína területe, mint Csehországé? Tárold el egy bigger nevű változóban
console.log(
    'Mennyivel nagyobb Kína területe, mint Csehországé? Tárold el egy bigger nevű változóban!'
);
bigger = 9677009 - 78865;
console.log('bigger = 9677009 - 78865, bigger =', bigger, 'négyzetkilométer');
console.log(
    'forrás: https://hu.wikipedia.org/wiki/Orsz%C3%A1gok_ter%C3%BClet_szerinti_list%C3%A1ja'
);

// Ha egy Discord csatornába csak 7 ember fér és összesen 654-en vannak a szerveren, hányan lesznek a legkisebb csatornában? Tárold el egy participants nevű változóban
console.log(
    'Ha egy Discord csatornába csak 7 ember fér és összesen 654-en vannak a szerveren, hányan lesznek a legkisebb csatornában? Tárold el egy participants nevű változóban!'
);
participants = 654 % 7;
console.log(
    'participants = 654 % 7, participants =',
    participants,
    'fő lesz a legkisebb csatornában'
);

// Stringek
console.log(
    'értékadás:',
    "'Shift-1, aposztróf',",
    'vagy',
    '"Shift-2, idézőjel"'
);
console.log(
    'string sablon literál (string template literal): Akkor használjuk, amikor egy konstans (állandó) stringbe változóértéket akarunk beszúrni. Ekkor a konstans stringet a ` és ` (tompa ékezet, AltGr-7) karakterek közé írjuk, a változónevet pedig a ${változónév} módon illesztjük be a stringbe. Példa:'
);

let myString = 'This is a string';
console.log('This is a string', myString);

let name0 = 'Robert';
let greeting0 = `Szevasz ${name0}`;
console.log('Szevasz', name0);
// Légy óvatos, milyen speciális karaktereket használsz: a tompa ékezet karaktert (`) használtuk és a változót a ${...} jelekkel vettük körül.

// Operátorok

// Bár több művelet van, amit stringeken értelmezünk, most ezek közül csak kettővel fogunk foglalkozni.
// Konkatenáció (+)
// A plusz (+) jellel összefűzhetünk/konkatenálhatunk egy stringet egy másik stringgel.

let greetWorld = 'Hello ' + 'World!';
console.log('Hello ' + 'World!', greetWorld);

let name2 = 'Robi';
let greeting = 'Hello ' + name2 + '!';
console.log('Hello + name ', greeting);
// Vegyük észre, hogy a konkatenáció eredménye ugyanaz, mintha string sablon literált használtunk volna. A sablon literál egy viszonylag új nyelvi konstrukció a JavaScriben és használata preferált a konkatenációval szemben.

// Hossz (.length)

// A stringeknek JavaScriptben van egy tulajdonságuk, amire length-ként (hossz)hivatkozhatunk. Ezzel a tulajdonsággal elérhetjük a string karaktereinek számát

let charCount = 'Szevasz'.length;
console.log('Szevasz'.length);

// Mit gondolsz, hány karakterből áll a “Hello world” string? Gondold át, majd nézd meg a parancssorban.
let charCount2 = 'Hello world'.length;
console.log('Hello world'.length);

// Összehasonlítás

// A logikai változókhoz hasonlóan két stringet is összehasonlíthatunk a === operátorok használatával. A művelet eredménye mindig logikai érték, vagyis vagy true, vagy pedig false.

let trueOrFalse = 5 === 5;
console.log('trueOrFalse = 5 === 5', trueOrFalse);

trueOrFalse = 100 < 50;
console.log('trueOrFalse = 100 < 50', trueOrFalse);

trueOrFalse = 'hello' !== 'world';
console.log('trueOrFalse = hello !== world', trueOrFalse);

trueOrFalse = 1 >= 2;
console.log('trueOrFalse = 1 >= 2', trueOrFalse);

trueOrFalse = 'blue'.length === 'green'.length;
console.log('trueOrFalse = blue.length === green.length', trueOrFalse);

trueOrFalse = 3 < 4 && (5 > 6 || 7 < 8);
console.log('trueOrFalse = 3 < 4 && (5 > 6 || 7 < 8)', trueOrFalse);

// (Szorgalmi) Gyengén típusos programozási nyelvek

// A JavaScript egy gyengén típusos programozási nyelv, ami azt jelenti, hogy automatikusan átalakítja az értékeket, hogy értelmes eredménye legyen a műveleteknek.
let result = 'alma' + 5;
console.log('let result = alma + 5 =', result);

let result2 = '122' - 1;
console.log(' let result2 122 - 1 =', result2);
// Továbbá, nem lehetséges egy változó típusát meghatározni. A változók értékének típusát bármikor megváltoztathatjuk, ami nem lehetséges más nyelveknél. Más nyelveknél ha úgy határozol, a myString változó egy string, nem adhatsz neki szám értéket.

// Azonban, míg ez értelmes utasítás a JavaScriptben, használata nem ajánlott:
let myVariable2 = 5;
console.log('let myVariable2 =', myVariable2);
myVariable2 = 'alma';
console.log('let myVariable2 =', myVariable2);

// Adatszerkezetek

// Annak ellenére, hogy már tisztában vagyunk a különböző változó típusokkal és a rajtuk végezhető műveletekkel, még mindig nincs elég eszközünk, hogy komplex rendszereket építsünk, így tovább kell bővíteni ismereteinket. Haladjunk hát tovább és nézzük meg, hogyan tudjuk a primitív típusokat összefűzni komplex adatszerkezetekké.

// Tömb

// A tömb olyan, mint egy sor egymást követő doboz. Mindegyik dobozba tehetünk valamit, majd sorszám (index) alapján elérhetjük a tartalmukat.
let myArray = [2, 5, 6, 2, 22, 133];
console.log('myArray = [2, 5, 6, 2, 22, 133] myArray', myArray);

console.log('myArray = [2, 5, 6, 2, 22, 133] myArray[0]', myArray[0]);
console.log('myArray = [2, 5, 6, 2, 22, 133] myArray[1]', myArray[1]);
console.log('myArray = [2, 5, 6, 2, 22, 133] myArray[2]', myArray[2]);
console.log('myArray = [2, 5, 6, 2, 22, 133] myArray[3]', myArray[3]);
console.log('myArray = [2, 5, 6, 2, 22, 133] myArray[4]', myArray[4]);
console.log('myArray = [2, 5, 6, 2, 22, 133] myArray[5]', myArray[5]);
// Megjegyzés: A tömböket 0-tól indexeljük, így az első elem sorszáma 0.

// Nincs megkötés arra, hogy milyen típusú változókat tárolhatunk egy tömbben; létrehozhatunk string, szám, logikai, vagy akár kevert tömböket is.
let nevsor = ['Robert', 'Ferenc', 'Katalin', 'Andrea'];
console.log('[Robert, Ferenc, Katalin, Andrea] nevsor[0] =', nevsor[0]);
console.log('[Robert, Ferenc, Katalin, Andrea] nevsor[1] =', nevsor[1]);
console.log('[Robert, Ferenc, Katalin, Andrea] nevsor[2] =', nevsor[2]);
console.log('[Robert, Ferenc, Katalin, Andrea] nevsor[3] =', nevsor[3]);

let myOtherArray = [3, 12, true, 'Andrea', 'Ferenc', false];
console.log(
    'myOtherArray = [3, 12, true, Andrea, Ferenc, false] = ',
    myOtherArray
);
// érték elérése sorszám (index) alapján
console.log(
    '[3, 12, true, Andrea, Ferenc, false] myOtherArray[0] =',
    myOtherArray[0]
);
console.log(
    '[3, 12, true, Andrea, Ferenc, false] myOtherArray[1] =',
    myOtherArray[1]
);
console.log(
    '[3, 12, true, Andrea, Ferenc, false] myOtherArray[2] =',
    myOtherArray[2]
);
console.log(
    '[3, 12, true, Andrea, Ferenc, false] myOtherArray[3] =',
    myOtherArray[3]
);
console.log(
    '[3, 12, true, Andrea, Ferenc, false] myOtherArray[4] =',
    myOtherArray[4]
);
console.log(
    '[3, 12, true, Andrea, Ferenc, false] myOtherArray[5] =',
    myOtherArray[5]
);
// érték megváltoztatása
// lecseréli "Andrea"-t "Robert"-re
myOtherArray[3] = 'Robert';
console.log('Érték megváltoztatása>   myOtherArray[3] =', myOtherArray[3]);

console.log(
    '[3, 12, true, Robert, Ferenc, false] myOtherArray[5] =',
    myOtherArray
);

console.log(
    '[3, 12, true, Robert, Ferenc, false] myOtherArray[3] =',
    myOtherArray[3]
);

// "dobozok" száma
console.log('"dobozok" száma');
console.log('kiírja 6 =', myArray.length);

// új "doboz" hozzáadása valamilyen értékkel

myOtherArray.push('Toyota');
console.log('myOtherArray.push(Toyota)', myOtherArray);
console.log('kiírja 7 már eggyel több =', myOtherArray.length);

// Extra Infó: A tömb egy nagyon sokoldalú adatszerkezet, amin sok különböző művelet értelmezett.

// Feladatok
// Hozz létre egy tömböt, amiben különböző neveket tárolsz és mentsd el egy names nevű változóban

let names = ['Robert', 'Laci', 'Zoli'];
console.log('let names = [Robert, Laci, Zoli]', names);

// Nézd meg, a harmadik név hosszabb-e, mint 5 karakter (.length)

names[2].length;
trueOrFalse = names[2].length > 5;
console.log('trueOrFalse = names[2].length > 5', trueOrFalse);

// Adj 1 vagy több új nevet a tömbhöz (.push)
names.push('Gergely', 'Alfonz');
console.log('names.push Gergely, Alfonz');
console.log('let names = [Robert, Laci, Zoli , Gergely, Alfonz', names);
// Cseréld le az első nevet a saját nevedre

console.log('Cseréld le az első nevet');
console.log('names[0] = Robi');
names[0] = 'Robi';
console.log('let names = [Robi, Laci, Zoli , Gergely, Alfonz', names);

// Nézd meg, több, mint 4 elem van-e a tömbben (.length)
console.log('trueOrFalse = names.length > 4');
trueOrFalse = names.length > 4;
console.log('names.length > 4', trueOrFalse);

// Objektum
// Egy objektumra szintén gondolhatunk úgy, mint egy sor dobozra, azzal a különbséggel, hogy itt a dobozokat a nevük, más néven a kulcsuk (key) alapján érhetjük el. Az objektumokat arra használjuk, hogy a programunkban reprezentáljunk velük valódi életbeli entitásokat, például egy facebook posztot, aminek van tartalma (content), szerzője (author), dátuma (date) és persze más, egyéb tulajdonságai is.
let post = {
    author: 'Bill Gates',
    content: 'Online communication will change how companies work',
    date: '2020-04-01 18:06',
};
// az értékek elérésére 2 különböző módszer van
console.log('kiírja  Bill Gates');
console.log(post['author']);
console.log('kiírja  Bill Gates');
console.log(post.author);
// az objektumok dinamikusak, bármikor hozzájuk adhatunk új "dobozokat"
post.likes = 11043;
post.age = 76;
console.log(post.likes);
console.log(post.age);

// Feladatok
// Hozz létre egy objektumot, aminek van egy colors nevű adatmezője (doboza)
// a colors mező (változó) tartalma legyen egy tömb, ami színeket tartalmaz
let colors = ['grey', 'yellow', 'red', 'green', 'blue'];
console.log('[grey, yellow, red, green, blue]', colors);
console.log(colors[0]);
console.log(colors[1]);
console.log(colors[2]);
console.log(colors[3]);
console.log(colors[4]);

// Adj egy új mezőt az objektumhoz, hasManyColors néven
// az értéke legyen true, ha több, mint 3 színt tartalmaz a colors, különben pedig legyen false

if (colors.length > 3) {
    colors.push('hasManyColors');
} else
    console.log(
        'A colors adatmező 3-nál nem több színt tartalmaz. Ezért az első állítás az igaz! Az -else- nem kerül lefutásra! Ha megfordítjuk az állítást -colors.length < 3- az -else- fut le.'
    );
console.log('[grey, yellow, red, green, blue,hasManyColors]', colors);
console.log('(colors[5])- 5.kiiratása');
console.log(colors[5]);
// Megjegyzés: Ezen a kettőn felül rendelkezésünkre áll még több adatszerkezet (data structure) is, de ez a kettő nagyon jó alapot biztosít most számunkra. A legtöbb programozási nyelvben megtalálhatók, bár lehet, nem ugyanezen a néven.
