// "use strict";

let vardas = "Rokas";
let kintamasis2 = 500;
const kintamasis3 = 1233;
// kintamasis3 = 12; // negalime priskirti const kintamajam naujos reikšmės

let string1 = " \"labas\" ";
let string2 = '"ate" " " " " " " " " " "" "  ${vardas}';
let string3 = `sveiki, ${vardas}, atspausdink man string1 ${string1}`;

console.log("--------");
console.log(string1);
console.log(string2);
console.log(string3);
console.log(typeof string3)
if (typeof string3 === "string") {
    console.log("string3 yra string tipo")
} else {
    console.log("string3 nera string tipo")
}

console.log("--------");

let a = 120;
let b = 44;

console.log("--- operatoriai ir aritmetiniai veiksmai pradzia -----");
let rezultatas = a * 2 / b * 4 + 12.11 / 0.122;
console.log(rezultatas);
console.log(a + b);
console.log(a - b);
console.log(a / b);
console.log(a % b);
console.log(a * b);
let nantest = Number("stringas");
if (Number.isNaN(nantest)) {
    console.log("tai nera skaicius: ", nantest)
} else {
    console.log("tai yra skaicius", nantest)
}

let dalybaisnulio = a / -0;
console.log(dalybaisnulio);

console.log("--------");


console.log("---pavyzdys su == ir === ");
let p = "labas";
let pp = 5;

console.log("5" == 5);
console.log("5" === 5);
console.log(true == 1); // tipai yra suvienodinami ir tada palyginamos reiksmes
console.log(1 == []);
console.log(p === pp); // cia yra lyginamos tik reiksmes!!!!

console.log("-----")
console.log('("3" - "1") = ' + ("3" - "1"));
console.log('("3" - 1) = ' + ("3" - 1));

console.log('("3" + "1") = ' + ("3" + "1"));
console.log('("3" + 1) = ' + ("3" + 1));

console.log('("3" * "2") = ' + ("3" * "2"));
console.log('("3" % "2") = ' + ("3" % "2"));
console.log('("3" + null) = ' + ("3" + null));

console.log("----")

if ("") {
    console.log("true")
} else {
    console.log("false")
}

let tuscias = "";
if (tuscias) {
    console.log("true")
} else {
    console.log("false")
}

let tuscias1 = "labasss";
if (tuscias1) {
    // cia galime atlikti veiksmus
    console.log("true")
    console.log(tuscias1.toUpperCase());
} else {
    console.log("false")
}

if ("" || 0 || -0 || NaN || null || undefined) { // SVARBU!
    console.log("true")
} else {
    console.log("false")
}


if (tuscias1 || console.log("isspausdink kazka")) {

}


if (5 | 3) {

}

let reiksme1 = 0b0101 | 0b0011;
let reiksme2 = 5 | 3;

let reiksme3 = 0b0101 || 0b0011;
let reiksme4 = 5 || 3;

if (reiksme3) {
    console.log("reiksm3 cia yra true")
}

if (reiksme1) {
    console.log("reiksme1 cia yra true")
}

if (true && console.log("sitas kodas ivyksta")) {
}

if (true || console.log("sitas kodas neivyksta")) {
}

console.log(reiksme1, " ", reiksme2, " ", reiksme3, " ", reiksme4)

let salyga = true;

if (!salyga) {
    console.log("!salyga yra true")
} else {
    console.log("!salyga yra false")
}

let skaicius = 5;

if (skaicius === 3) {
    console.log("skaicius yra 3")
} else if (skaicius === 4) {
    console.log("skaicius yra 4")
} else {
    console.log("skaicius nera nei 3, nei 4")
}

let money = 106.50;
let price = 105.50;

if (money > price) {
    console.log("You paid extra, here's your change.");
} else if (money === price) {
    console.log("You paid the exact amount, have a nice day!");
} else if (money === price) {

}
// else {
//     console.log("That's not enough, you still owe me money."); // C
// }


// ----------------
// ----------------
// ----------------

let masyvas = ['labas', 'ate', 121212, new function () {
}, {key: "value"}]
//                                          0        1      2           3                   4
console.log(masyvas);

masyvas[3] = ['masyvas1', 'masyvas2', 'masyvas3'];
console.log(masyvas);

masyvas[7] = "naujas";
console.log(masyvas);

