// Építőelemek
// A programozásnak három építőeleme van, amik segítségével bármilyen alkalmazás megvalósítható. Ezek közül az egyiket, az értékadást, már ismerjük:
let valtozo = 15;
let variable = 12; // ez egy értékadás

// Feltétel és elágazás
// Az elágazásokkal elérhetjük, hogy a kódunk egy része csak bizonyos feltételek mellett hajtódjon végre. Az if (ha) utasítás segítségével meghatározhatjuk mind a kódrészletet, mind a feltételt.
let myVariable = false;
console.log('let myVariable = false');
console.log('if (myVariable === true)');
if (myVariable === true) {
    console.log('A feltétel igazra lett kiértékelve');
}
// Ha a fenti kódot parancssorban, vagy egy weboldalon futtatod, nem fogsz semmi eredményt látni. Mit kell megváltoztatnod ahhoz, hogy lásd a kívánt kimenetet a parancssorban?     nem egyenlő (!==)
console.log('let myVariable = false');
console.log('if (myVariable !== true)');
if (myVariable !== true) {
    console.log('A feltétel igazra lett kiértékelve');
}
// Az if utasítás emellett más funkcionalitásokkal is bír. Például az else utasítás segítségével megadhatjuk, milyen kódrészlet hajtódjon végre akkor, ha a feltétel hamisra lett kiértékelve.
let a = 7;
if (a < 5) {
    console.log(a / 2);
} else {
    console.log(a * 2); //kimenet 14
}

if (a > 5) {
    console.log(a / 2); //kimenet 3.5
} else {
    console.log(a * 2);
}
// Kérdések:
// Milyen eredményt kapsz, ha lefuttatod a fenti kódrészletet?
// Mit kellene megváltoztatnod ahhoz, hogy a parancssorra kiírt eredmény 1 legyen?
console.log(
    'Mit kellene megváltoztatnod ahhoz, hogy a parancssorra kiírt eredmény 1 legyen?'
);
a = 2;
if (a < 5) {
    console.log(a / 2);
} else {
    console.log(a * 2);
}
console.log('Ciklusok');
// Ciklusok
// Előfordul, hogy egy bizonyos kódrészlet többször is végre szeretnénk hajtani. Gondoljunk például arra, amikor egy könyvespolcról át szeretnénk pakolni a könyveket egy másik polcra:
// megfogjuk az egyik könyvet,
// áttesszük a másik polcra,
// elengedjük a könyvet
// Ezt mindaddig ismételjük, amíg elfogynak a könyvek. Például, ha 10 könyvünk van:
let bookCount = 10;
for (let i = 0; i < bookCount; i++) {
    console.log(i + 10);
}
console.log('Feladatok');
// Feladatok
console.log('Hozz létre egy ciklust, ami kiírja a számokat 0-tól 9-ig');
for (let i = 0; i <= 9; i++) console.log(i);

console.log('Módosítsd az előző ciklust, hogy 1-től 10-ig írja ki a számokat');
for (let i = 1; i <= 10; i++) console.log(i);

// Írd ki a 0 és 20 közötti páros számokat (zárt intervallum)

console.log('Írd ki a 0 és 20 közötti páros számokat (zárt intervallum)');
for (let i = 2; i <= 20; i = i + 2) console.log(i);

// Függvények
// Rendszerint egy alkalmazásban van számos ismétlődő kódblokk, amiket különböző feltételek függvényében és különböző helyeken szeretnénk végrehajtani. Képzeljük csak el, hogyan fizetjük be számláinkat. A lépések ugyanazok, a különbség mindössze annyi, hogy különböző összegeket utalunk különböző szolgáltatóknak. Tehát az összeg és a szolgáltató az úgynevezett “paraméterei” ennek a tevékenységnek. A programozásban ezeket a tevékenységeket függvényeknek (function) hívjuk.
let payBill = (amount, beneficiary) => {
    // "amount" mennyiségű pénz átutalása "beneficiary" számára
};
// A függvényeken belül használhatjuk a return kulcsszót, amivel megadhatjuk a függvény visszatérési értékét: az eredményt, amit a függvény visszaad, miután végrehajtódik. Például, ha össze szeretnénk adni 2 számot, kíváncsiak vagyunk az eredményre:
let add = (a, b) => {
    return a + b;
    // a "return" kulcsszó miatt a függvény "visszaadja"
    // az összeadás eredményét
};
console.log(
    'Például, ha össze szeretnénk adni 2 számot, kíváncsiak vagyunk az eredményre:'
);
console.log(add(1, 2)); // kimenet: 3

// 1. Feladat
// Használd az imént megismert for ciklust (for loop) és hozz létre egy függvényt, ami kiírja az első N számot!
console.log(
    'Használd az imént megismert for ciklust (for loop) és hozz létre egy függvényt, ami kiírja az első N számot!'
);
let printNumbersTill = (N) => {
    for (i = 1; i <= N; i++) console.log(i);
};
printNumbersTill(20);
console.log('printNumbersTill(15)');
printNumbersTill(15);

// 2. Feladat
// Hozz létre egy függvényt, ami egy nevet kap paraméterként, majd visszatér egy személyes üdvözléssel!
let getGreetingTo = (name) => {
    greeting = 'Szevasz ' + name;
    return greeting;
};
// console.log("getGreetingTo('Robert')");
getGreetingTo('Róbert');
// console.log("console.log(getGreetingTo('Robert'))");
console.log(getGreetingTo('Róbert'));

// For ciklusok és tömbök
// Gyakran előfordul, hogy tömbökön kell iterálnunk (elemenként végigmennünk). Mit gondolsz, ezt hogy tudnád megvalósítani? Ahogy korábban láthattuk, a for ciklus a ciklus magjában található kódot N-szer hajtja végre, így ha egy tömb elemeit szeretnénk kiírni, a ciklusnak .length-szer kell majd lefutnia.

// 1. Feladat
// Hozz létre egy függvényt, ami egy tömböt kap paraméterként, majd sorban kiírja minden elemét!

// Így kell, hogy kinézzen a megoldásod:
let printValues = (array) => {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
};
console.log('printValues([0, 3, 6, 9, 12])');
printValues([0, 3, 6, 9, 12]);

// A forEach ciklus
// Ha csak tehetjük, érdemes elhagyni az i változót, mert fölöslegesen bonyolítja a kódunkat. Szerencsére a JavaScriptben van külön szintaktika arra, ha egy tömbön szeretnénk végig iterálni

let myNumbers = [10, 20, 30, 50, 12];

// 2. Feladat
// Módosítsd a korábbi printValues függvényed, hogy for ciklus helyett forEach ciklust használjon!
let PrintValues = (array) => {
    array.forEach((value) => {
        console.log(value);
    });
};
console.log("PrintValues(['cica', 3, 'kutya', 9, 12])");
PrintValues(['cica', 3, 'kutya', 9, 12]);
