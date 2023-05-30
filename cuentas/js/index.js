const textuser_1 = document.querySelector('.user-placehold');
const inuser_1 = document.querySelector('.user-in');

inuser_1.addEventListener('click', () => {
    textuser_1.style.marginTop = '0';
})
inuser_1.addEventListener('blur', () => {
    if (inuser_1.value === '') {
        textuser_1.style.marginTop = '25px';
    }
})

const textpass_1 = document.querySelector('.pass-placehold');
const inpass_1 = document.querySelector('.pass-in');

inpass_1.addEventListener('click', () => {
    textpass_1.style.marginTop = '0';
})
inpass_1.addEventListener('blur', () => {
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

ccBtn.addEventListener('click', () => {
    teamcc.style.opacity = '0';
    teamcc.style.display = 'none';

    teamis.style.opacity = '1';
    teamis.style.display = 'flex';
    cover.style.left = '0%';
});

isBtn.addEventListener('click', () => {
    teamis.style.opacity = '0';
    teamis.style.display = 'none';

    teamcc.style.opacity = '1';
    teamcc.style.display = 'flex';
    cover.style.left = '50%';
});

// Ver Contraseña

const ver_btn = document.querySelector('.fa-eye');
const noVer_btn = document.querySelector('.fa-eye-slash');


ver_btn.addEventListener('click', () => {

    inpass_1.type = 'text';

    noVer_btn.style.visibility = 'visible';
    ver_btn.style.visibility = 'hidden';
});

noVer_btn.addEventListener('click', () => {
    inpass_1.type = 'password';

    ver_btn.style.visibility = 'visible';
    noVer_btn.style.visibility = 'hidden';
});

// Configuración de Google Sign-In
function initGoogleSignIn() {
    google.accounts.id.initialize({
        client_id: 'cuentas-387114',
        callback: handleGoogleSignIn,
        auto_select: true,
    });
    google.accounts.id.renderButton(
        document.getElementById('google-signin-button'), { theme: 'filled_blue' }
    );
}

// Manejo del inicio de sesión con Google
function handleGoogleSignIn(response) {
    const credential = response.credential;
    // Aquí puedes enviar la credencial a tu servidor para autenticar al usuario
}
document.addEventListener('DOMContentLoaded', () => {
    initGoogleSignIn();
});

//hover btn

const btn = document.querySelector('.btn-is')
const border_btn = document.querySelector('.btn-borde')
btn.addEventListener('mouseover', () => {

    border_btn.style.height = '40px';
    border_btn.style.width = '85% !important';

})
btn.addEventListener('mouseout', () => {

    border_btn.style.height = '35px';
    border_btn.style.width = '80% !important';

})