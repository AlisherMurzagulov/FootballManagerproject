var selectedcomand = 0;
var points = [];
var gd = [];
var comands = [];
var p = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var g = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
function groupgeneration(selected)
{
    selectedcomand = selected;
    comand = document.getElementsByClassName(selected)[0];
    comand.classList.add("bg-success");
    for (var i = 1; i <= 12; i++) {
        document.getElementsByClassName('comand' + i)[0].innerText = "";
        comands[i] = document.getElementsByClassName('comand' + i)[0];
    }
    var arr = ["Barcelona", "Atletico Madrid", "Arsenal", "Real Madrid", "Chelsea", "Man City", "Liverpool", "Napoli", "Borussia Dortmund", "PSG", "Inter", "Milan"];
    var rand;
    var i = 1;
    while ((comands[1].innerText == "") || (comands[2].innerText == "") || (comands[3].innerText == "") || (comands[4].innerText == "") || (comands[5].innerText == "") || (comands[6].innerText == "") || (comands[7].innerText == "") || (comands[8].innerText == "") || (comands[9].innerText == "") || (comands[10].innerText == "") || (comands[11].innerText == "") || (comands[12].innerText == "")) {
        rand = Math.floor(Math.random() * arr.length);
        if (arr[rand] != comands[1].innerText && arr[rand] != comands[2].innerText && arr[rand] != comands[3].innerText && arr[rand] != comands[4].innerText && arr[rand] != comands[5].innerText && arr[rand] != comands[6].innerText && arr[rand] != comands[7].innerText && arr[rand] != comands[8].innerText && arr[rand] != comands[9].innerText && arr[rand] != comands[10].innerText && arr[rand] != comands[11].innerText && arr[rand] != comands[12].innerText) {
            comands[i].innerText = arr[rand];
        }
        i++;
        if (i == 13) {
            i = 1;
        }
    }
}
function compareScore(comA, comB) {
    return comA.score - comB.score;
}
var arr1 = [1, 0, 3];
function point() {
    var main = 0;
    var main1 = 0;
    var main2 = 0;
    var main3 = 0;
    for (var i = 1; i <= 3; i++)
    {
        p[i] += Math.floor(Math.random() * arr1.length);
        g[i] += Math.floor(Math.random() * 4) - 1;
        main += p[i];
    }
    p[3] += Math.floor(Math.random() * 3) + 2;
    g[3] += Math.floor(Math.random() * 3) + 1;
    main += p[3];
    for (var i = 1; i <= 2; i++) {
        p[i + 3] += Math.floor(Math.random() * arr1.length);
        g[i + 3] += Math.floor(Math.random() * 4) - 2;
        main1 += p[i + 3];
    }
    p[6] += Math.floor(Math.random() * 3) + 2;
    g[6] += Math.floor(Math.random() * 4) + 1;
    main1 += p[6];
    for (var i = 1; i <= 2; i++) {
        p[i + 6] += Math.floor(Math.random() * arr1.length);
        g[i + 6] += Math.floor(Math.random() * 4) - 2;
        main2 += p[i + 6];
    }
    p[9] += Math.floor(Math.random() * 3) + 2;
    g[9] += Math.floor(Math.random() * 3) + 1;
    main2 += p[9];
    for (var i = 1; i <= 2; i++) {
        p[i + 9] += Math.floor(Math.random() * arr1.length);
        g[i + 9] += Math.floor(Math.random() * 4) - 2;
        main3 += p[i + 9];
    }
    p[12] += Math.floor(Math.random() * 3) + 2;
    g[12] += Math.floor(Math.random() * 3) + 1;
    main3 += p[12];
}

