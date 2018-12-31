let container = document.querySelector('.container');

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
            console.log('1');
            for (let i = 0; i < line.length; i++) {
                line[i].style.background = 'red';
            }
            for (let k = 0; k < box.length; k++) {
                box[k].removeEventListener('click', dugme);
            }
            break;
        } 
    }
}

function createGrid(){
    let text = "";
    for (let i = 0; i < 9; i++) {
        text +='<div class="box"></div>';
        // text +='<div class="box"><i class="fab fa-adn"></i></div>';
    }
    console.log(text);
    container.innerHTML = text;
}

