let score = 0;
let scoreHTML = document.getElementById("score");

function increaese(){
    score = score +1
    scoreHTML.innerHTML = score;

}

function welcome(){
    let name = prompt("ادخل اسمك");
    let h1 = document.getElementById("title");

    h1.innerHTML = "مرحبا بك يا "+name
}

welcome()