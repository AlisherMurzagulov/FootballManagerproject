var selectedcomand = 0;
var p = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var g = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var points = [];
var gd = [];
var comands = [];
var basket1 = [];
var basket2 = [];
var basket3 = [];
var basket4 = [];
function compareScore(comA, comB)
{
    return comA.score - comB.score;
}
var arr1 = [1, 0, 3];
function point()
{
    generationPoint(1, 3);
    generationPoint(4, 6);
    generationPoint(7, 9);
    generationPoint(10, 12);

    var team1 = { name: "Atletico Madrid", score: (p[1] * 10) + g[1], points: p[1], Gd: g[1] };
    var team2 = { name: "Borussia Dortmund", score: (p[2] * 10) + g[2], points: p[2], Gd: g[2] };
    var team3 = { name: "Napoli", score: (p[3] * 10) + g[3], points: p[3], Gd: g[3] };
    var team4 = { name: "Liverpool", score: (p[4] * 10) + g[4], points: p[4], Gd: g[4] };
    var team5 = { name: "Man City", score: (p[5] * 10) + g[5], points: p[5], Gd: g[5] };
    var team6 = { name: "Chelsea", score: (p[6] * 10) + g[6], points: p[6], Gd: g[6] };
    var team7 = { name: "Arsenal", score: (p[7] * 10) + g[7], points: p[7], Gd: g[7] };
    var team8 = { name: "Real Madrid", score: (p[8] * 10) + g[8], points: p[8], Gd: g[8] };
    var team9 = { name: "PSG", score: (p[9] * 10) + g[9], points: p[9], Gd: g[9] };
    var team10 = { name: "Barcelona", score: (p[10] * 10) + g[10], points: p[10], Gd: g[10] };
    var team11 = { name: "Inter", score: (p[11] * 10) + g[11], points: p[11], Gd: g[11] };
    var team12 = { name: "Milan", score: (p[12] * 10) + g[12], points: p[12], Gd: g[12] };

    basket1 = [team1, team2, team3];
    basket2 = [team4, team5, team6];
    basket3 = [team7, team8, team9];
    basket4 = [team10, team11, team12];

    basket1.sort(compareScore);
    basket2.sort(compareScore);
    basket3.sort(compareScore);
    basket4.sort(compareScore);

    for (var i = 1; i <= 3; i++)
    {
        comands[i].innerHTML = basket1[basket1.length - i].name;
        points[i].innerText = basket1[basket1.length - i].points;
        gd[i].innerText = basket1[basket1.length - i].Gd;
    }
    for (var i = 1; i <= 3; i++)
    {
        comands[i + 3].innerText = basket2[basket1.length - i].name;
        points[i + 3].innerText = basket2[basket1.length - i].points;
        gd[i + 3].innerText = basket2[basket1.length - i].Gd;
    }
    for (var i = 1; i <= 3; i++)
    {
        comands[i + 6].innerText = basket3[basket1.length - i].name;
        points[i + 6].innerText = basket3[basket1.length - i].points;
        gd[i + 6].innerText = basket3[basket1.length - i].Gd;
    }
    for (var i = 1; i <= 3; i++) {
        comands[i + 9].innerText = basket4[basket1.length - i].name;
        points[i + 9].innerText = basket4[basket1.length - i].points;
        gd[i + 9].innerText = basket4[basket1.length - i].Gd;
    }
    return 0;
}
function groupgeneration(selected)
{
    selectedcomand = selected;
    comand = document.getElementsByClassName(selected)[0];
    comand.classList.add("bg-success");
    for (var i = 1; i <= 12; i++)
    {
        document.getElementsByClassName('comand' + i)[0].innerText = "";
        comands[i] = document.getElementsByClassName('comand' + i)[0];
        points[i] = document.getElementsByClassName('point' + i)[0];
        gd[i] = document.getElementsByClassName('GD' + i)[0];
    }
    var arr = ["Barcelona", "Atletico Madrid", "Arsenal", "Real Madrid", "Chelsea", "Man City", "Liverpool", "Napoli", "Borussia Dortmund", "PSG", "Inter", "Milan"];
    var rand;
    var i = 1;
    while ((comands[1].innerText == "") || (comands[2].innerText == "") || (comands[3].innerText == "") || (comands[4].innerText == "") || (comands[5].innerText == "") || (comands[6].innerText == "") || (comands[7].innerText == "") || (comands[8].innerText == "") || (comands[9].innerText == "") || (comands[10].innerText == "") || (comands[11].innerText == "") || (comands[12].innerText == "")) {
        rand = Math.floor(Math.random() * arr.length);
        if (arr[rand] != comands[1].innerText && arr[rand] != comands[2].innerText && arr[rand] != comands[3].innerText && arr[rand] != comands[4].innerText && arr[rand] != comands[5].innerText && arr[rand] != comands[6].innerText && arr[rand] != comands[7].innerText && arr[rand] != comands[8].innerText && arr[rand] != comands[9].innerText && arr[rand] != comands[10].innerText && arr[rand] != comands[11].innerText && arr[rand] != comands[12].innerText)
        {
            comands[i].innerText = arr[rand];
        }
        i++;
        if (i == 13)
        {
            i = 1;
        }
    }
}

