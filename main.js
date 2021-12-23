let container = document.querySelector('.container');
let result = document.querySelector('.result');

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
    div.addEventListener('click', dugme)
}

function dugme() {
    (xo == "O") ? xo = "X" : xo = "O";
    this.innerHTML = xo;
    this.removeEventListener('click', dugme);
    
    checkLines();
}
function checkLines() {
    for (let i = 0; i < lines.length; i++) {
        let line = lines[i];
        if (line[0].innerHTML == line[1].innerHTML && line[1].innerHTML == line[2].innerHTML && line[0].innerHTML !="" ) {
            // console.log('1');
            for (let i = 0; i < line.length; i++) {
                line[i].style.background = 'red';
                if (xo == 'X') {
                    result.innerHTML = '<h1>Pobednik je igrac X</h1>';
                } else {
                    result.innerHTML = '<h1>Pobednik je igrac O</h1>';
                }
            }
            for (let k = 0; k < box.length; k++) {
                box[k].removeEventListener('click', dugme);
            }   
            break;
        } else {
            result.innerHTML = '<h1>Nema pobednika</h1>';
        }
    }
}

function createGrid(){
    let text = "";
    for (let i = 0; i < 9; i++) {
        text +='<div class="box"></div>';
        // text +='<div class="box"><i class="fab fa-adn"></i></div>';
    }
    // console.log(text);
    container.innerHTML = text;
}

