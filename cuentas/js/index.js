const textuser_1 = document.querySelector('.user-placehold');
const inuser_1 = document.querySelector('.user-in');

inuser_1.addEventListener('click', () =>{
    textuser_1.style.marginTop = '0';
})
inuser_1.addEventListener('blur', () =>{
    if (inuser_1.value === '') {
        textuser_1.style.marginTop = '25px'; 
    }
})

const textpass_1 = document.querySelector('.pass-placehold');
const inpass_1 = document.querySelector('.pass-in');

inpass_1.addEventListener('click', () =>{
    textpass_1.style.marginTop = '0';
})
inpass_1.addEventListener('blur', () =>{
    if (inpass_1.value === '') {
        textpass_1.style.marginTop = '25px'; 
    }
})

// Covertor

const ccBtn = document.querySelector('#cc-btn');
const teamcc = document.querySelector('.cover-cc');
const isBtn = document.querySelector('#is-btn');
const teamis = document.querySelector('.cover-is');
const cover = document.querySelector('.section-cover');

ccBtn.addEventListener('click', () =>{
    teamcc.style.opacity = '0';
    teamcc.style.display = 'none';

    teamis.style.opacity = '1';
    teamis.style.display = 'flex';
    cover.style.left = '0%';
});

isBtn.addEventListener('click', () =>{
    teamis.style.opacity = '0';
    teamis.style.display = 'none';

    teamcc.style.opacity = '1';
    teamcc.style.display = 'flex';
    cover.style.left = '50%';
});