function generationPoint(start,end)
{
    var main=0;
    for (var i = start; i <= end; i++)
    {
        p[i] += Math.floor(Math.random() * arr1.length);
        g[i] += Math.floor(Math.random() * 4) - 0;
        main += p[i];
    }
    if (main > 6) generationPoint();
}
function groupstart(comand)
{
    point();
}
function PoissonExponential(rate)
{
    var k = -1;
    var s = 0;
    do {
        s += Math.exp(1);
        ++k;
    } while (s < rate);
    return k;
}
var playoffcomand = [];
var pos = [];
var inerrHtmlg = [];
function playoff() {
    document.getElementsByClassName('field')[0].innerHTML = "";
    playoffcomand[0] = document.getElementsByClassName('comand' + 1)[0].innerText;
    playoffcomand[1] = document.getElementsByClassName('comand' + 4)[0].innerText;
    playoffcomand[2] = document.getElementsByClassName('comand' + 7)[0].innerText;
    playoffcomand[3] = document.getElementsByClassName('comand' + 10)[0].innerText;
    document.getElementsByClassName('field2')[0].innerHTML = "";
    document.getElementsByClassName('buttons')[0].innerHTML = "";
    document.getElementsByClassName('field1')[0].classList.remove("d-none");
    win();
}
function win() {
    pos[0] = PoissonExponential(5.02);
    pos[1] = PoissonExponential(10.07);
    pos[2] = PoissonExponential(5.02);
    pos[3] = PoissonExponential(10.07);
    if (pos[0] > pos[1]) {
        inerrHtmlg[0] = Math.floor(Math.random() * 3) + 2;
        inerrHtmlg[1] = Math.floor(Math.random() * 1) + 0;
        document.getElementsByClassName('playoff1')[0].innerText = playoffcomand[0] + " " + inerrHtmlg[0];
        document.getElementsByClassName('playoff2')[0].innerText = inerrHtmlg[1] + " " + playoffcomand[1];
    }
    if (pos[0] < pos[1] || pos[0] == pos[1]) {
        inerrHtmlg[0] = Math.floor(Math.random() * 2) + 1;
        inerrHtmlg[1] = Math.floor(Math.random() * 4) + 3;
        document.getElementsByClassName('playoff1')[0].innerText = playoffcomand[0] + " " + inerrHtmlg[0];
        document.getElementsByClassName('playoff2')[0].innerText = inerrHtmlg[1] + " " + playoffcomand[1];
    }
    if (pos[2] > pos[3]) {
        inerrHtmlg[2] = Math.floor(Math.random() * 4) + 3;
        inerrHtmlg[3] = Math.floor(Math.random() * 2) + 1;
        document.getElementsByClassName('playoff3')[0].innerText = playoffcomand[2] + " " + inerrHtmlg[2];
        document.getElementsByClassName('playoff4')[0].innerText = inerrHtmlg[3] + " " + playoffcomand[3];
    }

    if (pos[2] < pos[3] || pos[2] == pos[3]) {
        inerrHtmlg[2] = Math.floor(Math.random() * 2) + 1;
        inerrHtmlg[3] = Math.floor(Math.random() * 4) + 3;
        document.getElementsByClassName('playoff3')[0].innerText = playoffcomand[2] + " " + inerrHtmlg[2];
        document.getElementsByClassName('playoff4')[0].innerText = inerrHtmlg[3] + " " + playoffcomand[3];
    }
    document.getElementsByClassName('final')[0].classList.remove("d-none");
}
var finallcomand = [];
function final() {
    if (inerrHtmlg[0] < inerrHtmlg[1]) {
        playoffcomand[0] = playoffcomand[1];
    }
    if (inerrHtmlg[2] < inerrHtmlg[3]) {
        playoffcomand[2] = playoffcomand[3];
    }
    document.getElementsByClassName('playoff3')[0].innerText = "";
    document.getElementsByClassName('playoff4')[0].innerText = "";
    document.getElementsByClassName('playoff1')[0].innerText = playoffcomand[0];
    document.getElementsByClassName('playoff2')[0].innerText = playoffcomand[2];
    setTimeout(end, 500);


}
function end()
{
    pos[0] = PoissonExponential(7.02);
    pos[1] = PoissonExponential(10.07);
    var str = "Победитель";
    if (pos[0] > pos[1]) {
        inerrHtmlg[0] = Math.floor(Math.random() * 4) + 3;
        inerrHtmlg[1] = Math.floor(Math.random() * 2) + 1;
        document.getElementsByClassName('playoff1')[0].innerText = playoffcomand[0] + " " + inerrHtmlg[0];
        document.getElementsByClassName('playoff2')[0].innerText = playoffcomand[2] + " " + inerrHtmlg[1];
        setTimeout("alert(playoffcomand[0])", 10);
    }
    if (pos[0] < pos[1]) {
        inerrHtmlg[0] = Math.floor(Math.random() * 2) + 1;
        inerrHtmlg[1] = Math.floor(Math.random() * 4) + 3;
        document.getElementsByClassName('playoff1')[0].innerText = playoffcomand[0] + " " + inerrHtmlg[0];
        document.getElementsByClassName('playoff2')[0].innerText = inerrHtmlg[1] + " " + playoffcomand[2];
        setTimeout("alert(playoffcomand[2])", 10);
    }
}