//Limpa o display de resultado retornando para zero
function forClear() {
    document.getElementById('output').innerHTML = "0";
};

//Remove o zero do display quando e inserido outro número
function removeZero() {
    let value = document.getElementById('output').innerHTML;
    if (value == "0") {
        value = " "
        document.getElementById('output').innerHTML = value;
    }
};

//Cálculo de percentual 
function perc() {
    let value = document.getElementById('output').innerHTML;
    value = value / 100;
    document.getElementById('output').innerHTML = value;
}

//Coloca o número escolhido no display
function fordisplay(value) {
    removeZero()
    document.getElementById('output').innerHTML += value;
}
function solve() {
    removeZero()
    let equation = document.getElementById('output').innerHTML;
    let solved = eval(equation);
    document.getElementById('output').innerHTML = solved;
}


//Bloco do KeyboardEvent
const mapaTeclado = {
    '0' : 'zero',
    '1' : 'one',
    '2' : 'two',
    '3' : 'three',
    '4' : 'four',
    '5' : 'five',
    '6' : 'six',
    '7' : 'seven',
    '8' : 'eight',
    '9' : 'nine'
}
const mapearTeclado = (evento) => {
    let tecla = evento.key;
    document.getElementById(mapaTeclado[tecla]).fordisplay(value);
}
document.addEventListener('keyup', mapearTeclado);
    
