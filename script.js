const sportok = [
    { sport: "Futás", kalória: 680 },
    { sport: "Focizás", kalória: 550 },
    { sport: "Bringázás", kalória: 480 },
    { sport: "Hegymászás", kalória: 420 },
    { sport: "Lovaglás", kalória: 370 },
    { sport: "Túrázás", kalória: 360 },
    { sport: "Kajakozás", kalória: 340 },
    { sport: "Súlyzós edzés", kalória: 320 },
    { sport: "Pingpongozás", kalória: 270 },
    { sport: "Kutyasétáltatás", kalória: 200 }
];
function osszesites() {
    var osszperc = 0;
    var osszkcal = 0;
    var p = "";
    var c = "";
    var x = 0;
    for (let s = 0; s < sportok.length; s++) {
        p = document.getElementById("perc" + s).value;
        c = document.getElementById("kcal" + s).value;
        x = parseInt(p);
        if (!isNaN(x)) {
            osszperc = x + osszperc;
            osszkcal += parseFloat(c);
        }
    }
    document.getElementById("osszesperc").innerHTML = osszperc;
    document.getElementById("osszeskcal").innerHTML = osszkcal;
    document.getElementById("arany").innerHTML = (osszkcal / 20).toFixed(0);
}
function percvaltozas(index) {
    var p = document.getElementById("perc" + index).value;
    var c = p / 60 * sportok[index].kalória;
    document.getElementById("kcal" + index).value = c.toFixed(0);
    osszesites();
}
function kcalvaltozas(index) {
    var c = document.getElementById("kcal" + index).value;
    var p = sportok[index].kalória / c * 60;
    document.getElementById("perc" + index).value = p;
    osszesites();
}
function torles() {
    inputs = document.querySelectorAll("input[type='number'");
    inputs.forEach((e) => e.value = "");
    document.getElementById("osszesperc").innerHTML = "";
    document.getElementById("osszeskcal").innerHTML = "";
    document.getElementById("arany").innerHTML = "";
}
function tbodyfeltoltes() {
    var ki = "";
    for (let s = 0; s < sportok.length; s++) {
        ki += "<tr><td>" + sportok[s].sport + "</td>";
        ki += "<td>" + sportok[s].kalória + "</td>";
        ki += "<td><input type='number' id='perc" + s + "' onchange='percvaltozas(" + s + ");'></td>";
        ki += "<td><input type='number' id='kcal" + s + "' onchange='kcalvaltozas(" + s + ");'></td></tr>";
    }
    ki += "<tr><td colspan='2'>Összesen:</td>";
    ki += "<td id='osszesperc'></td><td id='osszeskcal'></td></tr>";
    ki += "<tr><td colspan='3'>Napi energiaszükséglet (2000 kcal) arányában:</td>";
    ki += "<td><span id='arany'></span>%</td></tr></table>";
    document.getElementById("tbody").innerHTML = ki;
}

tbodyfeltoltes();