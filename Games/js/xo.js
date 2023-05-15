const celdas =document.querySelector('.celda')

const celda1 = document.getElementsByClassName('onec');
const x1 = document.getElementsByClassName('ox');
const c1 = document.getElementsByClassName('oc');

const celda2 = document.getElementsByClassName('twoc');
const x2 = document.getElementsByClassName('sx');
const c2 = document.getElementsByClassName('sc');

const celda3 = document.getElementsByClassName('trec');
const x3 = document.getElementsByClassName('tx');
const c3 = document.getElementsByClassName('tc');

const celda4 = document.getElementsByClassName('fouc');
const x4 = document.getElementsByClassName('fx');
const c4 = document.getElementsByClassName('fc');

const celda5 = document.getElementsByClassName('fivc');
const x5 = document.getElementsByClassName('fix');
const c5 = document.getElementsByClassName('fic');

const celda6 = document.getElementsByClassName('sixc');
const x6 = document.getElementsByClassName('sx');
const c6 = document.getElementsByClassName('sc');

const celda7 = document.getElementsByClassName('sevc');
const x7 = document.getElementsByClassName('sex');
const c7 = document.getElementsByClassName('sec');

const celda8 = document.getElementsByClassName('eigc');
const x8 = document.getElementsByClassName('ex');
const c8 = document.getElementsByClassName('ec');

const celda9 = document.getElementsByClassName('ninc');
const x9 = document.getElementsByClassName('nx');
const c9 = document.getElementsByClassName('nc');

let turno = 1

celdas.addEventListener('click', () => {

    turno ++
    console.log(turno);

});


