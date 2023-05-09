$(function () {
    console.log(masodfokuEgyenletMegoldasa(1, 4, 4));
});
// Másodfokú egyenlet calculator online http://eprog.hu/oktatas/javascript/feladat05.html

function masodfokuEgyenletMegoldasa(a = 0, b = 0, c = 0) {
    const eredmeny = {
        X1: "Az egyenlet nem másodfokú!",
        X2: "Az egyenlet nem másodfokú!",
    };
    if (a === "") {
        a = 0;
    }
    if (b === "") {
        b = 0;
    }
    if (c === "") {
        c = 0;
    }

    if (typeof a == "string") {
        a = Number(a.replace(",", "."));
        console.log(isNaN(a));
    }
    if (typeof b == "string") {
        b = Number(b.replace(",", "."));
    }
    if (typeof c == "string") {
        c = Number(c.replace(",", "."));
    }
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        console.log(a);
        eredmeny.X1 = "Legalább az egyik változó nem szám!";
        eredmeny.X2 = "Legalább az egyik változó nem szám!";
        return eredmeny;
    }

    if (a === 0 && b === 0 && c === 0) {
        return eredmeny;
    }
    if (a === 0) {
        return eredmeny;
    }
    let D = b * b - 4 * a * c;
    if (D < 0) {
        eredmeny.X1 = "komplex";
        eredmeny.X2 = "komplex";
        return eredmeny;
    }
    let x1 = (-b + Math.sqrt(D)) / (2 * a);
    let x2 = (-b - Math.sqrt(D)) / (2 * a);
    console.log(x1);
    console.log(x2);
    eredmeny.X1 = x1;
    eredmeny.X2 = x2;

    return eredmeny;
}

//1 megoldás van, ha a diskrimináns alatt az eredmény 0
// nincs megoldás, ha a nevező 0
