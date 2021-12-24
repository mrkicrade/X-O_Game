let container = document.querySelector('.container');
let result = document.querySelector('.result');
let winner = 0;

createGrid();

let box = document.querySelectorAll('.box'); // ovo je array

let lines = [
    [box[0], box[1], box[2]],
    [box[3], box[4], box[5]],
    [box[6], box[7], box[8]],
    [box[0], box[3], box[6]],
    [box[1], box[4], box[7]],
    [box[2], box[5], box[8]],
    [box[0], box[4], box[8]],
    [box[2], box[4], box[6]]
];

let xo = "O";

for (let i = 0; i < box.length; i++) {
    const div = box[i];
    div.addEventListener('click', play)
}

function play() {
    winner ++;
    console.log(winner);
    (xo == "O") ? xo = "X" : xo = "O";
    this.innerHTML = xo;
    this.removeEventListener('click', play);
    
    checkLines();
    draw();
}
function checkLines() {
    for (let i = 0; i < lines.length; i++) {
        let line = lines[i];
        if (line[0].innerHTML == line[1].innerHTML && line[1].innerHTML == line[2].innerHTML && line[0].innerHTML !="") {
            for (let i = 0; i < line.length; i++) {
                line[i].style.background = 'red';
                if (xo == 'X') {
                    result.innerHTML = '<h1>Pobednik je igrac X</h1>';
                    winner ++;
                    console.log(winner);
                } else {
                    result.innerHTML = '<h1>Pobednik je igrac O</h1>';
                    winner ++;
                    console.log(winner);
                }
            }
            for (let k = 0; k < box.length; k++) {
                box[k].removeEventListener('click', play);
            }   
            break;
        } 
    }
}

function createGrid(){
    let text = "";
    for (let i = 0; i < 9; i++) {
        text +='<div class="box"></div>';
    }
    container.innerHTML = text;
}

function draw () {
    if (winner == 9) {
        result.innerHTML = '<h1>Nema pobednika</h1>'
    }
}

