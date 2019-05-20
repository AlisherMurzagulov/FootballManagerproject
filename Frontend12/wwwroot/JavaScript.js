var selectedcomand = 0;
var points = [];
var gd = [];
var comands = [];
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