masyvas.push("ipushinauelementa");
console.log(masyvas);

masyvas.pop();
masyvas.pop();
masyvas.pop();
masyvas.pop();
masyvas.pop();
console.log(masyvas);

delete masyvas[2];
console.log(masyvas);

masyvas.splice(0, 1);
console.log(masyvas);

let naujasmasyvas = masyvas.slice(0, 2);
console.log(naujasmasyvas)

console.log(masyvas.length + " " + naujasmasyvas.length);
// masyvas[7] = undefined;
// console.log(masyvas);

for (let i = 0; i < masyvas.length; i++) {
    console.log("masyvo ", i, "elementas: ", masyvas[i]);
}

for (let elementas of masyvas) {
    console.log("elementas:", elementas);
}

// ------
function helloWorld(text, number, name = "Rokas") {
    if (!Number.isInteger(number)) {
        console.log("tai ne skaicius, baigiame funkcija");
        return;
    }

    let pakartotasVardas = "";
    console.log(number);
    for (let i = 0; i < number; i++) {
        pakartotasVardas += name + " ";
        console.log("ciklo iteracija: ", i, pakartotasVardas);
    }
    console.log(text, pakartotasVardas);
    console.log("---------")

    return pakartotasVardas;
}

console.log(0 < "asdasd");
console.log([] < "asdasd");
console.log(553 < "asdasd");
console.log(0 < "asdasd");
console.log(1 < "asdasd");

let kintamasisA = helloWorld("Pirma programa", 4, "Julius");
// console.log("grazinta is funkcijos: ", kintamasisA);
helloWorld("Pirma programa", "stringas", "Julius");
helloWorld("Pirma programa", 4);
helloWorld("Pirma programa2222");


function funkcijaKuriGrazinaFunkcija() {
    return function (a, b) {
        return a + b;
    }
}

console.log(funkcijaKuriGrazinaFunkcija()(1, 2));

let grazintaFunkcija = funkcijaKuriGrazinaFunkcija();
let reiksme = grazintaFunkcija(1, 2);
console.log(reiksme);


// prasme: iskviesti gauta funkcija su duotais parametrais
function funkcijaSuFunkcijosParametras(func, parametras1, parametras2) {
    return func(parametras1, parametras2)
}

let rezultatasA = funkcijaSuFunkcijosParametras(function (a, b) {
        return a + b
    },

    "labas",
    "ate");

console.log(rezultatasA);

rezultatasA = funkcijaSuFunkcijosParametras(function (a, b) {
        return Math.pow(a, b)
    },

    2,
    5);

console.log(rezultatasA);

document.addEventListener('DOMContentLoaded', main)
function main() {
    pridekPradiniH1Elementa();
}

function pridekPradiniH1Elementa() {
    let sukurtasElementas = document.createElement("h1");
    sukurtasElementas.innerText = "DINAMISKAI SUKURTAS h1 ELEMENTAS";
    document.body.append(sukurtasElementas);

    sukurtasElementas.addEventListener('click', function() {
        let elem = document.createElement("h1");
        elem.innerText = "tekstas";
        document.body.append(elem);
    })

    penktadienis.onclick = function () {
        console.log("as paspaudziau ant html elemento, kurio id yra 'penktadienis'");
    }

    penktadienis.addEventListener('mouseover', function() {
        console.log("pelyte yra uzvesta ant elemento su id penktadienis")
    })
}
// document.body.addEventListener("click", () => alert("Ačiū, kad paspaudėte mygtuką!"));

// document.body.addEventListener("keydown", (e) => {
//     alert("Klaviaturos mygtukas paspaustas: " + e.key + " " + e.code + " " +  e.type);
// });

window.addEventListener("resize", (e) => {
    console.log("Vartotojas bando keisti lango dydi:", e.currentTarget.innerWidth, e.currentTarget.innerHeight );
});

// alert("Alertas!!!");
// console.log(confirm("Sutikite su amžiaus ribojimu"));

function funtest1() {
    console.log("as sukuriau funkcija su function zodziu ir pavadinimu funtest1");
}

let funtest2 = function() {
    console.log("as sukuriau funkcija su function zodziu ir be pavadimo." +
        " priskyriau sia funkcija funtest2 kintamajam");
}

funtest1();
funtest2();

















