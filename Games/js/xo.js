const celdas = document.querySelector('.celda')
const turnoSDiv = document.getElementById('turn')

const celda1 = document.querySelector('.onec');
const x1 = document.querySelector('.ox');
const c1 = document.querySelector('.oc');

const celda2 = document.querySelector('.twoc');
const x2 = document.querySelector('.sx');
const c2 = document.querySelector('.sc');

const celda3 = document.querySelector('.trec');
const x3 = document.querySelector('.tx');
const c3 = document.querySelector('.tc');

const celda4 = document.querySelector('.fouc');
const x4 = document.querySelector('.fx');
const c4 = document.querySelector('.fc');

const celda5 = document.querySelector('.fivc');
const x5 = document.querySelector('.fix');
const c5 = document.querySelector('.fic');

const celda6 = document.querySelector('.sixc');
const x6 = document.querySelector('.six');
const c6 = document.querySelector('.sic');

const celda7 = document.querySelector('.sevc');
const x7 = document.querySelector('.sex');
const c7 = document.querySelector('.sec');

const celda8 = document.querySelector('.eigc');
const x8 = document.querySelector('.ex');
const c8 = document.querySelector('.ec');

const celda9 = document.querySelector('.ninc');
const x9 = document.querySelector('.nx');
const c9 = document.querySelector('.nc');

let turno = 1 // lo inicio impar
let turnoS

// celdas.addEventListener('click', () => {

//     turno ++;

//     console.log(turno);

// });



celda1.addEventListener('click', () => {

    if ((turno % 2) == 0) {

        console.log(turno);
        turno++;
        x1.classList.remove('ox');

        celda1.style.pointerEvents = 'none';
        turnoSDiv.innerHTML = "Turno De O"
    }
    else if ((turno % 2) != 0) {
        console.log(turno);
        turno++;
        c1.classList.remove('oc');
        
        celda1.style.pointerEvents = 'none';
        turnoSDiv.innerHTML = "Turno De X"
    } 
    
});
celda2.addEventListener('click', () => {
    
    if ((turno % 2) == 0) {
        
        console.log(turno);
        turno++;
        x2.classList.remove('sx');
        
        celda2.style.pointerEvents = 'none';
        turnoSDiv.innerHTML = "Turno De O"
    }
    else if ((turno % 2) != 0) {
        console.log(turno);
        turno++;
        c2.classList.remove('sc');

        celda2.style.pointerEvents = 'none';
        turnoSDiv.innerHTML = "Turno De O"

    }

});
celda3.addEventListener('click', () => {

    if ((turno % 2) == 0) {

        console.log(turno);
        turno++;
        x3.classList.remove('tx');

        celda3.style.pointerEvents = 'none';
    }
    else if ((turno % 2) != 0) {
        console.log(turno);
        turno++;
        c3.classList.remove('tc');

        celda3.style.pointerEvents = 'none';
    }

});
celda4.addEventListener('click', () => {

    if ((turno % 2) == 0) {

        console.log(turno);
        turno++;
        x4.classList.remove('fx');

        celda4.style.pointerEvents = 'none';
    }
    else if ((turno % 2) != 0) {
        console.log(turno);
        turno++;
        c4.classList.remove('fc');

        celda4.style.pointerEvents = 'none';
    }

});
celda5.addEventListener('click', () => {

    if ((turno % 2) == 0) {

        console.log(turno);
        turno++;
        x5.classList.remove('fix');

        celda5.style.pointerEvents = 'none';
    }
    else if ((turno % 2) != 0) {
        console.log(turno);
        turno++;
        c5.classList.remove('fic');

        celda5.style.pointerEvents = 'none';
    }

});
celda6.addEventListener('click', () => {

    if ((turno % 2) == 0) {

        console.log(turno);
        turno++;
        x6.classList.remove('six');

        celda6.style.pointerEvents = 'none';
    }
    else if ((turno % 2) != 0) {
        console.log(turno);
        turno++;
        c6.classList.remove('sic');

        celda6.style.pointerEvents = 'none';
    }

});
celda7.addEventListener('click', () => {

    if ((turno % 2) == 0) {

        console.log(turno);
        turno++;
        x7.classList.remove('sex');

        celda7.style.pointerEvents = 'none';
    }
    else if ((turno % 2) != 0) {
        console.log(turno);
        turno++;
        c7.classList.remove('sec');

        celda7.style.pointerEvents = 'none';
    }

});
celda8.addEventListener('click', () => {

    if ((turno % 2) == 0) {

        console.log(turno);
        turno++;
        x8.classList.remove('ex');

        celda8.style.pointerEvents = 'none';
    }
    else if ((turno % 2) != 0) {
        console.log(turno);
        turno++;
        c8.classList.remove('ec');

        celda8.style.pointerEvents = 'none';
    }

});
celda9.addEventListener('click', () => {

    if ((turno % 2) == 0) {

        console.log(turno);
        turno++;
        x9.classList.remove('nx');

        celda9.style.pointerEvents = 'none';
    }
    else if ((turno % 2) != 0) {
        console.log(turno);
        turno++;
        c9.classList.remove('nc');

        celda9.style.pointerEvents = 'none';
    }

});

