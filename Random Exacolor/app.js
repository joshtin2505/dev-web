const body = document.getElementById('body');
const divHexacolorContainer = document.getElementById('hexa-colors');
const list = ['1', '2', '3', '4', '5', '6', '7', '8', 'A', 'B', 'C', 'D', 'E', 'F'];
var iter = 0;
setInterval(() => {

    let colorgen = ''
    for ( let i = 0; i < 6; i++) {
        let randomer = Math.floor(Math.random() * list.length);
        colorgen += list[randomer];
    }
    let colorfinished = '#' + colorgen;
    console.log(colorfinished);
    body.style.transition = '.5s';
    body.style.backgroundColor = colorfinished;

    //creo el elemento que contenga los colores que van apareciendo
    iter++;
    const newElement = document.createElement('div');//Creo el elemento
    newElement.setAttribute('class', `new-color-container cont${iter}`);//le doy atributos
    divHexacolorContainer.appendChild(newElement);//agrego el elemento

    

    const hxcolor = document.createElement('p');
    hxcolor.setAttribute('class', 'hx-color');
    newElement.appendChild(hxcolor);
    hxcolor.innerHTML = colorfinished;

    const hxcolorCont = document.createElement('div');
    hxcolorCont.setAttribute('class', 'hx-color-cont');
    newElement.appendChild(hxcolorCont);
    hxcolorCont.style.height = '20px';
    hxcolorCont.style.width = '30px';
    hxcolorCont.style.backgroundColor = colorfinished;

    
}, 2000);

  